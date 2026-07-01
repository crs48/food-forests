// Curated resources for the /resources page.

export type Resource = {
  title: string;
  by?: string;
  note: string;
  url: string;
  level?: 'beginner' | 'intermediate' | 'reference';
};

export type ResourceGroup = {
  kind: string;
  icon: string;
  blurb: string;
  items: Resource[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    kind: 'Books',
    icon: 'book-open',
    blurb: 'From gentle first reads to the field-defining manuals.',
    items: [
      {
        title: "Gaia's Garden: A Guide to Home-Scale Permaculture",
        by: 'Toby Hemenway',
        note: 'The best-selling permaculture book worldwide, and the friendliest place to start for a home gardener.',
        url: 'https://tobyhemenway.com/book/gaias-garden/',
        level: 'beginner',
      },
      {
        title: 'Creating a Forest Garden',
        by: 'Martin Crawford',
        note: 'The definitive temperate forest-garden manual, from the steward of the Dartington garden.',
        url: 'https://www.agroforestry.co.uk/',
        level: 'intermediate',
      },
      {
        title: 'Edible Forest Gardens (Vols. 1 & 2)',
        by: 'Dave Jacke & Eric Toensmeier',
        note: 'The deep technical reference for designing temperate food forests, guild by guild.',
        url: 'https://www.edibleforestgardens.com/',
        level: 'reference',
      },
      {
        title: "Permaculture: A Designers' Manual",
        by: 'Bill Mollison',
        note: 'The 576-page foundational text and the basis of the Permaculture Design Certificate.',
        url: 'https://tagaripublications.com/product/permaculture-a-designers-manual/',
        level: 'reference',
      },
      {
        title: 'Restoration Agriculture',
        by: 'Mark Shepard',
        note: 'Perennial agriculture at farm and broadacre scale — permaculture for real-world farmers.',
        url: 'https://www.newforestfarm.us/',
        level: 'intermediate',
      },
      {
        title: 'Dirt to Soil',
        by: 'Gabe Brown',
        note: 'An accessible, first-hand regenerative-agriculture story from one of its most influential voices.',
        url: 'https://brownsranch.us/',
        level: 'beginner',
      },
    ],
  },
  {
    kind: 'Films',
    icon: 'film',
    blurb: 'Watch the soil come back to life.',
    items: [
      {
        title: 'Kiss the Ground',
        by: '2020 · narrated by Woody Harrelson',
        note: 'The documentary that brought regenerative agriculture and soil carbon to a mass audience.',
        url: 'https://kisstheground.com/',
        level: 'beginner',
      },
      {
        title: 'The Biggest Little Farm',
        by: '2018 · John & Molly Chester',
        note: 'A decade building a wildly biodiverse farm from dead ground — visually gorgeous and deeply hopeful.',
        url: 'https://www.biggestlittlefarmmovie.com/',
        level: 'beginner',
      },
    ],
  },
  {
    kind: 'Organizations',
    icon: 'users',
    blurb: 'Research, teaching, and community, worldwide.',
    items: [
      {
        title: 'Permaculture Research Institute',
        note: 'Geoff Lawton’s global education and demonstration network, based at Zaytuna Farm.',
        url: 'https://www.permaculturenews.org/',
      },
      {
        title: 'Agroforestry Research Trust',
        note: 'Martin Crawford’s UK charity — forest-garden research, plants and seeds, and courses.',
        url: 'https://www.agroforestry.co.uk/',
      },
      {
        title: 'Rodale Institute',
        note: 'Pioneers of regenerative organic research since the 1940s; coined the word “regenerative.”',
        url: 'https://rodaleinstitute.org/',
      },
      {
        title: 'Kiss the Ground',
        note: 'A nonprofit advocating for regenerative agriculture and healthy soil as climate solutions.',
        url: 'https://kisstheground.com/',
      },
    ],
  },
  {
    kind: 'Learn & Get Certified',
    icon: 'graduation-cap',
    blurb: 'Go deeper with courses and hands-on time.',
    items: [
      {
        title: 'Permaculture Design Certificate (PDC)',
        note: 'The standard 72-hour foundational course, taught worldwide in person and online.',
        url: 'https://www.permaculturenews.org/',
        level: 'beginner',
      },
      {
        title: 'Permies.com',
        note: 'One of the largest permaculture forums — questions, plant swaps, and endless practical wisdom.',
        url: 'https://permies.com/',
      },
    ],
  },
];
