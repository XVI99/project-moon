import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

// Game cards data
const games = [
  {
    title: 'Lobotomy Corp',
    description: 'Manage horrifying Abnormalities and harvest their energy. A monster management simulation where failure has dire consequences.',
    href: '/lobotomy-corp',
    steamUrl: 'https://store.steampowered.com/app/568220/Lobotomy_Corporation__Monster_Management_Simulation/',
    color: 'pm-red',
    borderHover: 'hover:border-pm-red',
  },
  {
    title: 'Library of Ruina',
    description: 'Become the owner of a mystical Library and turn your guests into books. A "Library Battle Simulation" with deep deck-building mechanics.',
    href: '/library-of-ruina',
    steamUrl: 'https://store.steampowered.com/app/1256670/Library_Of_Ruina/',
    color: 'pm-gold',
    borderHover: 'hover:border-pm-gold',
  },
  {
    title: 'Limbus Company',
    description: 'Lead a team of 12 Sinners on a quest through The City to reclaim the Golden Boughs. A turn-based RPG with a cinematic flair.',
    href: '/limbus-company',
    steamUrl: 'https://store.steampowered.com/app/1973530/Limbus_Company/',
    color: 'pm-red',
    borderHover: 'hover:border-pm-red',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
          Face the Fear<span className="text-pm-red">,</span> Build the Future
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
          Your definitive guide to the grim, captivating universe of Project Moon. Welcome to The City.
        </p>
      </section>

      {/* Video Section */}
      <section className="mt-12 md:mt-20">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
          Experience the Madness
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
          An Invitation to The City
        </h2>
        <div className="text-left space-y-4 text-pm-gray-light leading-relaxed">
          <p>
            The world of Project Moon is dominated by a single, sprawling megalopolis known only as The City.
            It is a place of stark contrasts, where unimaginable technology born from &quot;Singularities&quot;
            coexists with soul-crushing dystopia. The City is ruled by 26 hyper-corporate entities known as
            &quot;The Wings,&quot; each with its own laws, ethics, and monstrous power.
          </p>
          <p>
            From the creature-containment halls of <strong className="text-white">Lobotomy Corporation</strong>,
            to the fateful duels in the <strong className="text-white">Library of Ruina</strong>,
            and the desperate pilgrimage of the Sinners in <strong className="text-white">Limbus Company</strong>,
            every story is a struggle for survival, identity, and a sliver of humanity in a world that has
            forgotten its meaning. We are here to document it all.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="mt-12 md:mt-20">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
          Choose Your Distortion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              className={`
                bg-pm-gray-dark/50 p-6 rounded-lg 
                border border-pm-gray-dark 
                text-center 
                ${game.borderHover} 
                transition-all card-hover
              `}
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                {game.title}
              </h3>
              <p className="mb-4 text-pm-gray-light">
                {game.description}
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
                  Explore Hub
                </Link>
                <a
                  href={game.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pm-gray-dark text-pm-gray-light font-bold py-2 px-4 rounded border border-pm-gray-dark hover:border-pm-gray-light transition-colors"
                >
                  View on Steam
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
