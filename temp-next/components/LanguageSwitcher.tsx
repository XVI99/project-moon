'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, '') || '/';

    return (
        <div className="flex items-center gap-1 text-sm">
            <Link
                href={pathWithoutLocale}
                locale="en"
                className={`px-2 py-1 rounded transition-colors ${locale === 'en'
                    ? 'bg-pm-gold text-black font-bold'
                    : 'text-pm-gray-light hover:text-white'
                    }`}
            >
                EN
            </Link>
            <span className="text-pm-gray-dark">/</span>
            <Link
                href={pathWithoutLocale}
                locale="zh"
                className={`px-2 py-1 rounded transition-colors ${locale === 'zh'
                    ? 'bg-pm-gold text-black font-bold'
                    : 'text-pm-gray-light hover:text-white'
                    }`}
            >
                中文
            </Link>
        </div>
    );
}
