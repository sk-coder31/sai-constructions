
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Building, Clock, CheckCircle } from 'lucide-react'
import founder from "../assets/founder.jpg"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const underlineRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      // Underline animation
      gsap.from(underlineRef.current, {
        width: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.inOut"
      })

      // Content blocks animation
      const blocks = gsap.utils.toArray('.animate-block')
      blocks.forEach((block, index) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out"
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-16 md:py-24" id="about">
      <div className="text-center mb-16">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Sai Constructions
        </h1>
        <div ref={underlineRef} className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto" />
      </div>

      <div ref={contentRef} className="grid md:grid-cols-2 gap-12">
        {/* Founder Information */}
        <div className="animate-block space-y-6">
          <div className="relative">
            <img
              src={founder}
              alt="Founder"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-semibold">Arjun</h3>
              <p className="text-white/90">Founder, Sai Constructions</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span>Diploma in Civil Engineering</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="w-6 h-6 text-primary" />
              <span>5+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Building className="w-6 h-6 text-primary" />
              <span>6+ Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="space-y-6">
          <div className="animate-block">
            <p className="text-gray-600 leading-relaxed mb-6">
              Sai Constructions In <span className="text-blue-600 font-semibold">Chennai</span> founded in the year 2011 
              specializes in building construction, renovation & repair and interiors. Our core team consists 
              of in-house architect, structural engineer and interior designer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We have years of experience in building domestic, commercial, industrial 
              and institutional projects. We provide end-to-end solution for our 
              customers from building design to construction and interiors.
            </p>
          </div>

          <div className="animate-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">Balance between aesthetic appeal and structural stability</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">Customer-oriented building process with educational approach</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">Resource optimization for cost-effective construction</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">Climate-responsive design for reduced power consumption</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}