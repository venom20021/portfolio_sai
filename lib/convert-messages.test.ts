import { describe, it, expect } from 'vitest';
import { convertMessages } from './convert-messages';

describe('convertMessages', () => {
  it('converts a simple user message from UIMessage to CoreMessage format', () => {
    const input = [
      {
        parts: [{ type: 'text', text: 'Explain the whiteboard project' }],
        id: 'msg_1',
        role: 'user',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      role: 'user',
      content: 'Explain the whiteboard project',
    });
  });

  it('passes through messages already in CoreMessage format', () => {
    const input = [{ role: 'user', content: 'Hello' }];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ role: 'user', content: 'Hello' });
  });

  it('converts an assistant message with only text', () => {
    const input = [
      {
        parts: [{ type: 'text', text: 'Here is some information about that project.' }],
        id: 'msg_2',
        role: 'assistant',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      role: 'assistant',
      content: 'Here is some information about that project.',
    });
  });

  it('converts an assistant message with tool invocations (completed)', () => {
    const input = [
      {
        parts: [
          {
            type: 'text',
            text: 'Let me look up that project...',
          },
          {
            type: 'tool-invocation',
            toolCallId: 'call_123',
            toolName: 'getProjectDetails',
            args: { projectId: 1 },
            state: 'result',
            result: { id: 1, title: 'CollabBoard' },
          },
        ],
        id: 'msg_3',
        role: 'assistant',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      role: 'assistant',
      content: [
        { type: 'text', text: 'Let me look up that project...' },
        {
          type: 'tool-call',
          toolCallId: 'call_123',
          toolName: 'getProjectDetails',
          args: { projectId: 1 },
        },
      ],
    });
  });

  it('converts assistant message with multiple tool invocations', () => {
    const input = [
      {
        parts: [
          {
            type: 'tool-invocation',
            toolCallId: 'call_1',
            toolName: 'getProjectDetails',
            args: { projectId: 1 },
            state: 'result',
            result: { id: 1 },
          },
          {
            type: 'tool-invocation',
            toolCallId: 'call_2',
            toolName: 'getSkillsByCategory',
            args: { category: 'frontend' },
            state: 'result',
            result: ['React', 'TypeScript'],
          },
        ],
        id: 'msg_4',
        role: 'assistant',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      role: 'assistant',
      content: [
        {
          type: 'tool-call',
          toolCallId: 'call_1',
          toolName: 'getProjectDetails',
          args: { projectId: 1 },
        },
        {
          type: 'tool-call',
          toolCallId: 'call_2',
          toolName: 'getSkillsByCategory',
          args: { category: 'frontend' },
        },
      ],
    });
  });

  it('converts assistant message with pending tool invocations (state !== result)', () => {
    const input = [
      {
        parts: [
          {
            type: 'text',
            text: 'Let me check...',
          },
          {
            type: 'tool-invocation',
            toolCallId: 'call_456',
            toolName: 'generateBoilerplate',
            args: { pattern: 'nextjs-page' },
            state: 'call', // not yet completed
          },
        ],
        id: 'msg_5',
        role: 'assistant',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    // Pending tool invocations are present but no completed ones;
    // function enters the tool-invocation branch but returns content as an array
    // with the text part (no tool-call parts since none in 'result' state)
    expect(result[0]).toEqual({
      role: 'assistant',
      content: [{ type: 'text', text: 'Let me check...' }],
    });
  });

  it('handles empty text content', () => {
    const input = [
      {
        parts: [{ type: 'reasoning', text: 'Thinking...' }],
        id: 'msg_6',
        role: 'assistant',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      role: 'assistant',
      content: '',
    });
  });

  it('handles mixed part types (text, reasoning, tool-invocation)', () => {
    const input = [
      {
        parts: [
          { type: 'text', text: 'Here is what I found:' },
          { type: 'reasoning', text: 'The user asked about the whiteboard' },
          {
            type: 'tool-invocation',
            toolCallId: 'call_789',
            toolName: 'getProjectDetails',
            args: { projectId: 2 },
            state: 'result',
            result: { id: 2 },
          },
          { type: 'text', text: '\nHope that helps!' },
        ],
        id: 'msg_7',
        role: 'assistant',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    const content = result[0].content as Array<any>;
    // All text parts are joined into one, reasoning is dropped, tool-call is kept
    expect(content).toHaveLength(2);
    expect(content[0]).toEqual({
      type: 'text',
      text: 'Here is what I found:\nHope that helps!',
    });
    expect(content[1]).toEqual({
      type: 'tool-call',
      toolCallId: 'call_789',
      toolName: 'getProjectDetails',
      args: { projectId: 2 },
    });
  });

  it('handles empty messages array', () => {
    const result = convertMessages([]);
    expect(result).toEqual([]);
  });

  it('handles fallback for unknown roles', () => {
    const input = [
      {
        parts: [{ type: 'text', text: 'some data' }],
        id: 'msg_8',
        role: 'tool',
      },
    ];

    const result = convertMessages(input) as Array<{ role: string; content: unknown }>;

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      role: 'tool',
      content: 'some data',
    });
  });

  it('strips extra UIMessage fields (id) in converted output', () => {
    const input = [
      {
        parts: [{ type: 'text', text: 'Hello' }],
        id: 'msg_99',
        role: 'user',
        additionalField: 'should be stripped',
      },
    ];

    const result = convertMessages(input) as Array<Record<string, unknown>>;

    expect(result[0]).not.toHaveProperty('id');
    expect(result[0]).not.toHaveProperty('additionalField');
    expect(result[0]).not.toHaveProperty('parts');
    expect(result[0]).toEqual({
      role: 'user',
      content: 'Hello',
    });
  });
});
