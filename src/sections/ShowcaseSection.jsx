import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
        {/* LEFT */}
              <div className="first-project-wrap">
                  <div className="image-wrapper">
                    <img src="/images/project1.png" alt="Chatbud" />
                  </div>
                  <div className="text-content">
                    <h2> CHATBUD - A realtime chat application with image uploads &
                    theme customisation.</h2>
                    <p className="text-white-50 md:text-xl">
                      The application built with React, Tailwind CSS, NodeJS, ExpressJS, 
                      MongoDB, Socket.IO, Zustand and DaisyUI-.
                    </p>
                  </div>
                </div>
          {/* RIGHT */}
              <div className="project-lost-wrapper overflow-hidden">
                <div className="project">
                </div>
                <img src="/images/project2.png" alt="New Project coming soon" />
              </div>

        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection
