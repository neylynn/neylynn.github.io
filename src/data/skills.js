import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaWordpress,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaBootstrap
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiPostman
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-sky-400",
      },
      {
        name: "Vue.js",
        icon: FaVuejs,
        color: "text-green-500",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-violet-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Laravel",
        icon: FaLaravel,
        color: "text-red-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-green-500",
      },
      {
        name: "WordPress",
        icon: FaWordpress,
        color: "text-indigo-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-sky-500",
      },
      {
        name: "Redis",
        icon: SiRedis,
        color: "text-red-400",
      },
    ],
  },

  {
    title: "DevOps & Cloud",
    skills: [
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-500",
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "text-orange-400",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "text-blue-500",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-white",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
      },
    ],
  },
];