import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Something went wrong. Please try again later.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <div className={`grid lg:grid-cols-2 ${isSubmitted ? 'lg:grid-cols-1' : ''}`}>
        <div className={`p-8 lg:p-12 relative transition-all duration-500 ${
          isSubmitted 
            ? 'bg-transparent lg:p-4 min-h-0 h-0 overflow-hidden' 
            : 'bg-yellow-500 min-h-screen flex flex-col justify-center'
        }`}>
          {!isSubmitted && (
            <>
              <h1 className="text-3xl font-bold text-black mb-2">Contact Us</h1>
              <div className="w-12 h-1 bg-black mb-8"/>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    name="name"
                    className="bg-white placeholder:text-gray-500 border-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="bg-white placeholder:text-gray-500 border-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  placeholder="Contact"
                  name="contact"
                  className="bg-white placeholder:text-gray-500 border-none"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  placeholder="Message"
                  name="message"
                  className="bg-white placeholder:text-gray-500 border-none min-h-[200px] resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>

        <div className="bg-gray-100 min-h-screen">
          <div className="bg-gray-900 p-6 flex justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="p-8 lg:p-12 space-y-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                <p className="text-gray-700">
                  NO- 2/14-B, F1, First Floor, School street Radha Nagar, Chrompet Chennai, Tamil Nadu 600044
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-500" />
                <div className="space-y-1">
                  <a href="tel:+918122563756" className="text-gray-700 hover:text-yellow-500 block">
                    +91 81225 63756
                  </a>
                  <a href="tel:+919655696550" className="text-gray-700 hover:text-yellow-500 block">
                    +91 96556 96550
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-500" />
                <a href="mailto:info@piinfratech.com" className="text-gray-700 hover:text-yellow-500">
                  info@piinfratech.com
                </a>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985619587837!2d80.14023!3d12.967456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d639e47618b%3A0x989d46c11f4f1234!2sRadha%20Nagar%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600044!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Thank you for submitting!</DialogTitle>
          </DialogHeader>
          <div className="text-center text-gray-500">
            We will get back to you as soon as possible.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}