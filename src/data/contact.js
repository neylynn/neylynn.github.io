import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const contactInfo = [
  {
    title: "Email",
    value: "naylinnofficial@gmail.com",
    icon: FaEnvelope,
    color: "text-red-400",
    link: "mailto:naylinnofficial@gmail.com",
  },
  {
    title: "Phone",
    value: "+66 946 458 376",
    icon: FaPhone,
    color: "text-green-400",
    link: "tel:+66946458376",
  },
  {
    title: "Location",
    value: "Bangkok, Thailand",
    icon: FaMapMarkerAlt,
    color: "text-blue-400",
    link: "#",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/neylynn",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nay-linn-68843a2a8",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/neylynn97",
  }
];