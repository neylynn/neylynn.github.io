import ncImage from "../assets/nc.png";
import bgameImage from "../assets/bg.png";
import accImage from "../assets/account.png";
import msrImage from "../assets/mkr.png";
import macImage from "../assets/mac.png";
import hcImage from "../assets/7887.png";
import ngsImage from "../assets/ngs.png";
import ttmmImage from "../assets/ttmm.png";
import bdyImage from "../assets/bdy.png";
import portfolioImage from "../assets/neylynn.jpg";

export const projects = [
  {
    id: 1,
    title: "New Challenges Ads",
    image: ncImage,
    description:
      "Contributed to the development and customization of NewChallenges Ads, a digital advertising platform serving Jobs, HR, Programmatic, and Travel sectors. Worked across multiple areas of the platform to modernize the UI, customize existing functionality, and develop new features based on business requirements, improving both usability and overall platform experience.",
    technologies: [
      "WordPress",
      "SiteKit",
      "MySQL"
    ],
    github: "https://github.com/yourusername/pos-system",
    demo: "https://newchallengesads.com",
    featured: true,
  },

  {
    id: 2,
    title: "Bee Game",
    image: bgameImage,
    description:
      "Enhanced BeeGame, a gaming marketplace for PUBG and Mobile Legends digital products. Redesigned the overall website, customized admin-side fields and functionality, and developed new features to improve usability and platform management.",
    technologies: [
      "WordPress",
      "MySQL"
    ],
    github: "https://github.com/yourusername/accounting",
    demo: "https://beegame.org",
    featured: true,
  },

  {
    id: 3,
    title: "Accounting.com.mm",
    image: accImage,
    description:
      "Independently designed and developed Accounting.com.mm from start to finish using WordPress as an informational website for an in-house accounting software solution. Created and customized the website to showcase product features, accounting capabilities, benefits, and subscription information for businesses in Myanmar.",
    technologies: [
      "WordPress",
      "MySQL"
    ],
    github: "https://github.com/yourusername/loyalty",
    demo: "https://accounting.com.mm",
    featured: false,
  },

  {
    id: 4,
    title: "MySkinRecipes",
    image: msrImage,
    description:
      "Contributed to the development of MySkinRecipes.com, a global e-commerce platform for cosmetic and skincare ingredients. Worked on core order-processing workflows, developed new APIs and integrated them with the frontend, and implemented UI improvements to improve system functionality and user experience.",
    technologies: [
      "PrestaShop",
      "Symfony",
      "MySQL"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://www.myskinrecipes.com/shop/en",
    featured: false,
  },

  {
    id: 5,
    title: "Myanmar Accountancy Council",
    image: macImage,
    description:
      "Contributed to the development of a centralized platform for accounting examinations and professional registrations, including CPA and related programs. Collaborated with the development team across most modules, including applications, exam management, registrations, results, announcements, and administrative features.",
    technologies: [
      "Laravel",
      "MySQL"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://www.oagmac.gov.mm",
    featured: false,
  },

  {
    id: 6,
    title: "7887 Healthcare",
    image: hcImage,
    description:
      "Worked on performance optimization for Healthcare.com.mm, focusing on resolving slow website loading and media delivery issues. Implemented Amazon S3-based image storage and improved media handling to reduce loading bottlenecks, resulting in a more responsive and efficient website experience.",
    technologies: [
      "Laravel",
      "MySQL"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://healthcare.com.mm",
    featured: false,
  },

  {
    id: 7,
    title: "Nyan Gyi Shin",
    image: ngsImage,
    description:
      "Contributed to the development of Nyangyi Shin, a gamified VAS platform for MPT users to participate in tip and quiz games and earn rewards. Focused primarily on admin-side development, working on reporting, reward calculation and distribution flows, data management, and other operational features required to manage the platform.",
    technologies: [
      "Laravel",
      "MySQL"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "http://nyangyishin.com",
    featured: false,
  },

  {
    id: 8,
    title: "Tap Tube",
    image: ttmmImage,
    description:
      "Contributed to the development of Tap Tube, a subscription-based video VAS platform providing Chinese movie content to MPT users. Worked on reporting modules and developed the video content workflow, integrating Vimeo with scheduled cron jobs for automated video uploading and publishing, helping streamline content management and delivery.",
    technologies: [
      "Laravel",
      "Vimeo",
      "MySQL"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://www.taptubemm.com",
    featured: false,
  },

  {
    id: 9,
    title: "BayDinYwar",
    image: bdyImage,
    description:
      "Contributed to the development of Baydin Ywar, a consultation platform connecting clients with fortune tellers. Worked on mobile API integrations, end-to-end testing across client, admin, and fortune teller workflows, and developed the voice-message functionality for sending audio responses from fortune tellers to clients within consultations.",
    technologies: [
      "Laravel",
      "MySQL"
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://apkpure.com/baydinywar/com.securelinkmm.horoscope",
    featured: false,
  },

  {
    id: 11,
    title: "React Portfolio",
    image: portfolioImage,
    description:
      "Modern portfolio website built with React, Tailwind CSS, and Vite.",
    technologies: [
      "React",
      "Tailwind",
      "Vite",
    ],
    github: "https://github.com/neylynn/portfolio",
    demo: "https://yourname.github.io",
    featured: false,
  },
];