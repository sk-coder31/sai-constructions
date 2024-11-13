import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Sofa, Network, LayoutGrid, Wrench, Users } from 'lucide-react'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Lucide() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const underlineRef = useRef(null)

  const services = [
    {
      icon: Building2,
      title: 'Building Construction',
      description: 'We believe that every building should reflect the aura of its owner'
    },
    {
      icon: Sofa,
      title: 'Interiors',
      description: 'Aesthetic sense is an innate experience beyond description. We will give life and form to your aesthetic sense'
    },
    {
      icon: Network,
      title: 'Joint Venture',
      description: 'We are ready to leverage our Technical Expertise to develop your land for Commercial and Residential Projects'
    },
    {
      icon: LayoutGrid,
      title: 'Industrial and Commercial Projects',
      description: 'Robustness, Utility, Precision, Aesthetics and adherence to industry specific standards are our primary focus in this segment'
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Adding longevity and utility to your buildings'
    },
    {
      icon: Users,
      title: 'Consultancy Services',
      description: 'Structural and Elevation Designs, Cost Estimation, Building Valuation'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each service card
      const cards = gsap.utils.toArray('.service-card')
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      gsap.from(underlineRef.current, {
        width: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.inOut"
      })
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50" id="services">
    <div className="text-center mb-16">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Works
        </h1>
        <div ref={underlineRef} className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
