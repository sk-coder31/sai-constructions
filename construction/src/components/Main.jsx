import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Sofa, Users } from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import promotional from "../assets/promotional.mp4";


gsap.registerPlugin(ScrollTrigger)

export default function Component() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const servicesRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        }
      })

      // Services cards stagger animation
      gsap.from('.service-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 70%',
        }
      })

      // Yellow bar animation
      gsap.from('.accent-bar', {
        height: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen" id="home">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={promotional} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div ref={headingRef} className="text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar w-2 h-12 bg-yellow-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                About
                <br />
                Sai Constructions
              </h2>
            </div>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Our ability to understand the characteristics of materials is paving
              way to create climate responsive designs.
            </p>
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black transition-colors duration-300"
              size="lg"
            >
              VIEW OUR WORK
            </Button>
          </div>

          {/* Right Column */}
          <div ref={servicesRef} className="space-y-6">
            <h3 className="text-yellow-500 text-3xl md:text-4xl font-bold mb-8">What We Do</h3>
            
            <Card className="service-card bg-black/40 border-gray-800 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
              <CardContent className="flex gap-4 p-6">
                <Building2 className="w-12 h-12 text-yellow-500 flex-shrink-0" />
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">Building Construction</h4>
                  <p className="text-gray-300">
                    We believe that every building should reflect the aura of its owner.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card bg-black/40 border-gray-800 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
              <CardContent className="flex gap-4 p-6">
                <Sofa className="w-12 h-12 text-yellow-500 flex-shrink-0" />
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">Interiors</h4>
                  <p className="text-gray-300">
                    Aesthetic sense is an innate experience beyond description.
                    We will give life and form to your aesthetic sense.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card bg-black/40 border-gray-800 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
              <CardContent className="flex gap-4 p-6">
                <Users className="w-12 h-12 text-yellow-500 flex-shrink-0" />
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">Joint Venture</h4>
                  <p className="text-gray-300">
                    We are ready to leverage our Technical Expertise to develop
                    your land for Commercial and Residential Projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}