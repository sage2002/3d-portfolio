import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
      },
    })
  })
  
    return (
        <div id="skills" className="flex-center section-padding">
          <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
              title="My Tech skills & stacks"
              sub="👩🏻‍💻 Skills that I can Bring to the Table"
            />
            <div className="tech-grid">
            {techStackIcons.map((icon) => (
                <div
                key={icon.name}
                className="relative card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                {/* The tech-card-animated-bg div is used to create a background animation when the 
                    component is hovered. */}
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                      which renders the 3D model of the tech stack icon. */}
                  <div className="tech-icon-wrapper">
                    <TechIcon model={icon} />
                  </div>
                  {/* The padding-x and w-full classes are used to add horizontal padding to the 
                      text and make it take up the full width of the component. */}
                  <div className="padding-x w-full">
                    {/* The p tag contains the name of the tech stack icon. */}
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}
             {/* This is for the img part */}
          {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
            </div>
        </div>
    </div>
  )
}

export default TechStack
