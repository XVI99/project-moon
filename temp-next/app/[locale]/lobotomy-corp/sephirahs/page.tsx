import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { SEPHIRAHS } from '@/lib/data/lobcorp/sephirahs';
import { SEPHIRAHS_ZH } from '@/lib/data/lobcorp/sephirahs_zh';

export default function SephirahsPage() {
    const t = useTranslations('lobotomy.sephirahs');
    const commonT = useTranslations('lobotomy');
    const locale = useLocale();
    const sephirahsData = locale === 'zh' ? SEPHIRAHS_ZH : SEPHIRAHS;

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <Link
                    href="/lobotomy-corp"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    {commonT('back')}
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    🔮 {t('title')}
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>
            </div>

            {/* The Tree of Sephiroth */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6">
                    <h2 className="text-xl font-serif font-bold text-pm-gold mb-4 text-center">
                        {t('treeTitle')}
                    </h2>
                    <p className="text-pm-gray-light text-center mb-6">
                        {t('treeDesc')}
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
                {sephirahsData.map((sephirah) => (
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
                            <h4 className="text-xs text-pm-gray-light/70 uppercase mb-1">{t('personality')}</h4>
                            <p className="text-sm text-white">
                                {sephirah.personality}
                            </p>
                        </div>

                        {/* Suppression Guide */}
                        <div className="bg-red-900/10 border border-red-500/30 rounded-lg p-3 mb-4">
                            <h4 className="text-xs text-red-400 uppercase mb-1">{t('meltdown')}</h4>
                            <p className="text-sm text-pm-gray-light">
                                {sephirah.suppressionGuide}
                            </p>
                        </div>

                        {/* Quest Reward */}
                        <div className="bg-pm-gold/10 border border-pm-gold/30 rounded-lg p-3">
                            <h4 className="text-xs text-pm-gold uppercase mb-1">{t('reward')}</h4>
                            <p className="text-sm text-pm-gray-light">
                                {sephirah.questReward}
                            </p>
                        </div>

                        {/* Connections */}
                        {sephirah.connections.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-pm-gray-dark">
                                <p className="text-xs text-pm-gray-light/70">
                                    {t('related')} {sephirah.connections.join(' • ')}
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
                        {t('spoilerTitle')}
                    </h3>
                    <p className="text-pm-gray-light mb-4">
                        {t('spoilerDesc')}
                    </p>
                    <Link
                        href="/library-of-ruina/lore-ai"
                        className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                    >
                        {t('askAI')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
