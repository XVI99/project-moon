'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push(redirectTo);
            router.refresh();
        }
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-pm-gray-light">
                        Sign in to save your team builds and access premium features
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6 space-y-4">
                        {error && (
                            <div className="bg-pm-red/20 border border-pm-red text-pm-red px-4 py-2 rounded">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-pm-gray-light mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 bg-pm-black border border-pm-gray-dark rounded-lg text-white focus:border-pm-red focus:outline-none transition-colors"
                                placeholder="manager@lobotomy-corp.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-pm-gray-light mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 bg-pm-black border border-pm-gray-dark rounded-lg text-white focus:border-pm-red focus:outline-none transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-pm-red text-white font-bold py-3 px-4 rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </div>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center space-y-4">
                    <p className="text-pm-gray-light">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-pm-gold hover:text-yellow-400 font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Benefits */}
                <div className="mt-10 p-6 bg-pm-gray-dark/20 border border-pm-gray-dark/50 rounded-lg">
                    <h3 className="text-lg font-serif font-bold text-white mb-4 text-center">
                        Member Benefits
                    </h3>
                    <ul className="space-y-2 text-pm-gray-light text-sm">
                        <li className="flex items-center gap-2">
                            <span className="text-pm-gold">✓</span>
                            Save your team builds to the cloud
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-pm-gold">✓</span>
                            Get personalized AI recommendations
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-pm-gold">✓</span>
                            Access member-only content early
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
