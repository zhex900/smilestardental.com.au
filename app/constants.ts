export const address = {
  street: "4/12 King St",
  city: "Warners Bay, NSW 2282",
};

export const openingHours = [
  { day: "Monday - Friday:", time: "9AM - 5PM" },
  { day: "Weekend:", time: "Closed" },
  //   { day: "Sunday:", time: "Closed" },
];

export const phoneNumber = "02 4948 8589";

export const email = "info@smilestardental.com.au";
export const copyright = `© ${new Date().getFullYear()} Smile Star Dental. All rights reserved.`;

import {
  SocialInstagram,
  SocialLinkedin,
  SocialYoutube,
} from "./components/social-brand-icons";

export const yearEstablished = 2012;

export const backgroundColor = "bg-gradient-to-b from-sky-100 to-sky-200";

export const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/dr.melodyhealy",
    icon: SocialInstagram,
    hoverColor: "hover:bg-pink-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/melody-healy-9a85595b/",
    icon: SocialLinkedin,
    hoverColor: "hover:bg-blue-700",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@BayArcadeDentalatWarnersBay",
    icon: SocialYoutube,
    hoverColor: "hover:bg-red-600",
  },
];
