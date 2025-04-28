import React from 'react'
import TitleHeader from '../components/TitleHeader'
import GlowCard from '../components/GlowCard'
import { testimonial } from '../constants'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px:5">
            <TitleHeader title="Feedback that Fuels Me" 
                sub="💬 My Work, Their Words ✨"
            />

<div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonial.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;