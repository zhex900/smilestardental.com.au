import { Check, Star } from 'lucide-react'
import { Button } from '../components/ui/button'

export function MembershipPage() {
  const plans = [
    {
      name: "Individual",
      price: "$29",
      period: "per month",
      savings: "Save up to 80%",
      features: [
        "2 Routine Cleanings per year",
        "2 Routine Exams per year", 
        "All necessary X-rays",
        "80% savings on additional treatments",
        "No waiting periods",
        "No annual maximums"
      ],
      popular: false
    },
    {
      name: "Family",
      price: "$89",
      period: "per month",
      savings: "Save up to 80%",
      features: [
        "Covers 2 adults + all children under 18",
        "2 Routine Cleanings per year (each member)",
        "2 Routine Exams per year (each member)",
        "All necessary X-rays",
        "80% savings on additional treatments",
        "No waiting periods",
        "No annual maximums"
      ],
      popular: true
    },
    {
      name: "Senior",
      price: "$39",
      period: "per month", 
      savings: "Save up to 80%",
      features: [
        "2 Routine Cleanings per year",
        "2 Routine Exams per year",
        "All necessary X-rays",
        "Additional periodontal maintenance",
        "80% savings on additional treatments",
        "Priority scheduling"
      ],
      popular: false
    }
  ]

  return (
    <div className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Membership Plans
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Affordable dental care for you and your family. No insurance needed - 
            just straightforward savings on quality dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-slate-800' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-green-600 font-medium">{plan.savings}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full py-3 rounded-full ${plan.popular ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-600 hover:bg-slate-700'}`}>
                Choose {plan.name} Plan
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Why Choose Our Membership?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-2">No Insurance Needed</div>
              <p className="text-slate-600">Simple, transparent pricing without the hassle of insurance claims</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-2">Immediate Benefits</div>
              <p className="text-slate-600">Start saving on your first visit with no waiting periods</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-2">Family Friendly</div>
              <p className="text-slate-600">Affordable plans that cover your entire family's dental needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}