const puszczaImages = require.context('../img/puszcza', true);
const puszczaImagesList = puszczaImages
  .keys()
  .map(image => puszczaImages(image));

const schwarzwaldImages = require.context('../img/schwarzwald', true);
const schwarzwaldImagesList = schwarzwaldImages
  .keys()
  .map(image => schwarzwaldImages(image));

const polissyaImages = require.context('../img/polissya', true);
const polissyaImagesList = polissyaImages
  .keys()
  .map(image => polissyaImages(image));

const redwoodImages = require.context('../img/redwoods', true);
const redwoodImagesList = redwoodImages
  .keys()
  .map(image => redwoodImages(image));

const forests = [
  {
    imgs: schwarzwaldImagesList,
    title: 'Schwarzwald',
    about:
      'The Black Forest (Schwarzwald) is a large forested mountain range in southwest Germany. It is the source of the biggest European river - Danube and a contributor of Rhine river. The Black Forest occupies part of the continental divide between the Atlantic Ocean drainage basin and the Black Sea drainage basin. \n Area: 6,000 sq.km',
  },
  {
    imgs: polissyaImagesList,
    title: 'Polissya',
    about: 'About Polissya',
  },
  {
    imgs: puszczaImagesList,
    title: 'Puszcza Białowieska',
    about:
      "Puszcza Białowieska (Białowieża Forest) is a forest on the border between Belarus and Poland. It is one of the last and largest remaining parts of the immense primeval forest that once stretched across the European Plain. The forest is home to 800 European bison, Europe's heaviest land animal. \n Area: 3,085.8 sq.km",
  },
  {
    imgs: redwoodImagesList,
    title: 'Redwood',
    location: 'USA',
    about: 'About Redwood',
  },
];

const mountains = [
  {
    imgs: [],
    title: 'Karpaty',
    about: 'About Karpaty',
  },
];

const lakes = [];

export const data = { forests, mountains, lakes };
