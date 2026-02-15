import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { CHARACTERS, FACTIONS, EVENTS } from '@/lib/data/ruina/lore';
import { CHARACTERS_ZH, FACTIONS_ZH, EVENTS_ZH } from '@/lib/data/ruina/lore_zh';

export default function LorePage() {
    const t = useTranslations('ruina.lore');
    const commonT = useTranslations('ruina');
    const locale = useLocale();

    const charactersData = locale === 'zh' ? CHARACTERS_ZH : CHARACTERS;
    const factionsData = locale === 'zh' ? FACTIONS_ZH : FACTIONS;
    const eventsData = locale === 'zh' ? EVENTS_ZH : EVENTS;

    const tierColors: Record<string, string> = {
        Head: 'bg-red-700 text-white',
        Wing: 'bg-purple-600 text-white',
        Fixer: 'bg-blue-600 text-white',
        Syndicate: 'bg-yellow-600 text-black',
        Claw: 'bg-orange-600 text-white',
        Finger: 'bg-gray-600 text-white',
        Other: 'bg-pm-gray-dark text-pm-gray-light',
    };

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <Link
                    href="/library-of-ruina"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    {commonT('back')}
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    📖 {t('title')}
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>
            </div>

            {/* Quick Nav */}
            <div className="flex justify-center gap-4 mb-10">
                <a href="#characters" className="text-pm-gray-light hover:text-pm-gold">{t('nav.characters')}</a>
                <span className="text-pm-gray-dark">|</span>
                <a href="#factions" className="text-pm-gray-light hover:text-pm-gold">{t('nav.factions')}</a>
                <span className="text-pm-gray-dark">|</span>
                <a href="#events" className="text-pm-gray-light hover:text-pm-gold">{t('nav.events')}</a>
            </div>

            {/* Characters Section */}
            <section id="characters" className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                    <span>👥</span> {t('characters.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {charactersData.map((char) => (
                        <div
                            key={char.id}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-gold transition-all"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{char.name}</h3>
                                    <p className="text-sm text-pm-gold">{char.title}</p>
                                </div>
                                {char.isPlayable && (
                                    <span className="text-xs bg-green-600/30 text-green-400 px-2 py-1 rounded">
                                        {t('characters.playable')}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-pm-gray-light mb-3 line-clamp-3">
                                {char.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-xs bg-pm-gray-dark text-pm-gray-light px-2 py-0.5 rounded">
                                    {char.faction}
                                </span>
                            </div>
                            {char.quotes.length > 0 && (
                                <p className="mt-3 text-xs text-pm-gray-light/70 italic">
                                    {char.quotes[0]}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Factions Section */}
            <section id="factions" className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                    <span>🏛️</span> {t('factions.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {factionsData.map((faction) => (
                        <div
                            key={faction.id}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-gold transition-all"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-bold text-white">{faction.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${tierColors[faction.tier]}`}>
                                    {t(`tiers.${faction.tier}`)}
                                </span>
                            </div>
                            <p className="text-sm text-pm-gray-light mb-3">
                                {faction.description}
                            </p>
                            <div className="border-t border-pm-gray-dark pt-3 mt-3">
                                <p className="text-xs text-pm-gold mb-2">{t('factions.philosophy')}</p>
                                <p className="text-xs text-pm-gray-light italic">
                                    &ldquo;{faction.philosophy}&rdquo;
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xs text-pm-gray-light/70">
                                    {t('factions.members')} {faction.keyMembers.slice(0, 4).join(', ')}
                                    {faction.keyMembers.length > 4 && '...'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                    <span>📜</span> {t('events.title')}
                </h2>
                <div className="space-y-4">
                    {eventsData.sort((a, b) => a.order - b.order).map((event, index) => (
                        <div
                            key={event.id}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-gold transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-pm-gold text-black font-bold rounded-full flex items-center justify-center text-sm">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded ${event.spoilerLevel === 1 ? 'bg-green-600/30 text-green-400' :
                                            event.spoilerLevel === 2 ? 'bg-yellow-600/30 text-yellow-400' :
                                                'bg-red-600/30 text-red-400'
                                            }`}>
                                            {event.spoilerLevel === 1 ? t('events.early') :
                                                event.spoilerLevel === 2 ? t('events.mid') : t('events.end')}
                                        </span>
                                    </div>
                                    <p className="text-sm text-pm-gray-light">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-pm-gold/20 to-pm-red/20 border border-pm-gold/50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {t('cta.title')}
                </h3>
                <p className="text-pm-gray-light mb-4">
                    {t('cta.desc')}
                </p>
                <Link
                    href="/library-of-ruina/lore-ai"
                    className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                >
                    {t('cta.button')}
                </Link>
            </section>
        </div>
    );
}
