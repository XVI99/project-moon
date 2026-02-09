// Library of Ruina Lore Database

export interface LoreCharacter {
    id: string;
    name: string;
    title: string;
    faction: string;
    description: string;
    firstAppearance: string;
    isPlayable: boolean;
    relations: string[];
    quotes: string[];
}

export interface LoreFaction {
    id: string;
    name: string;
    tier: 'Finger' | 'Claw' | 'Fixer' | 'Syndicate' | 'Wing' | 'Head' | 'Other';
    description: string;
    keyMembers: string[];
    philosophy: string;
}

export interface LoreLocation {
    id: string;
    name: string;
    type: 'District' | 'Building' | 'Organization' | 'Dimension';
    description: string;
    relatedFactions: string[];
}

export interface LoreEvent {
    id: string;
    title: string;
    description: string;
    order: number;
    spoilerLevel: 1 | 2 | 3; // 1 = early, 2 = mid, 3 = endgame
    relatedCharacters: string[];
}

// Key Characters
export const CHARACTERS: LoreCharacter[] = [
    {
        id: 'angela',
        name: 'Angela',
        title: 'Director of the Library',
        faction: 'The Library',
        description: 'Former AI secretary of Lobotomy Corporation, now transformed into a human form. She established the Library to collect the books of all who visit.',
        firstAppearance: 'Prologue',
        isPlayable: true,
        relations: ['Roland', 'Ayin', 'Carmen'],
        quotes: [
            '"I am the librarian. Welcome to my Library."',
            '"Every guest has a story worth collecting..."',
        ],
    },
    {
        id: 'roland',
        name: 'Roland',
        title: 'General Fixer / Office Director',
        faction: 'The Library',
        description: 'A former Grade 1 Fixer known as "The Black Silence". After losing everything, he became entangled with Angela\'s Library.',
        firstAppearance: 'Prologue',
        isPlayable: true,
        relations: ['Angela', 'Angelica'],
        quotes: [
            '"I\'m just a fixer who took on a strange job."',
            '"The City takes from everyone eventually."',
        ],
    },
    {
        id: 'binah',
        name: 'Binah',
        title: 'Floor of Philosophy Patron',
        faction: 'The Library',
        description: 'Former Head of the Extraction Team at L Corp, now a floor patron. Garion in her past life, she oversees deep philosophical receptions.',
        firstAppearance: 'Keter Floor unlock',
        isPlayable: true,
        relations: ['Angela', 'Hokma', 'Carmen'],
        quotes: [
            '"All things must return to where they came from."',
        ],
    },
    {
        id: 'gebura',
        name: 'Gebura',
        title: 'Floor of Language Patron',
        faction: 'The Library',
        description: 'The Red Mist, formerly known as Kali. The most powerful Color in the history of the Fixers, now serving as a floor patron.',
        firstAppearance: 'Language Floor unlock',
        isPlayable: true,
        relations: ['Angela', 'Salvador'],
        quotes: [
            '"Strength is the only language The City understands."',
        ],
    },
    {
        id: 'philip',
        name: 'Philip',
        title: 'Crying Child',
        faction: 'The Ensemble',
        description: 'A young man whose tragic story led him to become a Distortion. His reception represents the cruel reality of The City\'s justice system.',
        firstAppearance: 'Yun Office Reception',
        isPlayable: false,
        relations: ['Salvador', 'Yun Office'],
        quotes: [
            '"Why... why did this happen to me?"',
        ],
    },
    {
        id: 'xiao',
        name: 'Xiao',
        title: 'Liu Association Director',
        faction: 'Liu Association',
        description: 'Director of the Liu Association Section 2. Known for her calm demeanor and deadly swordsmanship.',
        firstAppearance: 'Liu Association Reception',
        isPlayable: false,
        relations: ['Liu Association', 'Miris'],
        quotes: [
            '"Our blade serves The City."',
        ],
    },
    {
        id: 'eileen',
        name: 'Eileen',
        title: 'Zwei Association Captain',
        faction: 'Zwei Association',
        description: 'A captain of the Zwei Association who struggles with the moral compromises required by her duty.',
        firstAppearance: 'Zwei Association Reception',
        isPlayable: false,
        relations: ['Zwei Association'],
        quotes: [],
    },
];

