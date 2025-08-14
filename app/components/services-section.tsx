"use client";
import { Shield, Sparkles, Search, Zap, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { CardCarousel } from "./ui/card-carousel";

export function ServicesSection() {
  const router = useRouter();

  const services = [
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Preventive Care",
      subtitle: "Cavities & Gum Disease Prevention",
      description:
        "Comprehensive preventive care with regular checkups and cleanings to maintain optimal oral health",
      features: ["Regular Checkups", "Professional Cleaning", "X-Ray Imaging"],
      cta: "Learn More",
      price: "From $99",
      rating: 4.9,
      patients: "500+",
      className:
        "bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500",
      iconBg: "bg-white/20 backdrop-blur-sm",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: "Professional Cleaning",
      subtitle: "Keep Your Teeth Sparkling",
      description:
        "Advanced cleaning techniques for a brighter, healthier smile with state-of-the-art equipment",
      features: ["Deep Cleaning", "Stain Removal", "Fresh Breath"],
      cta: "Book Now",
      price: "From $129",
      rating: 4.8,
      patients: "800+",
      className: "bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500",
      iconBg: "bg-white/20 backdrop-blur-sm",
    },
    {
      icon: <Search className="w-10 h-10 text-white" />,
      title: "Early Detection",
      subtitle: "Advanced Diagnostic Tools",
      description:
        "Cutting-edge diagnostic technology to catch problems early and save you time and money",
      features: ["Digital X-Rays", "3D Imaging", "Cancer Screening"],
      cta: "Schedule Scan",
      price: "From $149",
      rating: 4.9,
      patients: "300+",
      className: "bg-gradient-to-br from-purple-500 via-purple-400 to-pink-500",
      iconBg: "bg-white/20 backdrop-blur-sm",
    },
    {
      icon: <Zap className="w-10 h-10 text-white" />,
      title: "Emergency Care",
      subtitle: "24/7 Dental Emergencies",
      description:
        "Immediate dental care when you need it most with rapid response and pain relief",
      features: ["Pain Relief", "Trauma Treatment", "Same-Day Care"],
      cta: "Emergency Call",
      price: "From $199",
      rating: 4.7,
      patients: "200+",
      className: "bg-gradient-to-br from-orange-500 via-orange-400 to-red-500",
      iconBg: "bg-white/20 backdrop-blur-sm",
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "Specialty Services",
      subtitle: "Advanced Dental Treatments",
      description:
        "Specialized treatments for complex dental needs with expert care and modern techniques",
      features: ["Orthodontics", "Implants", "Cosmetic Surgery"],
      cta: "Consultation",
      price: "From $299",
      rating: 4.9,
      patients: "150+",
      className:
        "bg-gradient-to-br from-indigo-500 via-indigo-400 to-purple-500",
      iconBg: "bg-white/20 backdrop-blur-sm",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 py-16 bg-gradient-to-b from-orange-50 to-orange-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              002 — Our Services
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive <span className="text-orange-500">Dental Care</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional dental services designed to keep your smile healthy and
            beautiful with state-of-the-art technology and expert care
          </p>
        </div>

        <CardCarousel
          items={services}
          visibleCount={3}
          autoplayInterval={3000}
          showArrows={true}
          showIndicators={true}
          className="max-w-5xl mx-auto"
        />

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 text-lg font-semibold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
            onClick={() => router.push("/services")}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
