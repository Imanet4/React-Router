import React from 'react'
import '../Pages/About.css';

const About = () => {
  return (
    <section id="about" className="about-section text-center">
      <h2 className="about-title">🧪 Our Coven</h2>
      <p className="about-intro">
        A quirky crew of spell-slinging developers, design druids, and digital enchantresses.
      </p>

      <div className="about-blurb">
        <p>
          At <strong>Spells & Giggles</strong>, we don’t just write code — we *whisper incantations* into it. Every website we craft is 
          laced with intention, sass, and just a hint of chaos. Whether you want a bold brand reveal or a portfolio that glows like a 
          full moon ritual, we’re your magical tech crew.
        </p>

        <p>
          Our tools? A bubbling cauldron of React, HTML potions, and CSS sigils. Our mission? To weave
          unforgettable experiences with pixel-perfect precision and a *lot* of laughter.
        </p>

        <p>
          Basically? We're here to turn your digital dreams into hexed-out, high-vibe realities.
        </p>
      </div>

      <div className="about-quote">
        <p>“Creativity is our wand. Code is our spell. The internet is our forest.” 🌲🔮</p>
      </div>
    </section>
  )
}

export default About;