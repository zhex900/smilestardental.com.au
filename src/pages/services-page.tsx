import { Shield, Sparkles, Search, Heart, Zap, Award } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Compare } from '../components/ui/compare'
import { motion } from 'framer-motion'

export function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular checkups, cleanings, and preventive treatments to maintain optimal oral health.",
      features: ["Oral Exams", "Professional Cleanings", "Fluoride Treatments", "Sealants"]
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"]
    },
    {
      icon: Search,
      title: "Diagnostic Services",
      description: "Advanced diagnostic tools and techniques for accurate treatment planning.",
      features: ["Digital X-Rays", "3D Imaging", "Oral Cancer Screening", "TMJ Analysis"]
    },
    {
      icon: Heart,
      title: "Restorative Dentistry",
      description: "Restore function and aesthetics to damaged or missing teeth.",
      features: ["Fillings", "Crowns", "Bridges", "Dental Implants"]
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description: "Immediate dental care when you need it most.",
      features: ["Pain Relief", "Trauma Treatment", "Same-Day Appointments", "24/7 Support"]
    },
    {
      icon: Award,
      title: "Specialty Services",
      description: "Specialized treatments for complex dental needs.",
      features: ["Orthodontics", "Periodontics", "Endodontics", "Oral Surgery"]
    }
  ]

  return (
    <div className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Our Dental Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your needs. From routine cleanings to advanced procedures, 
            we provide exceptional service with the latest technology and techniques.
          </p>
        </div>

        {/* Before/After Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Orthodontic Excellence
              </h2>
              <p className="text-slate-600 mb-6">
                See the dramatic transformation possible with our advanced orthodontic treatments. 
                Our experienced team uses the latest techniques to give you the perfect smile.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Traditional & Clear Braces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Invisalign Clear Aligners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Accelerated Treatment Options</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="p-4 border rounded-3xl bg-white border-slate-200 shadow-xl">
                <Compare
                  firstImage="https://picsum.photos/id/1011/350/350"
                  secondImage="https://picsum.photos/id/1025/350/350"
                  firstImageClassName="object-cover object-center"
                  secondImageClassname="object-cover object-center"
                  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px]"
                  slideMode="hover"
                  showHandlebar={true}
                  autoplay={true}
                  autoplayDuration={3000}
                />
                <div className="mt-3 text-center">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span className="font-medium">Before</span>
                    <span className="font-medium">After</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full text-lg">
            Schedule Your Appointment
          </Button>
        </div>
      </div>
    </div>
  )
}