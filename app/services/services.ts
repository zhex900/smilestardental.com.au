import {
  Award,
  Baby,
  Braces,
  Crown,
  Heart,
  Search,
  Shield,
  Smile,
  Sparkles,
  Syringe,
  Wind,
  Zap,
} from "lucide-react";
import type { Service } from "@/components/ui/card";

export const services: Service[] = [
  {
    id: 1,
    title: "Dental Cleaning & Checkups",
    category: "preventive",
    icon: Shield,
    image: "/images/checkups-1.jpg",
    description:
      "Regular cleanings and comprehensive checkups to maintain optimal oral health and catch issues early.",
    features: [
      "Professional cleaning",
      "Cavity detection",
      "Gum health assessment",
      "Oral cancer screening",
    ],
  },
  {
    id: 2,
    title: "Teeth Whitening",
    category: "cosmetic",
    icon: Sparkles,
    image: "/images/smile-1.jpg",
    description:
      "Professional teeth whitening treatments to brighten your smile and boost your confidence.",
    features: [
      "In-office treatment",
      "Take-home kits",
      "Long-lasting results",
      "Safe for enamel",
    ],
  },
  {
    id: 3,
    title: "Dental Implants",
    category: "restorative",
    icon: Shield,
    image: "/images/implants-1.jpg",
    description:
      "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    features: [
      "Titanium posts",
      "Natural appearance",
      "Permanent solution",
      "Improved chewing",
    ],
  },
  {
    id: 4,
    title: "Invisalign & Orthodontics",
    category: "orthodontics",
    icon: Braces,
    image: "/images/orthodontics.jpg",
    description:
      "Modern orthodontic solutions including clear aligners and traditional braces for a perfect smile.",
    features: [
      "Clear aligners",
      "Traditional braces",
      "Digital planning",
      "Comfortable treatment",
    ],
  },
  {
    id: 5,
    title: "Crowns & Bridges",
    category: "restorative",
    icon: Award,
    image: "/images/bridge.jpg",
    description:
      "Restore damaged or missing teeth with custom-made crowns and bridges for natural function.",
    features: [
      "Custom fabrication",
      "Natural appearance",
      "Durable materials",
      "Improved function",
    ],
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    category: "pediatric",
    icon: Baby,
    image: "/images/kids-1.jpg",
    description:
      "Specialized dental care for children in a fun, comfortable environment designed for young patients.",
    features: [
      "Child-friendly environment",
      "Gentle approach",
      "Education focus",
      "Preventive care",
    ],
  },
  {
    id: 7,
    title: "Root Canal Therapy",
    category: "restorative",
    icon: Search,
    image: "/images/root-1.jpg",
    description:
      "Advanced endodontic treatment to save severely damaged teeth and relieve pain.",
    features: [
      "Pain relief",
      "Tooth preservation",
      "Advanced technology",
      "Comfortable procedure",
    ],
  },
  {
    id: 8,
    title: "Emergency Dental Care",
    category: "preventive",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1635247187021-ad5ab658bc5e?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immediate dental care for urgent situations including pain, broken teeth, and injuries.",
    features: [
      "24/7 availability",
      "Quick response",
      "Pain management",
      "Temporary solutions",
    ],
  },
  {
    id: 9,
    title: "Gum Disease Treatment",
    category: "preventive",
    icon: Heart,
    image: "/images/gum-1.jpg",
    description:
      "Comprehensive periodontal care to treat and prevent gum disease for optimal oral health.",
    features: [
      "Deep cleaning",
      "Gum surgery",
      "Maintenance plans",
      "Health education",
    ],
  },
  {
    id: 10,
    title: "Botox for Teeth Grinding",
    category: "preventive",
    icon: Syringe,
    image: "/images/botox.webp",
    description:
      "Targeted Botox injections to relax overactive jaw muscles, easing bruxism, clenching and the headaches they cause.",
    features: [
      "Reduced jaw tension",
      "Fewer grinding headaches",
      "Protects teeth from wear",
      "Quick in-chair treatment",
    ],
  },
  {
    id: 11,
    title: "Green Whistle (Penthrox)",
    category: "preventive",
    icon: Wind,
    image: "/images/penthrox.webp",
    description:
      "Patient-controlled inhaled pain relief using Penthrox for fast, short-acting comfort during dental procedures.",
    features: [
      "Rapid pain relief",
      "Patient-controlled",
      "Short recovery time",
      "Great for anxious patients",
    ],
  },
  {
    id: 12,
    title: "Airway Development for Children",
    category: "pediatric",
    icon: Baby,
    image: "/images/child-sleeping.jpg",
    description:
      "Early assessment and guidance of jaw and airway growth to support healthy breathing, sleep and facial development.",
    features: [
      "Breathing & sleep screening",
      "Myofunctional guidance",
      "Early orthodontic planning",
      "Tongue & lip-tie review",
    ],
  },
  {
    id: 13,
    title: "Full Mouth Rehabilitation",
    category: "restorative",
    icon: Smile,
    image: "/images/restore-teeth.jpg",
    description:
      "Coordinated, staged treatment that rebuilds the health, function and appearance of every tooth in your smile.",
    features: [
      "Comprehensive diagnosis",
      "Bite & TMJ correction",
      "Implants, crowns & veneers",
      "Long-term stability",
    ],
  },
  {
    id: 14,
    title: "Fillings",
    category: "restorative",
    icon: Shield,
    image: "/images/broken-tooth.jpg",
    description:
      "Tooth-coloured composite fillings that restore decayed or chipped teeth with a natural, durable finish.",
    features: [
      "Tooth-coloured composite",
      "Minimally invasive",
      "Strong & long-lasting",
      "Single visit",
    ],
  },
  {
    id: 15,
    title: "Gum Health Maintenance",
    category: "preventive",
    icon: Heart,
    image: "/images/working-hand.jpg",
    description:
      "Tailored maintenance appointments that keep gums healthy after treatment and prevent disease from returning.",
    features: [
      "Scaling & root planing",
      "Personalised recall plan",
      "At-home care coaching",
      "Early problem detection",
    ],
  },
  {
    id: 16,
    title: "Ceramic Onlays & Crowns",
    category: "restorative",
    icon: Crown,
    image: "/images/onlays.jpg",
    description:
      "Custom-crafted porcelain onlays and crowns that restore heavily damaged teeth with strength and natural beauty.",
    features: [
      "Metal-free porcelain",
      "Precision digital fit",
      "Preserves tooth structure",
      "Natural translucency",
    ],
  },
];
