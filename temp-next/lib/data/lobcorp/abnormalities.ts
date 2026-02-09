// Lobotomy Corporation Abnormality Database

export type RiskLevel = 'ZAYIN' | 'TETH' | 'HE' | 'WAW' | 'ALEPH';
export type DamageType = 'Red' | 'White' | 'Black' | 'Pale';
export type WorkType = 'Instinct' | 'Insight' | 'Attachment' | 'Repression';

export interface Abnormality {
    id: string;
    name: string;
    code: string;
    riskLevel: RiskLevel;
    description: string;
    portrait: string;
    peInfo: string;
    maxEnergy: number;
    breachCondition?: string;
    workPreference: {
        instinct: 'Bad' | 'Normal' | 'Good' | 'Best';
        insight: 'Bad' | 'Normal' | 'Good' | 'Best';
        attachment: 'Bad' | 'Normal' | 'Good' | 'Best';
        repression: 'Bad' | 'Normal' | 'Good' | 'Best';
    };
    specialNotes: string[];
    damageType: DamageType;
    encodeValue: number;
}

export interface Employee {
    name: string;
    level: 1 | 2 | 3 | 4 | 5;
    stats: {
        fortitude: number;
        prudence: number;
        temperance: number;
        justice: number;
    };
    preferredWork?: WorkType;
}

// Risk level colors
export const RISK_COLORS: Record<RiskLevel, { bg: string; text: string; border: string }> = {
    ZAYIN: { bg: 'bg-green-600', text: 'text-green-400', border: 'border-green-500' },
    TETH: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500' },
    HE: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500' },
    WAW: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500' },
    ALEPH: { bg: 'bg-red-600', text: 'text-red-400', border: 'border-red-500' },
};

// Damage type colors
export const DAMAGE_COLORS: Record<DamageType, { bg: string; text: string }> = {
    Red: { bg: 'bg-red-600/30', text: 'text-red-400' },
    White: { bg: 'bg-white/20', text: 'text-white' },
    Black: { bg: 'bg-purple-600/30', text: 'text-purple-400' },
    Pale: { bg: 'bg-cyan-600/30', text: 'text-cyan-400' },
};

