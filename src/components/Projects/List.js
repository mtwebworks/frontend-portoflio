import zabudowanybus from '../../img/zabudowanybus.png';
import weatherapp from '../../img/weatherapp.png';
import timetracker from '../../img/timetracker.png';
import portfolio from '../../img/fep.png';
import geministudio from '../../img/geministudio.png';

const list = [{
    id: 1,
    projectName: 'Zabudowany bus',
    tags: 'design  +  development',
    liveLink: 'https://zabudowanybus.pl/',
    thumbnail: zabudowanybus,
    description: 'Simple responsive website for company which produce custom wooden floor and side panels for vans.',
    tech: 'RWD, HTML, CSS, BEM, JavaScript',
  },
  {
    id: 2,
    projectName: 'Weather app',
    tags: 'design  +  development',
    codeLink: 'https://github.com/mtwebworks/weather-app',
    liveLink: 'https://mtwebworks.github.io/weather-app/',
    thumbnail: weatherapp,
    description: 'Simple weather app with detailed current weather state and next days forecast.',
    tech: 'RWD, HTML, CSS, BEM, JavaScript, API',
  },
  {
    id: 3,
    projectName: 'Time trakcer',
    tags: 'design  +  development',
    codeLink: 'https://github.com/mtwebworks/timetracker-app',
    liveLink: 'https://mtwebworks.github.io/timetracker-app/',
    thumbnail: timetracker,
    description: 'Timetracker app allows to track your daily workflow and helps count the amount of time you spend on different tasks, and various activities.',
    tech: 'RWD, HTML, CSS, BEM, JavaScript',
  },
  {
    id: 4,
    projectName: 'Front-end portfolio',
    tags: 'design  +  development',
    codeLink: 'https://github.com/mtwebworks/portfolio',
    thumbnail: portfolio,
    description: 'Personal front-end portfolio website.',
    tech: 'RWD, HTML, SCSS, BEM, JavaScript, React, GSAP',
  },
  {
    id: 3,
    projectName: 'Gemini Studio',
    tags: 'design',
    // codeLink: 'https://github.com/mtwebworks/timetracker-app',
    liveLink: 'https://geministudio.pl',
    thumbnail: geministudio,
    description: 'Company website created Wordpress CMS and Avada theme.',
    tech: 'Wordpress setup/Avada theme',
  },
]

export default list