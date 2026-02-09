// Sephirah Database

export interface Sephirah {
    id: string;
    name: string;
    department: string;
    role: string;
    description: string;
    portrait: string;
    personality: string;
    suppressionGuide: string;
    questReward: string;
    connections: string[];
}

export const SEPHIRAHS: Sephirah[] = [
    {
        id: 'malkuth',
        name: 'Malkuth',
        department: 'Control Team',
        role: 'Sephirah of Control',
        description: "The first Sephirah you'll encounter. Despite her cheerful demeanor, she hides deep anxieties about perfection and control.",
        portrait: '👧',
        personality: 'Energetic and optimistic, yet struggles with perfectionism. Her constant energy masks inner turmoil.',
        suppressionGuide: "Focus on consistent work patterns. Don't let energy quotas fall behind. Her meltdown involves facility-wide damage.",
        questReward: 'Unlock deeper story elements and new research options.',
        connections: ['Yesod', 'Angela'],
    },
    {
        id: 'yesod',
        name: 'Yesod',
        department: 'Information Team',
        role: 'Sephirah of Information',
        description: 'Cold and analytical, Yesod processes data without apparent emotion. His detachment serves as both strength and weakness.',
        portrait: '📊',
        personality: 'Logical and detached. Values efficiency over sentiment. His coldness is a defense mechanism.',
        suppressionGuide: 'Maintain precise documentation. Avoid errors in work orders. Information-based meltdowns.',
        questReward: 'Access to advanced abnormality data and research.',
        connections: ['Malkuth', 'Hod'],
    },
    {
        id: 'hod',
        name: 'Hod',
        department: 'Training Team',
        role: 'Sephirah of Training',
        description: 'Kind and supportive, Hod cares deeply for employees. Her empathy makes her vulnerable to the facility\'s horrors.',
        portrait: '💚',
        personality: 'Gentle and caring. Genuinely wants to help everyone. Prone to guilt and despair.',
        suppressionGuide: 'Monitor employee mental health. Her meltdowns involve employee-targeting effects.',
        questReward: 'Enhanced employee training capabilities.',
        connections: ['Yesod', 'Netzach'],
    },
    {
        id: 'netzach',
        name: 'Netzach',
        department: 'Safety Team',
        role: 'Sephirah of Safety',
        description: 'Once passionate about safety, Netzach has become cynical and apathetic after seeing too much death.',
        portrait: '🍺',
        personality: 'Jaded and nihilistic. Uses substances to cope. Beneath the apathy lies genuine pain.',
        suppressionGuide: 'Keep mortality rates low. His meltdowns reflect facility-wide safety failures.',
        questReward: 'Advanced healing and safety protocols.',
        connections: ['Hod', 'Tiphereth'],
    },
    {
        id: 'tiphereth',
        name: 'Tiphereth',
        department: 'Central Command Team',
        role: 'Sephirah of Central Command',
        description: 'Two children who share the name and role. Their existence hints at deeper secrets within the corporation.',
        portrait: '👫',
        personality: 'One optimistic, one pessimistic. Their duality represents the facility\'s moral struggle.',
        suppressionGuide: 'Balance is key. Their meltdowns involve central facility functions.',
        questReward: 'Core facility enhancements.',
        connections: ['Netzach', 'Chesed', 'Gebura'],
    },
    {
        id: 'chesed',
        name: 'Chesed',
        department: 'Welfare Team',
        role: 'Sephirah of Welfare',
        description: 'A calm, coffee-loving overseer who maintains composure through any crisis. His tranquility masks profound weariness.',
        portrait: '☕',
        personality: 'Serene and accepting. Has made peace with the facility\'s nature. Perhaps too accepting.',
        suppressionGuide: 'Maintain employee morale. His meltdowns are subtle but far-reaching.',
        questReward: 'Enhanced welfare and morale systems.',
        connections: ['Tiphereth', 'Gebura'],
    },
    {
        id: 'gebura',
        name: 'Gebura',
        department: 'Disciplinary Team',
        role: 'Sephirah of Discipline',
        description: 'Once known as the Red Mist, the most powerful Color. Now she channels her fury into protecting the facility.',
        portrait: '⚔️',
        personality: 'Fierce and militant. Values strength above all. Her rage is legendary but controlled.',
        suppressionGuide: 'Her meltdowns are combat-focused. Prepare your strongest teams.',
        questReward: 'Elite combat training and equipment.',
        connections: ['Tiphereth', 'Chesed', 'Binah', 'Hokma'],
    },
    {
        id: 'binah',
        name: 'Binah',
        department: 'Extraction Team',
        role: 'Sephirah of Extraction',
        description: 'Mysterious and philosophical. Binah speaks in riddles and seems to know more than she reveals.',
        portrait: '🔮',
        personality: 'Enigmatic and patient. Her words carry hidden meaning. Connected to the very nature of the facility.',
        suppressionGuide: 'Her challenges are conceptual. Prepare for reality-bending encounters.',
        questReward: 'Deep lore revelations and advanced extraction.',
        connections: ['Gebura', 'Hokma', 'Angela'],
    },
    {
        id: 'hokma',
        name: 'Hokma',
        department: 'Architecture Team',
        role: 'Sephirah of Architecture',
        description: 'The oldest Sephirah, Hokma has watched over the facility since its beginning. He carries the weight of all its history.',
        portrait: '🏛️',
        personality: 'Patient and wise, yet burdened. His knowledge of the facility\'s past is unparalleled.',
        suppressionGuide: 'His challenges involve the facility\'s fundamental structure. Endgame content.',
        questReward: 'Ultimate facility transformations.',
        connections: ['Gebura', 'Binah', 'Angela', 'Ayin'],
    },
];

export const getSephirahById = (id: string) => SEPHIRAHS.find(s => s.id === id);