// Sample Abnormalities (representative selection)
export const ABNORMALITIES: Abnormality[] = [
    // ZAYIN
    {
        id: 'one-sin',
        name: 'One Sin and Hundreds of Good Deeds',
        code: 'O-03-03',
        riskLevel: 'ZAYIN',
        description: 'A girl who waits. She always seems to be on the verge of tears.',
        portrait: '😢',
        peInfo: 'Produces good energy with attachment work. Low risk for new employees.',
        maxEnergy: 8,
        breachCondition: 'Work counter reaches 0 (66.6 seconds countdown)',
        workPreference: {
            instinct: 'Normal',
            insight: 'Bad',
            attachment: 'Best',
            repression: 'Normal',
        },
        specialNotes: [
            'Countdown starts when not worked on',
            'Breaching causes massive damage to all employees',
            'Keep working on her regularly',
        ],
        damageType: 'Red',
        encodeValue: 12,
    },
    {
        id: 'scorched-girl',
        name: 'Scorched Girl',
        code: 'F-01-02',
        riskLevel: 'TETH',
        description: 'A small girl engulfed in flames. She yearns for something that was taken from her.',
        portrait: '🔥',
        peInfo: 'Prone to escaping if work result is bad. Moderate energy output.',
        maxEnergy: 14,
        breachCondition: 'Bad work result, or QliphothCounter reaches 0',
        workPreference: {
            instinct: 'Good',
            insight: 'Normal',
            attachment: 'Bad',
            repression: 'Good',
        },
        specialNotes: [
            'Can set employees on fire during breach',
            'Fire spreads to nearby employees',
            'Suppression priority: High',
        ],
        damageType: 'Red',
        encodeValue: 18,
    },
    {
        id: 'beauty-and-beast',
        name: 'Beauty and the Beast',
        code: 'F-02-44',
        riskLevel: 'HE',
        description: 'A tragic romance preserved forever. One cannot exist without the other.',
        portrait: '🌹',
        peInfo: 'Moderate risk. The rose must never wilt.',
        maxEnergy: 20,
        breachCondition: 'Bad work results multiple times',
        workPreference: {
            instinct: 'Bad',
            insight: 'Good',
            attachment: 'Best',
            repression: 'Normal',
        },
        specialNotes: [
            'Two entities - handle with care',
            'Beast awakens if rose is threatened',
            'High damage output during breach',
        ],
        damageType: 'Red',
        encodeValue: 24,
    },
    {
        id: 'nothing-there',
        name: 'Nothing There',
        code: 'O-06-20',
        riskLevel: 'ALEPH',
        description: 'It looks like nothing. It looks like everything. It is always watching.',
        portrait: '👁️',
        peInfo: 'One of the most dangerous abnormalities. Handle with extreme caution.',
        maxEnergy: 44,
        breachCondition: 'Poor work results or Qliphoth Counter depletes',
        workPreference: {
            instinct: 'Good',
            insight: 'Normal',
            attachment: 'Good',
            repression: 'Bad',
        },
        specialNotes: [
            'Can mimic dead employees',
            'Extremely high combat stats',
            'Requires level 5 agents for safe work',
            'E.G.O weapon: Mimicry',
        ],
        damageType: 'Red',
        encodeValue: 60,
    },
    {
        id: 'silent-orchestra',
        name: 'The Silent Orchestra',
        code: 'T-01-31',
        riskLevel: 'ALEPH',
        description: 'A conductor and orchestra that plays the music of the apocalypse.',
        portrait: '🎼',
        peInfo: 'Facility-wide threat when breaching. The concert must never begin.',
        maxEnergy: 45,
        breachCondition: 'Specific pattern of work failures triggers the concert',
        workPreference: {
            instinct: 'Normal',
            insight: 'Best',
            attachment: 'Normal',
            repression: 'Good',
        },
        specialNotes: [
            'Can cause facility-wide damage',
            'The "concert" is a DPS race',
            'Prepare high-level suppression teams',
            'E.G.O weapon: Da Capo',
        ],
        damageType: 'Pale',
        encodeValue: 65,
    },
    {
        id: 'plague-doctor',
        name: 'Plague Doctor',
        code: 'O-01-45',
        riskLevel: 'WAW',
        description: 'A doctor who speaks of blessings. His gifts are not what they seem.',
        portrait: '🎭',
        peInfo: 'Initially appears helpful. Hidden transformation mechanic.',
        maxEnergy: 30,
        breachCondition: 'After blessing 12 employees, transforms into WhiteNight',
        workPreference: {
            instinct: 'Good',
            insight: 'Good',
            attachment: 'Bad',
            repression: 'Best',
        },
        specialNotes: [
            '"Blessings" are actually curses',
            'Track blessed employees carefully',
            'Do NOT let 12 employees be blessed',
            'Connection to Apocalypse Bird',
        ],
        damageType: 'White',
        encodeValue: 42,
    },
    {
        id: 'red-shoes',
        name: 'Red Shoes',
        code: 'O-04-08',
        riskLevel: 'HE',
        description: 'Beautiful red shoes that dance on their own. They hunger for feet.',
        portrait: '👠',
        peInfo: 'Employees may be compelled to wear the shoes during work.',
        maxEnergy: 18,
        breachCondition: 'Lower work success or employee with low Temperance',
        workPreference: {
            instinct: 'Bad',
            insight: 'Good',
            attachment: 'Normal',
            repression: 'Good',
        },
        specialNotes: [
            'Possessed employees dance to death',
            'Avoid employees with low Temperance',
            'Can spread possession during breach',
        ],
        damageType: 'Red',
        encodeValue: 20,
    },
    {
        id: 'big-bird',
        name: 'Big Bird',
        code: 'O-02-40',
        riskLevel: 'WAW',
        description: 'A large yellow bird with lantern eyes. It watches over the forest.',
        portrait: '🐦',
        peInfo: 'One of the three Birds of the Black Forest. Obsessed with watching.',
        maxEnergy: 28,
        breachCondition: 'When certain conditions align between the three birds',
        workPreference: {
            instinct: 'Normal',
            insight: 'Best',
            attachment: 'Normal',
            repression: 'Bad',
        },
        specialNotes: [
            'Part of Apocalypse Bird',
            'Keep separated from other birds',
            'Lantern eyes can paralyze',
            'E.G.O weapon: Lamp',
        ],
        damageType: 'Black',
        encodeValue: 35,
    },
];

// Helper functions
export const getAbnormalityById = (id: string) => ABNORMALITIES.find(a => a.id === id);
export const getAbnormalitiesByRisk = (risk: RiskLevel) => ABNORMALITIES.filter(a => a.riskLevel === risk);

export const getRiskLevelOrder = (risk: RiskLevel): number => {
    const order: Record<RiskLevel, number> = { ZAYIN: 0, TETH: 1, HE: 2, WAW: 3, ALEPH: 4 };
    return order[risk];
};

export const sortByRisk = (abnormalities: Abnormality[]) =>
    [...abnormalities].sort((a, b) => getRiskLevelOrder(b.riskLevel) - getRiskLevelOrder(a.riskLevel));
