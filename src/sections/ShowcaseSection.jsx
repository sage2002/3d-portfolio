import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);


  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, 
      project3Ref.current];

      projects.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 50, opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100'
            }
          }
        )
      })

    gsap.fromTo(
      sectionRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5}
      )

  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <a href="https://realtime-chat-app-five-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Chatbud" />
            </div>
            <div className="text-content">
              <h2>
                CHATBUD - A realtime chat application with image uploads & customisation.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, ExpressJS, Socket.io, MongoDB & TailwindCSS for a
                user-friendly experience.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <a href="https://www.figma.com/design/5zlo19wwAkhYCM1vj0rLbs/Figma-design-samples?node-id=0-1&t=cFDcjUN3H8kP4fPI-1" target="_blank" rel="noopener noreferrer"  className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#bbd8f9]">
                <img
                  src="/images/project2.png"
                  alt="Project Loading"
                />
              </div>
              <h2>Figma UI/UX Design </h2>
              <p className="text-white-50 md:text-l">Contact me for the access to the Figma file
              </p>
            </a>

            <a href="https://foodiez-two.vercel.app/" target="_blank" rel="noopener noreferrer"className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#cdb9ef]">
                <img src="/images/project3.png" alt="Project Loading" />
              </div>
              <h2>Food delivery & restaurant frontend app</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection 