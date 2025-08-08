import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

export function ContactPage() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your journey to better oral health? Get in touch with us today 
            to schedule your appointment or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                  <p className="text-slate-600">+1 (718) 373 7701</p>
                  <p className="text-sm text-slate-500">Call us for appointments</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600">info@odentrics.com</p>
                  <p className="text-sm text-slate-500">Send us your questions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                  <p className="text-slate-600">123 Dental Street<br />New York, NY 10001</p>
                  <p className="text-sm text-slate-500">Visit our modern clinic</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Hours</h3>
                  <div className="text-slate-600 space-y-1">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500">
                  <option>Select a service</option>
                  <option>General Checkup</option>
                  <option>Teeth Cleaning</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Dental Implants</option>
                  <option>Emergency Care</option>
                  <option>Membership Information</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your dental needs or questions..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}