import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
// import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"
// import client3 from "../assets/client3.jpeg"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    name: 'Dr. Senthil',
    role: 'Senior Consultant',
    image: client2,
    rating: 5,
    text: 'Sai Constructions exemplifies excellence. Their dedication and precision made my project stress-free and perfectly executed.',
  },
  {
    id: 2,
    name: 'P. Lazaar',
    role: 'Architect',
    image: client2,
    rating: 5,
    text: 'Collaborating with Sai Constructions was a fantastic experience. They bring innovative designs and impeccable execution to the table.',
  },
  {
    id: 3,
    name: 'Luthmary',
    role: 'Entrepreneur',
    image: client2,
    rating: 5,
    text: 'Sai Constructions turned my vision into reality with professionalism and creativity. A trusted partner for any construction need.',
  },
  {
    id: 4,
    name: 'Balakumar',
    role: 'Real Estate Investor',
    image: client2,
    rating: 5,
    text: 'The quality and attention to detail provided by Sai Constructions are unmatched. I highly recommend them for any project.',
  },
  {
    id: 5,
    name: 'Dr. Prabha',
    role: 'Professor',
    image: client2,
    rating: 5,
    text: 'I am extremely satisfied with Sai Constructions. Their expertise and customer service made the entire process smooth and efficient.',
  },
  {
    id: 6,
    name: 'Senthil Kumar',
    role: 'Entrepreneur, USA',
    image: client2,
    rating: 5,
    text: 'Sai Constructions provides world-class service. The project was delivered on time and exceeded my expectations.',
  },
  {
    id: 7,
    name: 'Selvaraj',
    role: 'PF Consultant Officer',
    image: client2,
    rating: 4,
    text: 'Sai Constructions displayed professionalism and efficiency. The results speak for themselves, and I am delighted with their work.',
  },
];


export default function CustomerTestimonials() {
  return (
    <div
      className="relative" id="contact"
      style={{
        backgroundImage:
          'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
      }}
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-white mb-8">
            What Our Customers Say
            <div className="mt-2 w-24 mx-auto h-1 bg-white rounded-full"></div>
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl shadow-xl p-6 h-full flex flex-col border-2 border-transparent hover:border-pink-500 hover:shadow-2xl transition duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-purple-700">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                  <div className="mt-4 text-right">
                    <span className="text-sm text-gray-500 italic">- {testimonial.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}
