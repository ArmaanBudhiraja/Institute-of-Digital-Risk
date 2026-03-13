import { useEffect, useRef, useState } from "react";
import "../styles/idr.css";

const Index = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("scrolled", window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#community", label: "Community" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* ====== HEADER ====== */}
      <header ref={headerRef} className="main-header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/logo_with_name.png" alt="IDR Logo" />
          </a>

          <nav className="main-nav">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        {/* ====== HERO ====== */}
        <section className="hero">
          <div className="hero-bg-pattern" />
          <div className="container hero-content">
            <h1 className="hero-headline">Advancing the Future of Digital Risk</h1>
            <p className="hero-subheading">
              IDR trains and deploys the next generation of digital risk practitioners,
              bridging rigorous academic collaboration with real-world industry practice.
            </p>
            <div className="hero-cta">
              <a href="#services" className="btn btn-primary" onClick={(e) => scrollTo(e, "#services")}>Explore Programs</a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollTo(e, "#contact")}>Hire Talent</a>
            </div>
          </div>
        </section>

        {/* ====== ABOUT ====== */}
        <section id="about" className="content-section">
          <div className="container">
            <h2 className="section-title">An Institute Forged by Industry</h2>
            <div className="about-content">
              <p>
                The Institute of Digital Risk (IDR) is an industry-led training and deployment
                institute dedicated to building capability in digital, cyber, and technology risk.
                We focus on developing practitioners equipped to protect and enhance value within
                financial services, regulated industries, and critical national infrastructure.
              </p>
              <p>
                In collaboration with leading UK academic partners, our model integrates
                cutting-edge research with hands-on industry projects. This ensures our talent is
                not just qualified, but proven in addressing the complex risk challenges of today
                and tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* ====== SERVICES ====== */}
        <section id="services" className="content-section bg-muted">
          <div className="container">
            <h2 className="section-title">Our Core Pillars</h2>
            <div className="service-grid">
              <div className="service-card">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <h3>Academy</h3>
                <p>Intensive training programs and professional bootcamps designed for students and career-changers seeking to enter the digital risk field.</p>
              </div>

              <div className="service-card">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <h3>Innovation &amp; Incubation</h3>
                <p>Developing next-generation AI governance models, digital risk frameworks, and novel methodologies through applied research and development.</p>
              </div>

              <div className="service-card">
                <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <h3>Advisory Services</h3>
                <p>Expert guidance for organizations on implementing and maturing frameworks such as NIST, ISO 27001, and the NIS2 Directive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====== PIPELINE ====== */}
        <section id="model" className="content-section">
          <div className="container">
            <h2 className="section-title">Our Talent Pipeline</h2>
            <div className="pipeline-flow">
              <div className="pipeline-step">
                <div className="step-number">1</div>
                <div>
                  <h3>Train</h3>
                  <p>Rigorous, hands-on education.</p>
                </div>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">
                <div className="step-number">2</div>
                <div>
                  <h3>Hire</h3>
                  <p>Connecting talent with industry.</p>
                </div>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">
                <div className="step-number">3</div>
                <div>
                  <h3>Innovate</h3>
                  <p>Solving real-world challenges.</p>
                </div>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">
                <div className="step-number">4</div>
                <div>
                  <h3>Deploy</h3>
                  <p>Embedding expertise in teams.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== COMMUNITY ====== */}
        <section id="community" className="content-section bg-muted">
          <div className="container text-center">
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-subtitle">
              Our community includes aspiring students, early-career professionals, and seasoned
              practitioners in cyber and digital risk. We focus on preparing talent for impactful roles in:
            </p>
            <div className="community-tags">
              <span>Financial Services</span>
              <span>Critical Infrastructure</span>
              <span>Regulated Industries</span>
              <span>Government</span>
            </div>
          </div>
        </section>

        {/* ====== CONTACT ====== */}
        <section id="contact" className="content-section">
          <div className="container">
            <h2 className="section-title">Get Involved</h2>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Register your interest or start a conversation.</h3>
                <p>
                  Whether you're looking to enrol in a program, hire certified talent, or
                  partner with us, we'd love to hear from you.
                </p>
                <a href="mailto:contact@idr-institute.org" className="contact-email">
                  contact@idr-institute.org
                </a>
              </div>

              {formSubmitted ? (
                <div className="form-success">
                  <p>Thank you for your interest!</p>
                  <p>We will be in touch shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Register Interest</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ====== FOOTER ====== */}
      <footer className="main-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Institute of Digital Risk. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
