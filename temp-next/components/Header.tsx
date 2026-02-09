'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { User } from '@supabase/supabase-js';

const navItems = [
  { href: '/lobotomy-corp', labelKey: 'lobotomyCorp' },
  { href: '/library-of-ruina', labelKey: 'libraryOfRuina' },
  { href: '/limbus-company', labelKey: 'limbusCompany' },
] as const;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('common.nav');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  // Check if current path matches nav item (accounting for locale prefix)
  const isActivePath = (href: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, '');
    return pathWithoutLocale === href || pathWithoutLocale.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-pm-gray-dark">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-white hover:text-pm-red transition-colors"
        >
          Project Moon<span className="text-pm-red">.</span>Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${isActivePath(item.href)
                ? 'text-pm-red'
                : 'text-pm-gray-light hover:text-pm-red'
                }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Divider */}
          <span className="text-pm-gray-dark">|</span>

          {/* Auth Buttons */}
          {loading ? (
            <span className="text-pm-gray-light text-sm">...</span>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 text-pm-gray-light hover:text-pm-gold transition-colors"
              >
                <span className="w-8 h-8 bg-pm-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
                <span className="hidden lg:inline text-sm">
                  {user.email?.split('@')[0]}
                </span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-pm-gray-dark border border-pm-gray-dark rounded-lg shadow-lg py-2">
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-pm-gray-light hover:bg-pm-black hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t('account')}
                  </Link>
                  <hr className="border-pm-gray-dark my-2" />
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-pm-red hover:bg-pm-black transition-colors"
                  >
                    {t('logout')}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-pm-gray-light hover:text-white transition-colors"
              >
                {t('login')}
              </Link>
              <Link
                href="/signup"
                className="bg-pm-gold text-black font-bold py-1.5 px-4 rounded-lg hover:bg-yellow-500 transition-all text-sm"
              >
                {t('signup')}
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="text-pm-gray-light hover:text-pm-red transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
