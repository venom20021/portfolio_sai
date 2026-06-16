'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Sparkles, Code2, Bot, User, AlertCircle, StopCircle, RefreshCw } from 'lucide-react';

interface AIMentorChatProps {
  variant?: 'page' | 'widget';
  onClose?: () => void;
}

const boilerplatePrompts = [
  'Generate a Next.js API route with GET + POST handlers',
  'Create a React component with TypeScript interfaces',
  'Write a Docker Compose for a full-stack app',
  'Generate an AWS Lambda function in TypeScript',
  'Create a FastAPI CRUD endpoint boilerplate',
  'Generate a Tailwind CSS component with animations',
];

const suggestedQuestions = [
  "Explain Sai's collaborative whiteboard project",
  'What tech stack does this portfolio use?',
  'Suggest improvements for my React component',
  ...boilerplatePrompts.slice(0, 2),
];

export default function AIMentorChat({ variant = 'page', onClose }: AIMentorChatProps) {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({ api: '/api/ai-mentor' }),
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || isLoading) return;
      setShowSuggestions(false);
      sendMessage({ text: input });
      setInput('');
    },
    [input, isLoading, sendMessage]
  );

  const handleSuggestedClick = useCallback(
    (question: string) => {
      setShowSuggestions(false);
      sendMessage({ text: question });
    },
    [sendMessage]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const isWidget = variant === 'widget';

  const renderToolPart = (part: { type: string; [key: string]: unknown }) => {
    const toolName = part.type.startsWith('tool-') ? part.type.slice(5) : null;
    if (!toolName) return null;

    const state = (part as { state?: string }).state;
    const output = (part as { output?: { code?: string; explanation?: string } }).output;

    if (state === 'input-available' || state === 'output-available') {
      if (toolName === 'generateBoilerplate' && output?.code) {
        return (
          <div className="my-3">
            {output.explanation && (
              <p className="text-xs text-muted-foreground mb-2">{output.explanation}</p>
            )}
            <pre className="bg-muted/50 border border-border/50 rounded-xl p-4 overflow-x-auto text-xs">
              <code>{output.code}</code>
            </pre>
          </div>
        );
      }
      if (toolName === 'getProjectDetails' || toolName === 'getSkillsByCategory') {
        return null; // inline data, don't render separately
      }
    }

    if (state === 'input-streaming') {
      return (
        <div className="flex items-center gap-2 text-xs text-muted-foreground my-2">
          <Loader2 className="h-3 w-3 animate-spin" />
          Running {toolName.replace(/-/g, ' ')}...
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`flex flex-col ${isWidget ? 'h-full' : 'h-[70vh] min-h-[500px]'}`}>
      {/* Header */}
      {isWidget ? (
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">AI Code Mentor</h3>
              <p className="text-[10px] text-muted-foreground">Powered by Groq (Llama 3.3)</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 mb-3">
              <Sparkles className="h-3 w-3" />
              AI-Powered
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">AI Code Mentor</h1>
            <p className="text-muted-foreground mt-1">
              Ask me anything about Sai&apos;s projects, get boilerplate code, or request code improvements.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/50">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Groq Llama 3.3 70B</span>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div
        className={`flex-1 overflow-y-auto ${
          isWidget ? 'px-3 py-3' : 'px-0.5 py-2'
        } space-y-4 scroll-smooth`}
      >
        {messages.length === 0 ? (
          /* Empty state with suggestions */
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div
              className={`${
                isWidget ? 'h-12 w-12' : 'h-16 w-16'
              } rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 border border-primary/10`}
            >
              <Code2 className={`${isWidget ? 'h-6 w-6' : 'h-8 w-8'} text-primary`} />
            </div>
            <h3 className={`${isWidget ? 'text-sm' : 'text-lg'} font-semibold text-foreground mb-1`}>
              What would you like to know?
            </h3>
            <p className={`${isWidget ? 'text-xs' : 'text-sm'} text-muted-foreground mb-4 max-w-sm`}>
              I can explain projects, generate code, review patterns, or help with your tech stack
              questions.
            </p>
            <div className="flex flex-wrap gap-2 justify-center max-w-md">
              {(isWidget ? suggestedQuestions.slice(0, 3) : suggestedQuestions).map((q) => (
                <button
                  key={q}
                  onClick={() => handleSuggestedClick(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 mt-0.5">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-2.5'
                      : 'bg-muted/30 border border-border/30 rounded-2xl rounded-tl-md px-4 py-2.5'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <div className="text-sm text-foreground leading-relaxed">
                      {message.parts.map((part, i) => {
                        if (part.type === 'text') {
                          return (
                            <div key={i} className="whitespace-pre-wrap">
                              {part.text}
                            </div>
                          );
                        }
                        if (part.type === 'reasoning') {
                          return (
                            <div key={i} className="text-xs text-muted-foreground italic my-1">
                              {part.text}
                            </div>
                          );
                        }
                        if (part.type.startsWith('tool-') || part.type === 'dynamic-tool') {
                          return <div key={i}>{renderToolPart(part)}</div>;
                        }
                        return null;
                      })}
                    </div>
                  ) : (
                    <div className="text-sm text-primary-foreground whitespace-pre-wrap">
                      {message.parts
                        .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
                        .map((p) => p.text)
                        .join('')}
                    </div>
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Streaming indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted/30 border border-border/30 rounded-2xl rounded-tl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-2 w-2 rounded-full bg-primary"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.2,
                      }}
                      className="h-2 w-2 rounded-full bg-primary"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4,
                      }}
                      className="h-2 w-2 rounded-full bg-primary"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error state */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-destructive/5 border border-destructive/20"
              >
                <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-destructive mb-1">
                    Something went wrong
                  </p>
                  <p className="text-xs text-destructive/80">
                    {error.message || 'Failed to get a response. Please try again.'}
                  </p>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input area */}
      <div className={`${isWidget ? 'px-3 py-3 border-t border-border/50' : 'pt-4'} shrink-0`}>
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, get boilerplate, or request code review..."
              rows={1}
              disabled={isLoading}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none transition-all duration-200 min-h-[42px] max-h-[120px] disabled:opacity-50"
              style={{ height: 'auto' }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
              }}
            />
          </div>

          {isLoading ? (
            <button
              type="button"
              onClick={() => stop()}
              className="p-2.5 rounded-xl bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 transition-all duration-200 shrink-0"
              aria-label="Stop generating"
            >
              <StopCircle className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shrink-0 shadow-sm hover:shadow-md"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          )}
        </form>

        <p
          className={`${
            isWidget ? 'text-[10px]' : 'text-xs'
          } text-muted-foreground/50 mt-2 text-center`}
        >
          AI-generated responses may contain errors. Verify important code.
        </p>
      </div>
    </div>
  );
}
