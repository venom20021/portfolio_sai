/** Convert useChat's UIMessage format (with `parts` array, `id`) to the
 * CoreMessage format expected by streamText (with `content` as string).
 */
export function convertMessages(messages: unknown[]): unknown {
  return messages.map((msg: any) => {
    // Already in CoreMessage format (has content as string)
    if (typeof msg.content === 'string' && !msg.parts) {
      return msg;
    }

    // UIMessage format from useChat
    if (msg.parts) {
      const textContent = msg.parts
        .filter((p: any) => p.type === 'text')
        .map((p: any) => p.text ?? '')
        .join('');

      if (msg.role === 'user') {
        return { role: 'user', content: textContent };
      }

      if (msg.role === 'assistant') {
        const toolInvocations = msg.parts.filter(
          (p: any) => p.type === 'tool-invocation'
        );

        if (toolInvocations.length > 0) {
          const contentParts: Array<any> = [];
          if (textContent) {
            contentParts.push({ type: 'text', text: textContent });
          }
          for (const ti of toolInvocations) {
            const state = ti.state;
            if (state === 'result') {
              contentParts.push({
                type: 'tool-call',
                toolCallId: ti.toolCallId,
                toolName: ti.toolName,
                args: ti.args,
              });
            }
          }
          return contentParts.length > 0
            ? { role: 'assistant', content: contentParts }
            : { role: 'assistant', content: textContent || '' };
        }

        return { role: 'assistant', content: textContent || '' };
      }

      // Fallback: extract text content
      return { role: msg.role, content: textContent || '' };
    }

    return msg;
  });
}
