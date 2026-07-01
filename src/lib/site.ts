// Site-wide metadata and navigation.

export const site = {
  name: 'Food Forests',
  tagline: 'Grow a forest you can eat.',
  description:
    'An educational, inspirational home for food forests, permaculture, and regenerative agriculture — learn how they work and meet the people already growing them.',
  author: 'The Food Forests project',
  locale: 'en',
} as const;

export type NavItem = { label: string; path: string };

export const nav: NavItem[] = [
  { label: 'Learn', path: '/learn' },
  { label: 'The Layers', path: '/layers' },
  { label: 'Permaculture', path: '/permaculture' },
  { label: 'Real Projects', path: '/projects' },
  { label: 'Start Growing', path: '/start' },
  { label: 'Resources', path: '/resources' },
];

export const footerNav: NavItem[] = [
  ...nav,
  { label: 'About', path: '/about' },
  { label: 'Image Credits', path: '/credits' },
];
