import { Award, Heart, Shield, Zap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TestimonialsSection } from "@/components/sections";
import { Reveal } from "@/components/ui/reveal";
import { BookLink } from "@/components/ui/book-link";
import { ServicesGrid } from "./services-grid";

const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "preventive", name: "Preventative care" },
  { id: "restorative", name: "Restorative Dentistry" },
  { id: "cosmetic", name: "Cosmetic Dentistry" },
  { id: "pediatric", name: "Children's dentistry" },
  { id: "orthodontics", name: "Orthodontics" },
  { id: "surgery", name: "Oral Surgery" },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Experienced team",
    description:
      "Highly qualified and experienced dental professionals dedicated to your care.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description:
      "State-of-the-art equipment and techniques for precise, comfortable treatments.",
  },
  {
    icon: Heart,
    title: "Patient-centred",
    description:
      "Personalised care plans tailored to your unique needs and preferences.",
  },
  {
    icon: Shield,
    title: "Safe & Comfortable",
    description:
      "Relaxing environment with strict safety protocols for your peace of mind.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Our Services"
        imageSrc="/images/dental-tools.jpg"
        description="Comprehensive dental care solutions tailored to meet your unique needs with the latest technology and experienced professionals."
      />

      {/* Service Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <ServicesGrid categories={serviceCategories} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We combine advanced technology with compassionate care to
                deliver exceptional results.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.1}
                  direction="up"
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gold-400">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to plan your next visit?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white opacity-90 text-lg mb-8 max-w-2xl mx-auto">
                Book a consultation to discuss your goals and the treatment
                options that may suit you.
              </p>
            </Reveal>
            <Reveal
              delay={0.4}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <BookLink className="inline-block bg-white text-gold-400 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Book Consultation
              </BookLink>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
