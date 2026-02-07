import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-pm-gray-dark/50 border-t border-pm-gray-dark mt-20 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-pm-gray-light">
                            © {new Date().getFullYear()} Project Moon Hub. All rights reserved.
                        </p>
                        <p className="mt-1 text-sm text-pm-gray-light/70">
                            Project Moon Hub is a fan site and is not affiliated with Project Moon.
                        </p>
                    </div>

                    {/* Sponsor Button - HIGH PRIORITY MONETIZATION */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://buymeacoffee.com/projectmoonhub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-pm-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-all hover:-translate-y-0.5"
                        >
                            ☕ Support Us
                        </a>
                        <a
                            href="https://afdian.com/a/projectmoonhub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-500 transition-all hover:-translate-y-0.5"
                        >
                            💜 爱发电
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="mt-6 pt-6 border-t border-pm-gray-dark flex flex-wrap justify-center gap-6 text-sm text-pm-gray-light/70">
                    <Link href="/lobotomy-corp" className="hover:text-pm-red transition-colors">
                        Lobotomy Corp
                    </Link>
                    <Link href="/library-of-ruina" className="hover:text-pm-red transition-colors">
                        Library of Ruina
                    </Link>
                    <Link href="/limbus-company" className="hover:text-pm-red transition-colors">
                        Limbus Company
                    </Link>
                    <span className="text-pm-gray-dark">|</span>
                    <Link href="/blog" className="hover:text-pm-gold transition-colors">
                        Blog
                    </Link>
                    <Link href="/quiz/city-persona" className="hover:text-pm-gold transition-colors">
                        Personality Quiz
                    </Link>
                </div>
            </div>
        </footer>
    );
}
