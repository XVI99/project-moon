'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            setLoading(false);
            return;
        }

        const supabase = createClient();
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setSuccess(true);
        }
    };

    if (success) {
        return (
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-md mx-auto text-center">
                    <div className="bg-pm-gold/20 border border-pm-gold rounded-lg p-8">
                        <div className="text-5xl mb-4">📧</div>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">
                            Check Your Email
                        </h2>
                        <p className="text-pm-gray-light mb-6">
                            We&apos;ve sent a confirmation link to <strong className="text-white">{email}</strong>.
                            Click the link to complete your registration.
                        </p>
                        <Link
                            href="/login"
                            className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                        >
                            Return to Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">
                        Join Project Moon Hub
                    </h1>
                    <p className="text-pm-gray-light">
                        Create an account to save your progress and unlock features
                    </p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSignup} className="space-y-6">
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
                                className="w-full px-4 py-2 bg-pm-black border border-pm-gray-dark rounded-lg text-white focus:border-pm-gold focus:outline-none transition-colors"
                                placeholder="your@email.com"
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
                                className="w-full px-4 py-2 bg-pm-black border border-pm-gray-dark rounded-lg text-white focus:border-pm-gold focus:outline-none transition-colors"
                                placeholder="At least 6 characters"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-pm-gray-light mb-1">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 bg-pm-black border border-pm-gray-dark rounded-lg text-white focus:border-pm-gold focus:outline-none transition-colors"
                                placeholder="Re-enter password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-pm-gold text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </div>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <p className="text-pm-gray-light">
                        Already have an account?{' '}
                        <Link href="/login" className="text-pm-red hover:text-red-400 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
