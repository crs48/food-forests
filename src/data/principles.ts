// Permaculture ethics and David Holmgren's 12 design principles.
// Principles quoted with their traditional proverbs (Holmgren, 2002).

export type Ethic = {
  title: string;
  short: string;
  body: string;
  icon: string;
};

export const ethics: Ethic[] = [
  {
    title: 'Earth Care',
    short: 'Tend the living systems',
    body: 'Provision for all life systems to continue and thrive — soil, water, forests, and the web of creatures we depend on.',
    icon: 'globe',
  },
  {
    title: 'People Care',
    short: 'Meet human needs',
    body: 'Provision for people to access the resources they need for a decent, dignified existence — food, shelter, community, meaning.',
    icon: 'users',
  },
  {
    title: 'Fair Share',
    short: 'Return the surplus',
    body: 'Set limits to consumption and redistribute surplus — of time, money, and harvest — back into caring for the earth and people.',
    icon: 'heart',
  },
];

export type Principle = {
  number: number;
  title: string;
  proverb: string;
  gloss: string;
  icon: string;
};

export const principles: Principle[] = [
  {
    number: 1,
    title: 'Observe and interact',
    proverb: 'Beauty is in the eye of the beholder.',
    gloss: 'Spend time watching your land — sun, wind, water, wildlife — before you design or plant.',
    icon: 'eye',
  },
  {
    number: 2,
    title: 'Catch and store energy',
    proverb: 'Make hay while the sun shines.',
    gloss: 'Capture resources when they are abundant — rainwater, sunlight, biomass, fertility — for the lean times.',
    icon: 'sun',
  },
  {
    number: 3,
    title: 'Obtain a yield',
    proverb: "You can't work on an empty stomach.",
    gloss: 'Design for real, useful rewards. A system has to feed the people tending it.',
    icon: 'apple',
  },
  {
    number: 4,
    title: 'Apply self-regulation and accept feedback',
    proverb: 'The sins of the fathers are visited unto the children of the seventh generation.',
    gloss: 'Discourage what harms the system and listen to feedback so it keeps functioning well.',
    icon: 'compass',
  },
  {
    number: 5,
    title: 'Use and value renewable resources',
    proverb: 'Let nature take its course.',
    gloss: 'Favour renewable inputs and natural services over consuming finite resources.',
    icon: 'recycle',
  },
  {
    number: 6,
    title: 'Produce no waste',
    proverb: 'Waste not, want not. A stitch in time saves nine.',
    gloss: 'Value and reuse every output — one element’s waste is another’s food.',
    icon: 'sprout',
  },
  {
    number: 7,
    title: 'Design from patterns to details',
    proverb: "Can't see the forest for the trees.",
    gloss: 'Start with the big patterns of your site, then fill in the specifics.',
    icon: 'layers',
  },
  {
    number: 8,
    title: 'Integrate rather than segregate',
    proverb: 'Many hands make light work.',
    gloss: 'Place elements so beneficial relationships form between them — the right connections do the work.',
    icon: 'network',
  },
  {
    number: 9,
    title: 'Use small and slow solutions',
    proverb: 'Slow and steady wins the race.',
    gloss: 'Small, slow systems are easier to maintain, use local resources, and produce more lasting results.',
    icon: 'clock',
  },
  {
    number: 10,
    title: 'Use and value diversity',
    proverb: "Don't put all your eggs in one basket.",
    gloss: 'Diversity reduces vulnerability and opens the system to a wealth of possibilities.',
    icon: 'flower',
  },
  {
    number: 11,
    title: 'Use edges and value the marginal',
    proverb: "Don't think you are on the right track just because it's a well-beaten path.",
    gloss: 'The most productive, interesting things happen at the edges between systems.',
    icon: 'waves',
  },
  {
    number: 12,
    title: 'Creatively use and respond to change',
    proverb: 'Vision is not seeing things as they are but as they will be.',
    gloss: 'Observe, then intervene at the right moment to shape inevitable change for the better.',
    icon: 'wind',
  },
];
