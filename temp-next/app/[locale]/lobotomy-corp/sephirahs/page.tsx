import Link from 'next/link';
import { SEPHIRAHS } from '@/lib/data/lobcorp/sephirahs';

export default function SephirahsPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <Link
                    href="/lobotomy-corp"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    ← Back to Lobotomy Corporation
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    🔮 Sephirah Guides
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    Learn about each department head and how to complete their meltdowns
                </p>
            </div>

            {/* The Tree of Sephiroth */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6">
                    <h2 className="text-xl font-serif font-bold text-pm-gold mb-4 text-center">
                        The Tree of Sephiroth
                    </h2>
                    <p className="text-pm-gray-light text-center mb-6">
                        Each department is managed by a Sephirah - an AI modeled after the structure of the Kabbalah Tree of Life.
                        Completing their stories is key to understanding the truth behind Lobotomy Corporation.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div className="col-span-3 flex justify-center">
                            <span className="bg-pm-gold/20 border border-pm-gold px-4 py-2 rounded-lg">
                                Keter (Crown) - ?????
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <span className="bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-lg">
                                Binah - Extraction
                            </span>
                        </div>
                        <div></div>
                        <div className="flex justify-center">
                            <span className="bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-lg">
                                Hokma - Architecture
                            </span>
                        </div>
                        <div className="col-span-3 flex justify-center">
                            <span className="bg-green-600/20 border border-green-500 px-4 py-2 rounded-lg">
                                Tiphereth - Central Command
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sephirah Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SEPHIRAHS.map((sephirah) => (
                    <div
                        key={sephirah.id}
                        className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-5 hover:border-pm-gold transition-all"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className="text-4xl">{sephirah.portrait}</div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{sephirah.name}</h3>
                                <p className="text-sm text-pm-gold">{sephirah.department}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-pm-gray-light mb-4">
                            {sephirah.description}
                        </p>

                        {/* Personality */}
                        <div className="mb-4">
                            <h4 className="text-xs text-pm-gray-light/70 uppercase mb-1">Personality</h4>
                            <p className="text-sm text-white">
                                {sephirah.personality}
                            </p>
                        </div>

                        {/* Suppression Guide */}
                        <div className="bg-red-900/10 border border-red-500/30 rounded-lg p-3 mb-4">
                            <h4 className="text-xs text-red-400 uppercase mb-1">⚠️ Meltdown Guide</h4>
                            <p className="text-sm text-pm-gray-light">
                                {sephirah.suppressionGuide}
                            </p>
                        </div>

                        {/* Quest Reward */}
                        <div className="bg-pm-gold/10 border border-pm-gold/30 rounded-lg p-3">
                            <h4 className="text-xs text-pm-gold uppercase mb-1">🎁 Core Suppression Reward</h4>
                            <p className="text-sm text-pm-gray-light">
                                {sephirah.questReward}
                            </p>
                        </div>

                        {/* Connections */}
                        {sephirah.connections.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-pm-gray-dark">
                                <p className="text-xs text-pm-gray-light/70">
                                    Related: {sephirah.connections.join(' • ')}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Story Warning */}
            <div className="max-w-4xl mx-auto mt-12">
                <div className="bg-gradient-to-r from-pm-red/20 to-pm-gold/20 border border-pm-red/50 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                        📖 Story Spoiler Warning
                    </h3>
                    <p className="text-pm-gray-light mb-4">
                        Each Sephirah has a complex backstory tied to the facility&apos;s dark history.
                        Completing their Core Suppressions reveals the truth behind Lobotomy Corporation.
                    </p>
                    <Link
                        href="/library-of-ruina/lore-ai"
                        className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                    >
                        🤖 Ask the Lore AI
                    </Link>
                </div>
            </div>
        </div>
    );
}
