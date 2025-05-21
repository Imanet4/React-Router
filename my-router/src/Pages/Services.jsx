import React from 'react'
import '../Pages/Services.css'

const Services = () => {
  return (
    <section id="services" className="services-section text-center">
      <h2 className="services-title">🔮 Our Services</h2>
      <p className="services-subtitle">
        Magic, mischief, and a pinch of professionalism.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3 className="service-name">✨ Custom Spellwork</h3>
          <p className="service-desc">
            Need a little enchantment in your life? We craft personalized spells for love, luck, and laugh attacks.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-name">🧴 Potion Blending</h3>
          <p className="service-desc">
            From calming brews to confidence elixirs — our potions are brewed with giggles and just a dash of drama.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-name">🕯️ Ritual Kits</h3>
          <p className="service-desc">
            Handpicked tools and instructions for moon rituals, seasonal ceremonies, and “I need a win” emergencies.
          </p>
        </div>
      </div>
    </section>
  )
};

export default Services;