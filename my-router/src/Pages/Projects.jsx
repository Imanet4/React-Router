import React from 'react'
import '../Pages/Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects-section text-center">
      <h2 className="projects-title">🧪 Featured Projects</h2>
      <p className="projects-subtitle">
        A cauldron of creativity — brewed with code, charm, and a hint of chaos.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-name">🌙 Spell Scheduler</h3>
          <p className="project-desc">
            A React app that lets you plan your moon rituals and to-do spells by phase. Productivity meets witchcraft.
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-name">🧹 BroomFinder</h3>
          <p className="project-desc">
            A sassy e-commerce site built with JavaScript & Bootstrap for witches in search of their dream ride.
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-name">🔮 TarotBot</h3>
          <p className="project-desc">
            An AI-powered chatbot that gives randomly generated tarot readings with ✨attitude✨.
          </p>
        </div>
      </div>
    </section>
  )
};

export default Projects;