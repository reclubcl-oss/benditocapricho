import './index.css'

const TEAM = [
  { name: 'Cote', role: 'Marketing & Creación', initial: 'C' },
  { name: 'Dani', role: 'Área Comercial', initial: 'D' },
  { name: 'David', role: 'Logística', initial: 'D' },
  { name: 'David', role: 'Soporte Web', initial: 'D' },
]

const BONUSES = [
  {
    icon: '🌐',
    title: 'Comunidad Exclusiva',
    desc: 'Accede a nuestra comunidad privada donde conectarás con personas que comparten tu visión y pasión por los proyectos únicos.',
  },
  {
    icon: '💬',
    title: 'Grupo Privado VIP',
    desc: 'Únete a nuestros grupos privados donde compartimos estrategias, tips exclusivos y contenido que no encontrarás en ningún otro lugar.',
  },
  {
    icon: '🎓',
    title: 'Entrenamiento Premium',
    desc: 'Recibe acceso a capacitaciones y entrenamientos de alto nivel diseñados específicamente para potenciar tu proyecto.',
  },
]

const PRODUCTS = [
  {
    emoji: '🪟',
    badge: 'MÁS POPULAR',
    name: 'VITRINA ADAPTABLE',
    description: 'La solución perfecta para mostrar y vender tus proyectos de manera profesional y efectiva, adaptada a tus necesidades específicas.',
    price: '$185.000',
  },
  {
    emoji: '✨',
    badge: 'PREMIUM',
    name: 'PACK COMPLETO',
    description: 'Todo lo que necesitas para llevar tu proyecto al siguiente nivel. Incluye todos los recursos y acceso a la comunidad por tiempo ilimitado.',
    price: '$320.000',
  },
]

const TESTIMONIALS = [
  {
    text: 'Desde que me uní a Bendito Capricho, mi proyecto creció de una forma que nunca imaginé. El apoyo de la comunidad es increíble y los recursos son de altísima calidad.',
    name: 'Yamilet R.',
    handle: '@yamiletoficial',
  },
  {
    text: 'La vitrina adaptable transformó por completo la manera en que presento mi trabajo. Ahora mis clientes entienden mi propuesta de valor desde el primer segundo.',
    name: 'Carolina M.',
    handle: '@carolinadesigns',
  },
  {
    text: 'El grupo privado VIP es una joya. Estrategias reales, personas comprometidas y contenido exclusivo. Una de las mejores inversiones que he hecho.',
    name: 'Sebastián L.',
    handle: '@sebastianl_pro',
  },
]

export default function App() {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Background Orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ===== VIDEO HERO ===== */}
      <section className="video-hero">
        <div className="video-bg-container">
          <iframe
            className="video-bg-iframe"
            src="https://www.youtube.com/embed/PKkBfjEVO1Q?autoplay=1&mute=1&loop=1&playlist=PKkBfjEVO1Q&controls=0&showinfo=0&rel=0&enablejsapi=1&modestbranding=1&iv_load_policy=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-overlay" />
        <div className="video-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Comunidad activa y en crecimiento
          </div>
          <h1 className="hero-title">
            El Siguiente Paso con{' '}
            <span className="gradient-text">Bendito Capricho</span>{' '}
            y Transforma tu Proyecto
          </h1>
          <p className="hero-subtitle">
            Únete a nuestra comunidad exclusiva, accede a recursos premium y lleva tu proyecto al nivel que siempre soñaste.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToProducts}>
              Descubrir Ahora ✦
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' })}>
              Conocer el equipo
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* Navbar - after video so it floats over */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-logo">BENDITO CAPRICHO</div>
          <button className="nav-btn" onClick={scrollToProducts}>Ver Vitrinas</button>
        </div>
      </nav>

      {/* Stats bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">+500</div>
              <div className="stat-label">Miembros activos</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4.9★</div>
              <div className="stat-label">Valoración promedio</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Satisfacción garantizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="section" id="equipo">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nuestro Equipo</span>
            <h2 className="section-title">Las personas detrás<br />de Bendito Capricho</h2>
            <p className="section-subtitle">Un equipo apasionado comprometido con el éxito de tu proyecto.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <div key={i} className="glass-card team-card">
                <div className="team-avatar">{member.initial}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Bonuses */}
      <section className="section" id="bonos">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Exclusivo</span>
            <h2 className="section-title">Bonos que transforman<br />tu experiencia</h2>
            <p className="section-subtitle">Al unirte, recibes acceso inmediato a todos estos beneficios exclusivos.</p>
          </div>
          <div className="bonuses-grid">
            {BONUSES.map((bonus, i) => (
              <div key={i} className="glass-card bonus-card">
                <span className="bonus-icon">{bonus.icon}</span>
                <div className="bonus-title">{bonus.title}</div>
                <p className="bonus-desc">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Products */}
      <section className="section" id="productos">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Productos</span>
            <h2 className="section-title">Conoce Nuestros<br />Productos</h2>
            <p className="section-subtitle">Soluciones diseñadas para impulsar tu proyecto y multiplicar tus resultados.</p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product, i) => (
              <div key={i} className="glass-card product-card">
                <div className="product-image">{product.emoji}</div>
                <div className="product-info">
                  <div className="product-badge">{product.badge}</div>
                  <div className="product-name">{product.name}</div>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{product.price}</div>
                  <button className="product-btn">Obtener Acceso →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Testimonials */}
      <section className="section" id="testimonios">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimonios</span>
            <h2 className="section-title">Lo que dicen nuestros<br />clientes</h2>
            <p className="section-subtitle">Historias reales de personas que transformaron sus proyectos.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-card testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-handle">{t.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">¿Listo para el siguiente paso?</h2>
            <p className="cta-subtitle">Únete ahora y empieza a transformar tu proyecto con el apoyo de nuestra comunidad.</p>
            <button className="btn-primary" onClick={scrollToProducts}>
              Empezar Ahora ✦
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">BENDITO CAPRICHO</div>
          <p className="footer-text">© 2025 Bendito Capricho. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
