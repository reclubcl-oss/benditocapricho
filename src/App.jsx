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
  const [hasUnmuted, setHasUnmuted] = useState(false)
  const iframeRef = useRef(null)

  // Global click listener to unMute video on first interaction
  useEffect(() => {
    const handleGlobalInteraction = () => {
      if (!hasUnmuted && iframeRef.current) {
        // Re-send play to kickstart if mobile browser blocked initial autoplay
        iframeRef.current.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'playVideo',
          args: []
        }), '*')
        // Force HD quality via JS API if possible
        iframeRef.current.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'setPlaybackQuality',
          args: ['hd1080']
        }), '*')
        
        // Go back to the very beginning
        iframeRef.current.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'seekTo',
          args: [0, true]
        }), '*')

        iframeRef.current.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'unMute',
          args: []
        }), '*')
        
        setShowVolumeIcon(true)
        setHasUnmuted(true)
        setTimeout(() => setShowVolumeIcon(false), 2000)
      }
    }

    window.addEventListener('click', handleGlobalInteraction)
    window.addEventListener('touchstart', handleGlobalInteraction)

    return () => {
      window.removeEventListener('click', handleGlobalInteraction)
      window.removeEventListener('touchstart', handleGlobalInteraction)
    }
  }, [hasUnmuted])

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

      {/* Page Pattern Background */}
      <div className="page-bg-pattern" />

      {/* Navbar SaaS Style */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo-group">
            <img src="/hero-logo.png" alt="Bendito Capricho" className="nav-corner-logo" />
          </div>
          <div className="nav-actions">
            <button className="nav-btn-primary" onClick={scrollToBonuses}>Unirse Ahora</button>
          </div>
        </div>
      </nav>

      {/* ===== REFINED CENTERED HERO ===== */}
      <section className="saas-hero centered">
        <div className="container hero-centered-stack">
          <div className="hero-content-center">
            <div className="hero-brand">
              <span className="hero-brand-label">Concept Store</span>
            </div>
            <h1 className="hero-title">
              BENDITO CAPRICHO <span className="text-gradient">STORE</span>
            </h1>
            <p className="hero-description">
              Transformamos la visión de tus proyectos en realidades impactantes. Únete a la comunidad de creadores más exclusiva.
            </p>
          </div>

          <div className="hero-visual-large">
            <div className="video-player-container">
              <div className="video-container-refined">
                {/* Translucent overlay to block direct YouTube interactions/re-directions */}
                <div className="video-blocker-overlay" />
                
                <iframe
                  ref={iframeRef}
                  className="saas-video-iframe-refined"
                  src="https://www.youtube.com/embed/PKkBfjEVO1Q?autoplay=1&mute=1&loop=1&playlist=PKkBfjEVO1Q&controls=0&showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fbenditocapricho.vercel.app&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  onLoad={() => {
                    // Force start in case native autoplay fails
                    if (iframeRef.current) {
                      iframeRef.current.contentWindow.postMessage(JSON.stringify({
                        event: 'command', func: 'mute', args: []
                      }), '*')
                      iframeRef.current.contentWindow.postMessage(JSON.stringify({
                        event: 'command', func: 'playVideo', args: []
                      }), '*')
                    }
                  }}
                ></iframe>

                {showVolumeIcon && (
                  <div className="saas-volume-indicator-central">
                    <span>🔊</span>
                  </div>
                )}
              </div>
            </div>
            <div className="glow-effect"></div>
          </div>

          <div className="hero-bottom-actions">
            <button className="btn-saas-primary" onClick={scrollToBonuses}>
              Conoce Nuestra Visión
            </button>
            <div className="hero-mini-stats-center">
              <div className="mini-stat">
                <span className="stat-num">+500</span>
                <span className="stat-txt">Miembros</span>
              </div>
              <div className="mini-stat">
                <span className="stat-num">4.9★</span>
                <span className="stat-txt">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <div className="features-intro">
        <div className="container">
          <div className="stats-row">
            <div className="saas-stat">
              <div className="saas-stat-num">+500</div>
              <div className="saas-stat-label">Miembros activos</div>
            </div>
            <div className="saas-stat">
              <div className="saas-stat-num">4.9★</div>
              <div className="saas-stat-label">Valoración promedio</div>
            </div>
            <div className="saas-stat">
              <div className="saas-stat-num">100%</div>
              <div className="saas-stat-label">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonuses */}
      <section className="section bg-alt" id="bonos">
        <div className="container">
          <div className="saas-section-header">
            <span className="saas-badge">Beneficios</span>
            <h2 className="saas-section-title">Impulsa tu proyecto<br />con nuestra comunidad</h2>
            <p className="saas-section-subtitle">Lo que nos mueve y los beneficios exclusivos al formar parte de nuestra visión.</p>
          </div>
          <div className="saas-features-grid">
            {BONUSES.map((bonus, i) => (
              <div key={i} className="saas-feature-card">
                <div className="feature-icon">{bonus.icon}</div>
                <h3 className="feature-title">{bonus.title}</h3>
                <p className="feature-desc">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="testimonios">
        <div className="container">
          <div className="saas-section-header">
            <span className="saas-badge">Comunidad</span>
            <h2 className="saas-section-title">Lo que dicen los creadores</h2>
          </div>
          <div className="saas-testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="saas-testimonial-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-author">
                  <div className="t-avatar">{t.name[0]}</div>
                  <div className="t-info">
                    <div className="t-name">{t.name}</div>
                    <div className="t-handle">{t.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-saas-section">
        <div className="container">
          <div className="cta-saas-content">
            <h2 className="cta-saas-title">¿Listo para el siguiente nivel?</h2>
            <p className="cta-saas-subtitle">Tu visión merece el mejor respaldo. Únete hoy mismo.</p>
            <button className="btn-saas-xl" onClick={scrollToBonuses}>
              Únete a la Comunidad ✦
            </button>
            <p className="cta-saas-note">Sin compromisos • Acceso inmediato</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="saas-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="f-logo">✦ BENDITO CAPRICHO</span>
              <p className="f-tagline">Concept Store & Community</p>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Bendito Capricho. Todos los derechos reservados.</p>
              <div className="footer-links">
                <a href="#bonos">Bonos</a>
                <a href="#testimonios">Testimonios</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
