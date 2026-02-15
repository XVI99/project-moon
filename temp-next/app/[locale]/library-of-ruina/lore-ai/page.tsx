'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function LoreAIPage() {
    const t = useTranslations('ruina.loreAI');
    const tRuina = useTranslations('ruina'); // For back link

    // Get questions as array
    const sampleQuestions = t.raw('questions') as string[];

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: t('welcome'),
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (question: string) => {
        if (!question.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: question,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/ai/lore-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question, game: 'library-of-ruina' }),
            });

            if (!response.ok) throw new Error('Failed to get response');

            const data = await response.json();

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.answer,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: t('error'),
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-8">
                <Link
                    href="/library-of-ruina"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    {tRuina('back')}
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    {t('title')}
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Chat Container */}
                <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg overflow-hidden">
                    {/* Messages */}
                    <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-4 ${message.role === 'user'
                                        ? 'bg-pm-gold text-black'
                                        : 'bg-pm-gray-dark/60 text-pm-gray-light'
                                        }`}
                                >
                                    {message.role === 'assistant' && (
                                        <div className="flex items-center gap-2 mb-2 text-pm-gold font-bold text-sm">
                                            <span>📚</span> {t('assistantName')}
                                        </div>
                                    )}
                                    <div className="whitespace-pre-wrap">
                                        {message.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-pm-gray-dark/60 rounded-lg p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="animate-pulse">📚</span>
                                        <span className="text-pm-gray-light">{t('searching')}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-pm-gray-dark p-4">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(input);
                            }}
                            className="flex gap-2"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={t('placeholder')}
                                disabled={isLoading}
                                className="flex-1 bg-pm-black border border-pm-gray-dark rounded-lg px-4 py-2 text-white placeholder:text-pm-gray-light/50 focus:border-pm-gold focus:outline-none"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-pm-gold text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {t('ask')}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sample Questions */}
                <div className="mt-6">
                    <h3 className="text-sm text-pm-gray-light mb-3">{t('tryAsking')}</h3>
                    <div className="flex flex-wrap gap-2">
                        {sampleQuestions.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => handleSubmit(q)}
                                disabled={isLoading}
                                className="text-sm bg-pm-gray-dark/50 border border-pm-gray-dark rounded-full px-4 py-2 text-pm-gray-light hover:border-pm-gold hover:text-pm-gold transition-all disabled:opacity-50"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="mt-6 text-center text-xs text-pm-gray-light/50">
                    {t('disclaimer')}
                </p>
            </div>
        </div>
    );
}
