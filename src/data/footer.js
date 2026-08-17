import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

export const footerSocials = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/yourusername",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:your@email.com",
  },
];