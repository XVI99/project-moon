import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'edge';

export default async function AccountPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login?redirect=/account');
    }

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-20 h-20 mx-auto mb-4 bg-pm-gold rounded-full flex items-center justify-center text-black font-bold text-3xl">
                        {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-white">
                        My Account
                    </h1>
                    <p className="mt-2 text-pm-gray-light">
                        {user.email}
                    </p>
                </div>

                {/* Account Info */}
                <div className="space-y-6">
                    <section className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6">
                        <h2 className="text-xl font-serif font-bold text-white mb-4">
                            Account Details
                        </h2>
                        <div className="space-y-3 text-pm-gray-light">
                            <div className="flex justify-between">
                                <span>Email:</span>
                                <span className="text-white">{user.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Member Since:</span>
                                <span className="text-white">
                                    {new Date(user.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Subscription:</span>
                                <span className="text-pm-gray-light">Free Tier</span>
                            </div>
                        </div>
                    </section>

                    {/* Upgrade CTA */}
                    <section className="bg-gradient-to-r from-pm-gold/20 to-pm-red/20 border border-pm-gold/50 rounded-lg p-6 text-center">
                        <h3 className="text-xl font-serif font-bold text-white mb-2">
                            Upgrade to Prime
                        </h3>
                        <p className="text-pm-gray-light mb-4">
                            Unlock AI team recommendations, cloud saves, and ad-free experience
                        </p>
                        <button
                            disabled
                            className="bg-pm-gold text-black font-bold py-2 px-6 rounded-lg opacity-60 cursor-not-allowed"
                        >
                            Coming Soon - $2.99/month
                        </button>
                    </section>

                    {/* Saved Teams */}
                    <section className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6">
                        <h2 className="text-xl font-serif font-bold text-white mb-4">
                            Saved Teams
                        </h2>
                        <div className="text-center py-8 text-pm-gray-light">
                            <div className="text-4xl mb-3">📋</div>
                            <p>You haven&apos;t saved any teams yet.</p>
                            <p className="text-sm mt-2">
                                Use the Team Builder to create and save your builds.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
