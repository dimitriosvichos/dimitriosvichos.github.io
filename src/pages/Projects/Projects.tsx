import React from 'react'

const Projects: React.FC = () => {
  {
    return (
      <div className="hero container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:w-[960px] h-[100vh] py-10">
        <div className="hero-text lg:w-[500px]">
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-4">Here are some of my projects that I have worked on.</p>
        </div>
        <div className="hero-image lg:w-[500px]">
          <img src="https://images.unsplash.com/photo-1622838327827-4b7b2b4e7f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdl" alt="hero" className="rounded-lg" />
        </div>
      </div>
    )
  }
}

export default Projects;