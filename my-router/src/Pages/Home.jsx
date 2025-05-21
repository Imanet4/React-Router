import '../Pages/Home.css'
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">🧙‍♀️ Welcome to Spells & Giggles</h1>
        <p className="home-tagline">Where code meets cauldrons, and websites get hexed (in the best way).</p>
        <p className="home-description">
          Whether you're a lone witch on a digital quest or a coven seeking a brand glow-up, we craft web spells that
          *work* like magic. No broom required.
        </p>
        <a href="#contact" className="home-cta">Summon a Spell 🔮</a>
      </div>
    </section>
  );
}

export default Home;