/**
 * Ad Placeholder Component
 * 
 * Shows placeholder in development, real ads in production.
 * Ensures UI layout is preserved when ads are added later.
 */

interface AdPlaceholderProps {
    position: 'sidebar' | 'content-bottom' | 'result-page' | 'header-banner';
    className?: string;
}

// Ad slot IDs - replace with actual AdSense slots when approved
const AD_SLOTS: Record<string, string> = {
    'sidebar': 'ca-pub-xxx-sidebar',
    'content-bottom': 'ca-pub-xxx-content',
    'result-page': 'ca-pub-xxx-result',
    'header-banner': 'ca-pub-xxx-header',
};

export function AdPlaceholder({ position, className = '' }: AdPlaceholderProps) {
    const isDev = process.env.NODE_ENV === 'development';

    // Size presets for different positions
    const sizeClasses: Record<string, string> = {
        'sidebar': 'w-[300px] h-[250px]',
        'content-bottom': 'w-full h-[90px]',
        'result-page': 'w-full h-[250px]',
        'header-banner': 'w-full h-[90px]',
    };

    if (isDev) {
        return (
            <div
                className={`
          ${sizeClasses[position]} 
          border-2 border-dashed border-pm-gray-dark 
          flex items-center justify-center 
          text-pm-gray-light/50 text-sm
          rounded-lg
          ${className}
        `}
            >
                📰 Ad Placeholder: {position}
            </div>
        );
    }

    // Production: render actual AdSense
    return (
        <ins
            className={`adsbygoogle ${sizeClasses[position]} ${className}`}
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXX"
            data-ad-slot={AD_SLOTS[position]}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
}
