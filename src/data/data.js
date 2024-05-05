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

const karpatyImages = require.context('../img/karpaty', true);
const karpatyImagesList = karpatyImages
  .keys()
  .map(image => karpatyImages(image));

const alpsImages = require.context('../img/alps', true);
const alpsImagesList = alpsImages
  .keys()
  .map(image => alpsImages(image));

const appalachianImages = require.context('../img/appalachian', true);
const appalachianImagesList = appalachianImages
  .keys()
   .map(image => appalachianImages(image));

const rockyImages = require.context('../img/rocky', true);
const rockyImagesList = rockyImages
  .keys()
  .map(image => rockyImages(image));

  const peytoImages = require.context('../img/peyto', true);
  const peytoImagesList = peytoImages
  .keys()
  .map(image => peytoImages(image));

  const synevyrImages = require.context('../img/synevyr', true);
const synevyrImagesList = synevyrImages
  .keys()
  .map(image => synevyrImages(image));

  const morskieImages = require.context('../img/morskie', true);
const morskieImagesList = morskieImages
  .keys()
  .map(image => morskieImages(image));

  const craterImages = require.context('../img/crater', true);
const craterImagesList = craterImages
  .keys()
  .map(image => craterImages(image));

const forests = [
  { 
    imgs: schwarzwaldImagesList,
    title: 'Schwarzwald',
    location: 'Germany',
    about:
      'The Black Forest (Schwarzwald) is a large forested mountain range in southwest Germany. It is the source of the biggest European river - Danube and a contributor of Rhine river. The Black Forest occupies part of the continental divide between the Atlantic Ocean drainage basin and the Black Sea drainage basin. \n Area: 6,000 sq.km',
  },
  {
    imgs: polissyaImagesList,
    title: 'Polissya',
    location: 'Ukraine',
    about: "The Polissya forest, situated in Ukraine, is a vast expanse of wilderness shrouded in mystery and teeming with biodiversity. It is one of Europe's largest and most significant forested regions. Polissya is characterized by its dense woodlands, meandering rivers, and pristine wetlands, serving as a haven for countless plant and animal species. \n Area: 50,000 sq.km",
  },
  {
    imgs: puszczaImagesList,
    title: 'Puszcza Białowieska',
    location: 'Poland',
    about:
      "Puszcza Białowieska (Białowieża Forest) is a forest on the border between Belarus and Poland. It is one of the last and largest remaining parts of the immense primeval forest that once stretched across the European Plain. The forest is home to 800 European bison, Europe's heaviest land animal. \n Area: 3,085.8 sq.km",
  },
  {
    imgs: redwoodImagesList,
    title: 'Redwood',
    location: 'USA',
    about: "The Redwood forest, located in the USA, is renowned for its towering giants, the coastal redwoods and giant sequoias. These ancient trees, some reaching over 350 feet in height, form one of the most majestic and biodiverse ecosystems on Earth. The Redwood National and State Parks preserve a significant portion of these ancient forests, offering visitors a glimpse into a world where nature's grandeur knows no bounds. \n Area: 40,000 sq.km",
  },
];

const mountains = [
  {
    imgs: karpatyImagesList,
    title: 'Karpaty',
    about: "The Karpaty mountains, nestled in Eastern Europe, are a breathtaking range renowned for their scenic beauty and rich biodiversity. The Karpaty are not only a natural wonder but also hold cultural significance, with traditional villages and folklore adding to their charm. \n Highest point: 2655m",
    location: 'Ukraine, Romania, Poland, and Slovakia',
  },

  {
    imgs: alpsImagesList,
    title: 'Alps',
    about: "The Alps, Europe's most iconic mountain range. With their majestic peaks, glacier-carved valleys, and pristine lakes, the Alps attract millions of visitors each year. This vast mountain range is not only a playground for outdoor activities such as skiing, hiking, and mountaineering but also home to unique flora and fauna. The Alps are a symbol of natural beauty and wilderness, inspiring awe and admiration in all who behold them. \n Highest point: 4807m",
    location: 'France, Switzerland, Italy, and Austria',
  },

  {
    imgs: appalachianImagesList,
    title: 'Appalachian Mountains',
    about: 'The Appalachian Mountains are one of the oldest mountain ranges in the world, boasting a rich tapestry of history, culture, and natural beauty. These ancient mountains have witnessed the ebb and flow of civilizations, serving as a cradle of biodiversity and a refuge for countless species. \n Highest point: 2037m',
    location: 'USA',
  },

  {
    imgs: rockyImagesList,
    title: 'Rocky Mountains',
    about: 'The Rocky Mountains are an iconic symbol of the American West. With their jagged peaks, vast forests, and abundant wildlife, the Rockies offer endless opportunities for adventure and exploration. From hiking and camping to skiing and wildlife watching, the Rocky Mountains are a playground for outdoor enthusiasts. \n Highest point: 4399m',
    location: 'Canada, USA',
  },
];

const lakes = [
  {
    imgs: peytoImagesList,
    title: 'Peyto Lake',
    about: 'Peyto Lake is a glacier-fed lake located in Banff National Park, Alberta, Canada. Its stunning turquoise color comes from rock flour carried into the lake by meltwater from the surrounding glaciers. Peyto Lake is a popular tourist destination and offers breathtaking views of the Canadian Rockies. \n Depth: 90 meters',
    location: 'Canada',
  },
  {
    imgs: synevyrImagesList,
    title: 'Synevyr',
    about: 'Synevyr is a picturesque lake nestled in the heart of the Carpathian Mountains in Ukraine. Surrounded by dense forests and towering peaks, Synevir is renowned for its crystal-clear waters and tranquil ambiance. Legend has it that Synevir is home to a mythical creature known as the Synevir Lake Mermaid, adding to its allure and mystique. \n Depth: 22 meters',
    location: 'Ukraine',
  },
  {
    imgs: morskieImagesList,
    title: 'Morskie Oko',
    about: 'Morskie Oko, or the Eye of the Sea, is the largest and most famous lake in the Tatra Mountains of Poland. Nestled amidst breathtaking alpine scenery, Morskie Oko is renowned for its emerald-green waters and pristine surroundings. The lake is a popular destination for hikers and nature enthusiasts, offering stunning views of the surrounding peaks. \n Depth: 50 meters',
    location: 'Poland',
  },
  {
    imgs: craterImagesList, 
    title: 'The Crater Lake',
    about: 'Crater Lake, located in Oregon, USA, is renowned for its deep blue color and crystal-clear waters. Formed over 7,700 years ago following the collapse of a volcanic caldera, Crater Lake is the deepest lake in the United States and one of the clearest lakes in the world. Surrounded by sheer cliffs and old-growth forests, Crater Lake offers visitors a glimpse into the dramatic forces of nature. \n Depth: 594 meters',
    location: 'USA',
  },
];

export const data = { forests, mountains, lakes };
