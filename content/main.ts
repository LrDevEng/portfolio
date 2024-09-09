export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio',
      text: 'Portfolio',
    },
    heading: "I'm Lukas Richter, and I create",
    image: '/img/hero.jpeg',
    secondButton: { icon: 'whatsapp', link: '/#about', text: 'About me' },
    social: {
      facebook: { link: 'https://facebook.com', show: true },
      instagram: { link: 'https://instagram.com', show: true },
      linkedin: { link: 'https://linkedin.com', show: true },
    },
    typed: [
      { text: 'stunning websites.' },
      { text: 'fast backends.' },
      { text: 'great experiences.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/about.jpeg',
    text: "I am a development engineer originally from Cologne (Germany) currently living in Vienna (Austria). After finishing my bachelor's degree in electrical engineering at the Hochschule Bonn-Rhein-Sieg University of Applied Sciences in 2017, I worked in the automotive industry as a function owner for advanced driver assistance systems. In parallel I pursued my passion for coding at the Trier University of Applied Sciences graduating with a master's degree in computer science in 2023. Right now I am learning web development with UpLeveled in Vienna.\n",
  },
  features: [
    {
      icon: 'xml',
      text: 'Creating stunning interactive websites.\n',
      title: 'Frontend Web Development',
    },
    {
      icon: 'monitor-screenshot',
      text: 'Setting up servers, databases and much more. \n',
      title: 'Backend Web Development',
    },
    {
      icon: 'draw',
      text: 'Microcontroller programming and layout of electrical architectures.\n',
      title: 'Microelectronic System Design',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-1.jpeg',
        title: 'ShopoShopy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-2.jpeg',
        title: 'LogoLogy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-3.jpeg',
        title: 'SitoSity',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-4.jpeg',
        title: 'DrawoDrawy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-5.jpeg',
        title: 'PagoPagy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-6.jpeg',
        title: 'UIoUXy',
      },
    ],
    title: 'My work',
  },
  footer: { text: '© John Doe' },
};
