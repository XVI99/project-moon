import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isZh = locale === 'zh';

    return {
        title: isZh
            ? '废墟图书馆攻略 - 剧情解析 & AI助手'
            : 'Library of Ruina Guide - Lore Explained & Deck Strategy',
        description: isZh
            ? '废墟图书馆完整攻略。AI剧情助手为你解析复杂的都市叙事，卡组构建指南、招待攻略、角色关系深度解读。'
            : 'Complete Library of Ruina guide with AI-powered lore explanations, deck building strategies, reception walkthroughs, and deep dive into The City\'s narrative.',
        keywords: isZh
            ? ['废墟图书馆攻略', '废墟图书馆剧情', '废墟图书馆卡组', '废墟图书馆wiki', '废墟图书馆招待攻略']
            : ['library of ruina lore', 'library of ruina deck guide', 'library of ruina explained', 'library of ruina reception guide', 'library of ruina best decks'],
        alternates: {
            canonical: `/${locale}/library-of-ruina`,
            languages: {
                en: '/en/library-of-ruina',
                zh: '/zh/library-of-ruina',
            },
        },
    };
}

export default function LibraryOfRuinaPage() {
    const t = useTranslations('ruina');

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            {/* Hero */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
                    {t('hero.title')}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
                    {t('hero.subtitle')}
                </p>
            </section>

            {/* Quick Tools Navigation */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link
                    href="/library-of-ruina/lore-ai"
                    className="bg-pm-gold/20 border border-pm-gold/50 rounded-lg p-6 text-center hover:border-pm-gold hover:bg-pm-gold/30 transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">🤖</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('tools.loreAI.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('tools.loreAI.desc')}
                    </p>
                    <span className="mt-4 inline-block text-pm-gold text-sm font-bold">
                        {t('tools.loreAI.cta')}
                    </span>
                </Link>

                <Link
                    href="/library-of-ruina/lore"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">📖</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('tools.loreDB.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('tools.loreDB.desc')}
                    </p>
                </Link>

                <Link
                    href="/library-of-ruina/deck-builder"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">🃏</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('tools.deckBuilder.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('tools.deckBuilder.desc')}
                    </p>
                </Link>
            </section>

            {/* Lore AI CTA */}
            <section className="mt-16 max-w-4xl mx-auto">
                <div className="bg-pm-gray-dark/30 border border-pm-gold/30 rounded-lg p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">
                                {t('dataHelper.title')}
                            </h2>
                            <p className="text-pm-gray-light mb-6">
                                {t('dataHelper.p1')}
                                <br />
                                {t('dataHelper.p2')}
                            </p>
                            <ul className="text-pm-gray-light text-left space-y-2 mb-6">
                                <li>{t('dataHelper.features.f1')}</li>
                                <li>{t('dataHelper.features.f2')}</li>
                                <li>{t('dataHelper.features.f3')}</li>
                                <li>{t('dataHelper.features.f4')}</li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    disabled
                                    className="bg-pm-gray-dark text-pm-gray-light font-bold py-3 px-6 rounded-lg cursor-not-allowed opacity-60"
                                >
                                    {t('dataHelper.button')}
                                </button>
                            </div>
                        </div>
                        <div className="w-48 h-48 bg-pm-gray-dark/50 rounded-lg flex items-center justify-center text-6xl">
                            🏛️
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Game */}
            <section className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
                    {t('about.title')}
                </h2>
                <div className="text-pm-gray-light leading-relaxed space-y-4">
                    <p>
                        {t('about.p1')}
                    </p>
                    <p>
                        {t('about.p2')}
                    </p>
                </div>
            </section>

            {/* Ad Placeholder */}
            <section className="mt-16 flex justify-center">
                <AdPlaceholder position="content-bottom" />
            </section>
        </div>
    );
}
