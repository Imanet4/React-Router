import React from 'react'
import '../Pages/Contact.css'

const Contact = () => {
  return (
     <section id="contact" className="contact-section text-center">
      <h2 className="contact-title">📬 Summon Us</h2>
      <p className="contact-subtitle">
        Questions, compliments, spell requests? Send a little message our way ✨
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Magical Name" className="form-input" />
        <input type="email" placeholder="Owl Mail Address" className="form-input" />
        <textarea placeholder="Your Enchanted Message" rows="5" className="form-textarea"></textarea>
        <button type="button" className="form-button">Cast Message 🕊️</button>
      </form>
    </section>
  )
}

export default Contact;