// Factions
export const FACTIONS: LoreFaction[] = [
    {
        id: 'the-library',
        name: 'The Library',
        tier: 'Other',
        description: 'A mysterious building that appeared after the fall of L Corp. It invites guests to "donate" their books through receptions.',
        keyMembers: ['Angela', 'Roland', 'Binah', 'Gebura', 'Hokma', 'Chesed', 'Malkuth', 'Yesod', 'Hod', 'Netzach', 'Tipherath'],
        philosophy: 'Collect all books to complete the perfect book.',
    },
    {
        id: 'the-head',
        name: 'The Head',
        tier: 'Head',
        description: 'The governing body of The City, consisting of A Corp, B Corp, C Corp, and other Wings. They maintain order through absolute power.',
        keyMembers: ['Arbiters', 'Cane Office'],
        philosophy: 'Order through control and fear.',
    },
    {
        id: 'liu-association',
        name: 'Liu Association',
        tier: 'Fixer',
        description: 'An Association known for their Eastern swordsmanship and honorable conduct. One of the more reputable Associations.',
        keyMembers: ['Xiao', 'Miris', 'Cecil', 'Mei', 'Lowell'],
        philosophy: 'Honor in battle, loyalty to Section.',
    },
    {
        id: 'zwei-association',
        name: 'Zwei Association',
        tier: 'Fixer',
        description: 'A mercenary Association that takes various contracts. Known for their professional but morally flexible approach.',
        keyMembers: ['Eileen', 'Walter', 'Ronan'],
        philosophy: 'Complete the contract, no matter the cost.',
    },
    {
        id: 'the-ensemble',
        name: 'The Ensemble',
        tier: 'Other',
        description: 'A mysterious group connected to Distortions. They seem to guide or observe those who fall into despair.',
        keyMembers: ['Pluto', 'Oswald', 'Elena'],
        philosophy: 'Embrace the Distortion, become something new.',
    },
    {
        id: 'seven-association',
        name: 'Seven Association',
        tier: 'Fixer',
        description: 'An elite Fixer Association known for producing high-grade Fixers. Their members are numbered with colors.',
        keyMembers: ['Argalia', 'The Purple Tear'],
        philosophy: 'Excellence in all forms of combat.',
    },
    {
        id: 'the-fingers',
        name: 'The Fingers',
        tier: 'Finger',
        description: 'Criminal syndicates operating in the shadows of The City. They control various illegal operations.',
        keyMembers: ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'],
        philosophy: 'Profit above all else.',
    },
];

// Key Events
export const EVENTS: LoreEvent[] = [
    {
        id: 'library-appears',
        title: 'The Library Appears',
        description: 'After the events at L Corporation, a mysterious building appeared in The City - The Library. Angela, now in human form, begins her plan to collect "books".',
        order: 1,
        spoilerLevel: 1,
        relatedCharacters: ['angela', 'roland'],
    },
    {
        id: 'urban-nightmare',
        title: 'Urban Nightmare Receptions',
        description: 'The Library begins receiving guests from various City factions. From small-time thugs to organized syndicates, each visitor becomes a book.',
        order: 2,
        spoilerLevel: 1,
        relatedCharacters: ['angela', 'roland'],
    },
    {
        id: 'distortion-events',
        title: 'Distortion Phenomenon',
        description: 'Some individuals, consumed by despair or obsession, transform into aberrations called Distortions. The Ensemble seems to orchestrate these transformations.',
        order: 3,
        spoilerLevel: 2,
        relatedCharacters: ['philip'],
    },
    {
        id: 'impurity',
        title: 'The Impurity',
        description: 'A Distortion phenomenon spreads like a plague, threatening entire districts. The Library must face this existential threat.',
        order: 4,
        spoilerLevel: 2,
        relatedCharacters: [],
    },
    {
        id: 'black-silence',
        title: 'The Black Silence Awakens',
        description: 'Roland\'s true identity as "The Black Silence" is revealed. His past with the Color system and his connection to tragedies in The City comes to light.',
        order: 5,
        spoilerLevel: 3,
        relatedCharacters: ['roland'],
    },
];

// Helper functions
export const getCharacterById = (id: string) => CHARACTERS.find(c => c.id === id);
export const getFactionById = (id: string) => FACTIONS.find(f => f.id === id);
export const getEventById = (id: string) => EVENTS.find(e => e.id === id);

export const getCharactersByFaction = (factionId: string) =>
    CHARACTERS.filter(c => c.faction.toLowerCase().replace(/\s+/g, '-') === factionId);
