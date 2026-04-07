import { useState, useRef, useEffect } from 'react'
import './index.css'

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
  const [showVolumeIcon, setShowVolumeIcon] = useState(false)
  const iframeRef = useRef(null)

  const handleHeroClick = () => {
    if (iframeRef.current) {
      // Send unMute and playVideo commands to YouTube iframe
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'unMute',
        args: ''
      }), '*')
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'playVideo',
        args: ''
      }), '*')
      
      // Show sound icon briefly
      setShowVolumeIcon(true)
      setTimeout(() => setShowVolumeIcon(false), 1500)
    }
  }

  const scrollToBonuses = () => {
    document.getElementById('bonos')?.scrollIntoView({ behavior: 'smooth' })
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
      <section className="video-hero" onClick={handleHeroClick}>
        <div className="video-bg-container">
          <iframe
            ref={iframeRef}
            className="video-bg-iframe"
            src="https://www.youtube.com/embed/PKkBfjEVO1Q?autoplay=1&mute=1&loop=1&playlist=PKkBfjEVO1Q&controls=0&showinfo=0&rel=0&enablejsapi=1&modestbranding=1&iv_load_policy=3&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            preload="auto"
          ></iframe>
        </div>
        <div className="video-overlay" />
        
        {showVolumeIcon && (
          <div className="volume-indicator">
            <span className="volume-emoji">🔊</span>
          </div>
        )}

        <div className="video-content-simple">
          <div className="hero-logo-box">
            <img src="/hero-title.png" className="hero-title-img" alt="Bendito Capricho Concept Store" />
          </div>
          
          <div className="hero-spacer" />
          
          <button className="hero-bottom-btn" onClick={scrollToBonuses}>
            CONOCE NUESTRA VISIÓN
            <span className="btn-arrow">↓</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* Navbar - Simplified */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-logo">BENDITO CAPRICHO</div>
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

      {/* Bonuses */}
      <section className="section" id="bonos">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Exclusivo</span>
            <h2 className="section-title">Nuestra Visión y<br />Bonos Exclusivos</h2>
            <p className="section-subtitle">Lo que nos mueve y los beneficios que recibes al formar parte de nuestra comunidad.</p>
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
            <h2 className="cta-title">¿Listo para unirte a la visión?</h2>
            <p className="cta-subtitle">Únete ahora y empieza a transformar tu proyecto con el apoyo de nuestra comunidad estratégica.</p>
            <button className="btn-primary" onClick={scrollToBonuses}>
              Únete a la Comunidad ✦
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
