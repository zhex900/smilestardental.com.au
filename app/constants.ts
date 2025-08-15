export const address = {
  street: "Suite 10B The Bay Arcade, 478 The Esplanade",
  city: "Warners Bay, NSW 2282",
};

export const openingHours = [
  // <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
  // <p>Saturday: 9:00 AM - 4:00 PM</p>
  // <p>Sunday: Closed</p>

  "Mon - Fri: 8:00 AM - 6:00 PM",
  "Saturday: 9:00 AM - 4:00 PM",
  "Sunday: Closed",
];

export const phoneNumber = "02 4948 8589";

export const email = "info@smilestardental.com.au";
export const copyright = `© ${new Date().getFullYear()} Smile Star Dental. All rights reserved.`;

import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

export const yearEstablished = 2012;

export const backgroundColor = "bg-gradient-to-b from-sky-100 to-sky-20";

export const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/smilestardental",
    icon: FacebookIcon,
    hoverColor: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/smilestardental",
    icon: Instagram,
    hoverColor: "hover:bg-pink-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/smilestardental",
    icon: Linkedin,
    hoverColor: "hover:bg-blue-700",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/smilestardental",
    icon: Youtube,
    hoverColor: "hover:bg-red-600",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/smilestardental",
    icon: Twitter,
    hoverColor: "hover:bg-blue-400",
  },
];
