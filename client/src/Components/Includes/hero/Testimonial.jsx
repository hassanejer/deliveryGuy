import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';

function Testimonial() {
    const testimonials = [
        {
          id: 1,
          image: "./images/youcan.png",
          name: "YouCan Inc",
          stars: "5",
          testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ipsum vitae nisi finibus finibus.",
        },
        {
          id: 2,
          image: "./images/barid_bank.png",
          name: "Barid Bank",
          stars: "4.5",
          testimonial: "Duis vel ex vel massa rhoncus hendrerit. Aliquam nec volutpat magna, sit amet feugiat nibh.",
        },
        {
          id: 3,
          image: "./images/storeino.png",
          name: "StoreIno Inc",
          stars: "5",
          testimonial: "Fusce quis ex odio. Nullam imperdiet ipsum sit amet nibh fringilla, id dictum ex congue.",
        },
      ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div className="bg-white p-8 rounded-lg  shadow-xl">
            <div className="flex items-center">
              <img src={testimonial.image} alt={`${testimonial.name} profile`} className="w-16 h-16 rounded-full border border-sky-400" />
              <div className="ml-4">
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500">{testimonial.stars}</span>
                  <AiTwotoneStar size={20} className="ml-1 text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="mt-4">{testimonial.testimonial}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
