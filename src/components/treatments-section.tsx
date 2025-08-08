export function TreatmentsSection() {
  const treatments = [
    {
      image: "https://picsum.photos/id/1011/300/200",
      title: "Teeth Straightening",
      description: "Improve your smile with braces"
    },
    {
      image: "https://picsum.photos/id/1012/300/200", 
      title: "Revitalized Cleaning",
      description: "A simple way to enhance your smile"
    },
    {
      image: "https://picsum.photos/id/1013/300/200",
      title: "Dental Implant", 
      description: "To replace and complete the function"
    }
  ]

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-slate-600">002 — Our Works</span>
            </div>
          </div>
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              A Healthy Smile<br />
              Starts Here
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={treatment.image} 
                alt={treatment.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {treatment.title}
                </h3>
                <p className="text-slate-600">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="w-16 h-16 border-2 border-slate-300 rounded-full flex items-center justify-center">
            <span className="text-slate-600 text-sm font-medium">↗</span>
          </div>
          <div className="max-w-md text-right">
            <p className="text-lg text-slate-700 font-medium">
              Expert Dental Care and Cleaning<br />
              Procedures for a Brighter, Healthier<br />
              Smile and Lasting Confidence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}