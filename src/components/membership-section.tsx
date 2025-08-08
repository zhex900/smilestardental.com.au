import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function MembershipSection() {
  const navigate = useNavigate()

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-slate-600">001 — Join Membership</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Affordable Dental<br />
              Care for Your Family
            </h2>
            <p className="text-slate-600">
              Unlock Optimal Dental Wellness with Smile Star Dental
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img src="https://picsum.photos/id/1027/40/40" alt="Member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://picsum.photos/id/1025/40/40" alt="Member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://picsum.photos/id/1024/40/40" alt="Member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://picsum.photos/id/1023/40/40" alt="Member" className="w-10 h-10 rounded-full border-2 border-white" />
              <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-medium">+</span>
              </div>
            </div>
            <Button 
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-full"
              onClick={() => navigate('/membership')}
            >
              Join Membership
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">
            <div className="absolute top-6 right-6 text-slate-300 text-2xl">+</div>
            <div className="text-6xl font-bold text-slate-800 mb-4">80%</div>
            <p className="text-slate-600">
              Exclusive Member Savings: Save 30% - 80% on<br />
              Dental Procedures, Including Oral Exams,<br />
              Cleanings, and X-Rays.
            </p>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-white relative">
            <div className="absolute top-6 right-6 text-slate-500 text-2xl">+</div>
            <div className="text-6xl font-bold mb-4">40%</div>
            <p className="text-slate-300">
              Enhanced Member Benefits: Save 40% on All Other<br />
              Dental Services, Including Cosmetic, Restorative, and<br />
              Specialty Dental Procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}