'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Loader2,
  Sparkles,
  Code2,
  Bot,
  User,
  AlertCircle,
  StopCircle,
  Copy,
  Check,
  Lightbulb,
  Rocket,
  MessageSquare,
} from 'lucide-react';

interface AIMentorChatProps {
  variant?: 'page' | 'widget';
  onClose?: () => void;
}

const boilerplatePrompts = [
  'Generate a Next.js API route with GET + POST handlers',
  'Create a React component with TypeScript interfaces',
  'Write a Docker Compose for a full-stack app',
  'Generate an AWS Lambda function in TypeScript',
];

const suggestedQuestions = [
  "Explain Sai's collaborative whiteboard project",
  'What tech stack does this portfolio use?',
  ...boilerplatePrompts.slice(0, 3),
];

export default function AIMentorChat({ variant = 'page', onClose }: AIMentorChatProps) {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
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

  useEffect(() => {
    if (messages.length > 0) {
      setShowSuggestions(false);
    }
  }, [messages.length]);

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

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
          <div className="my-3 space-y-2">
            {output.explanation && (
              <p className="text-xs text-muted-foreground">{output.explanation}</p>
            )}
            <div className="group relative bg-muted/50 border border-border/40 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-muted/30 border-b border-border/20">
                <span className="text-[10px] font-medium text-muted-foreground">Code</span>
                <button
                  onClick={() => copyToClipboard(output.code!, toolName)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted/50"
                >
                  {copiedId === toolName ? (
                    <Check className="h-3 w-3 text-emerald-500" />
                  ) : (
                    <Copy className="h-3 w-3 text-muted-foreground" />
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-xs leading-relaxed">
                <code>{output.code}</code>
              </pre>
            </div>
          </div>
        );
      }
      if (toolName === 'getProjectDetails' || toolName === 'getSkillsByCategory') {
        return null;
      }
    }

    if (state === 'input-streaming') {
      return (
        <div className="flex items-center gap-2 text-xs text-muted-foreground my-2">
          <Loader2 className="h-3 w-3 animate-spin" />
          Analyzing {toolName.replace(/-/g, ' ')}...
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`flex flex-col rounded-2xl border border-border/40 bg-gradient-to-b from-background to-muted/5 overflow-hidden ${
        isWidget ? 'h-full' : 'h-[70vh] min-h-[500px]'
      }`}
    >
      {/* Header */}
      {isWidget ? (
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-sm">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">AI Code Mentor</h3>
              <p className="text-[10px] text-muted-foreground">Powered by Groq Llama 3.3</p>
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
        <div className="px-6 pt-6 pb-2 border-b border-border/20 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full border border-primary/20 mb-2">
                <Sparkles className="h-2.5 w-2.5" />
                AI-Powered
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                AI Code Mentor
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Ask about projects, get boilerplate code, or request code improvements
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-muted/30 border border-border/30">
              <Rocket className="h-3 w-3 text-primary" />
              <span className="text-[10px] text-muted-foreground">Groq Llama 3.3 70B</span>
            </div>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div
        className={`flex-1 overflow-y-auto ${
          isWidget ? 'px-3 py-3' : 'px-4 py-4'
        } scroll-smooth`}
      >
        <AnimatePresence mode="wait">
          {messages.length === 0 && showSuggestions ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-center px-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className={`${
                  isWidget ? 'h-12 w-12' : 'h-16 w-16'
                } rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/10 shadow-inner`}
              >
                <Lightbulb className={`${isWidget ? 'h-6 w-6' : 'h-8 w-8'} text-primary`} />
              </motion.div>
              <h3 className={`${isWidget ? 'text-sm' : 'text-lg'} font-semibold text-foreground mb-1`}>
                What would you like to know?
              </h3>
              <p className={`${isWidget ? 'text-xs' : 'text-sm'} text-muted-foreground mb-6 max-w-sm leading-relaxed`}>
                I can explain Sai&apos;s projects, generate boilerplate code, review patterns, or
                help with your tech stack questions.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.06 }}
                className="flex flex-wrap gap-2 justify-center max-w-md"
              >
                {(isWidget ? suggestedQuestions.slice(0, 3) : suggestedQuestions).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSuggestedClick(q)}
                    className="group text-xs px-3 py-2 rounded-xl border border-border/40 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm transition-all duration-200 flex items-center gap-1.5"
                  >
                    <MessageSquare className="h-3 w-3 shrink-0" />
                    {q}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 border border-primary/10 mt-0.5">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm'
                        : 'bg-gradient-to-br from-muted/40 to-muted/10 border border-border/30 rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <div className="text-sm text-foreground leading-relaxed space-y-1">
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
                              <div key={i} className="text-xs text-muted-foreground italic my-1 flex items-center gap-1">
                                <Loader2 className="h-2.5 w-2.5 animate-spin" />
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
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Streaming indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-gradient-to-br from-muted/40 to-muted/10 border border-border/30 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                        className="h-2 w-2 rounded-full bg-primary/70"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        className="h-2 w-2 rounded-full bg-primary/40"
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
                  <button
                    onClick={() => handleSuggestedClick(suggestedQuestions[0])}
                    className="text-xs text-destructive hover:text-destructive/80 font-medium underline underline-offset-2 shrink-0"
                  >
                    Retry
                  </button>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input area */}
      <div className={`${isWidget ? 'px-3 py-3 border-t border-border/20' : 'px-6 py-4 border-t border-border/20'} shrink-0 bg-gradient-to-t from-background/80 to-background/40 backdrop-blur-sm`}>
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
              className="w-full rounded-xl border border-border/50 bg-background/80 px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 resize-none transition-all duration-200 min-h-[42px] max-h-[120px] disabled:opacity-50"
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
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shrink-0 shadow-sm hover:shadow-md"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          )}
        </form>

        <p
          className={`${
            isWidget ? 'text-[10px]' : 'text-xs'
          } text-muted-foreground/40 mt-2 text-center`}
        >
          AI-generated responses may contain errors. Verify important code.
        </p>
      </div>
    </div>
  );
}
