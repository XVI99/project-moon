import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

// Game cards data
const games = [
  {
    id: 'lobotomy',
    href: '/lobotomy-corp',
    steamUrl: 'https://store.steampowered.com/app/568220/Lobotomy_Corporation__Monster_Management_Simulation/',
    color: 'pm-red',
    borderHover: 'hover:border-pm-red',
  },
  {
    id: 'ruina',
    href: '/library-of-ruina',
    steamUrl: 'https://store.steampowered.com/app/1256670/Library_Of_Ruina/',
    color: 'pm-gold',
    borderHover: 'hover:border-pm-gold',
  },
  {
    id: 'limbus',
    href: '/limbus-company',
    steamUrl: 'https://store.steampowered.com/app/1973530/Limbus_Company/',
    color: 'pm-red',
    borderHover: 'hover:border-pm-red',
  },
];

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
          {t('hero.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
          {t('hero.subtitle')}
        </p>
      </section>

      {/* Video Section */}
      <section className="mt-12 md:mt-20">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
          {t('video.title')}
        </h2>
        <div
          className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg shadow-pm-red/20"
          style={{ aspectRatio: '21/9' }}
        >
          <iframe
            src="https://www.youtube.com/embed/HTRQgFYCXHY?autoplay=0"
            title="Project Moon Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mt-12 md:mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
          {t('intro.title')}
        </h2>
        <div className="text-left space-y-4 text-pm-gray-light leading-relaxed">
          <p>
            {t.rich('intro.p1')}
          </p>
          <p>
            {t.rich('intro.p2', {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>
            })}
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="mt-12 md:mt-20">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
          {t('games.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className={`
                bg-pm-gray-dark/50 p-6 rounded-lg 
                border border-pm-gray-dark 
                text-center 
                ${game.borderHover} 
                transition-all card-hover
              `}
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                {t(`games.${game.id}.title`)}
              </h3>
              <p className="mb-4 text-pm-gray-light">
                {t(`games.${game.id}.desc`)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={game.href}
                  className={`
                    inline-block font-bold py-2 px-4 rounded transition-colors
                    ${game.color === 'pm-gold'
                      ? 'bg-pm-gold text-black hover:bg-yellow-500'
                      : 'bg-pm-red text-white hover:bg-red-800'
                    }
                  `}
                >
                  {t('games.explore')}
                </Link>
                <a
                  href={game.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pm-gray-dark text-pm-gray-light font-bold py-2 px-4 rounded border border-pm-gray-dark hover:border-pm-gray-light transition-colors"
                >
                  {t('games.steam')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Placeholder - Content Bottom */}
      <section className="mt-16 flex justify-center">
        <AdPlaceholder position="content-bottom" />
      </section>
    </div>
  );
}
