import { Shield, Sparkles, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { HoverEffect } from './ui/card-hover-effect'

export function ServicesSection() {
  const navigate = useNavigate()
  
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-slate-600" />,
      title: "Prevent cavities and gum disease",
      description: "Comprehensive preventive care to maintain optimal oral health with regular checkups and cleanings"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-slate-600" />,
      title: "Keep your teeth sparkling clean",
      description: "Professional cleaning services for a brighter, healthier smile using advanced techniques"
    },
    {
      icon: <Search className="w-8 h-8 text-slate-600" />,
      title: "Early detection of dental issues",
      description: "Advanced diagnostic tools to catch problems before they worsen, saving you time and money"
    }
  ]

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive dental care designed to keep your smile healthy and beautiful
          </p>
        </div>

        <HoverEffect items={services} className="max-w-5xl mx-auto" />
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="rounded-full px-8"
            onClick={() => navigate('/services')}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}