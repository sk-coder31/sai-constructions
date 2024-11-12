import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FadeInTestimonial() {
  const containerRef = useRef(null)
  const quoteRef = useRef(null)
  const authorRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Fade-in animation for the quote text
    gsap.fromTo(
      quoteRef.current.children,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Fade-in animation for author and title
    gsap.fromTo(
      [authorRef.current, titleRef.current],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        delay: 0.3,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300"
      >
        <div ref={quoteRef} className="mb-8 text-2xl md:text-3xl text-gray-700 leading-relaxed">
          {/* Split text into spans for individual animation */}
          {"As I am a person in the home loan industry for almost 2 decades, came across different builders, I am astonished, With Mr. Anbu, for his commitment of caring, to his clients on all aspects, and specially the intention of delivering the best quality construction, to his clients. I wish him whole heartedly for long successful life on all aspects."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block mx-1 opacity-0 transform hover:scale-110 hover:text-primary-600 transition-all duration-200">
                {word}
              </span>
            ))}
        </div>
        
        <div className="space-y-3">
          <h3 
            ref={authorRef}
            className="text-xl md:text-2xl font-bold text-gray-900 opacity-0"
          >
            Mr. Vaidyanathan
          </h3>
          <p 
            ref={titleRef}
            className="text-sm md:text-base text-gray-600 uppercase tracking-wider opacity-0"
          >
            Founder - Vai's Pro-active Financial Solutions
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-200 rounded-full -z-10 transform translate-x-1/4 translate-y-1/4 opacity-40" />
      </div>
    </div>
  )
}