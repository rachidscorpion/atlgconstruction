import Image from "next/image";

export default function Home() {
  const services = [
    { name: "New building projects", image: "/services-images/framing.jpg" }, // Using framing as placeholder if specific one missing
    { name: "Electrical", image: "/services-images/electrical.jpg" },
    { name: "Plumbing", image: "/services-images/plumbing.jpg" },
    { name: "Framing", image: "/services-images/framing.jpg" },
    { name: "Drywall", image: "/services-images/drywall.jpg" },
    { name: "Painting exterior/ interior", image: "/services-images/painting.jpg" },
    { name: "Roofing", image: "/services-images/roofing.jpg" },
    { name: "Siding", image: "/services-images/siding.jpg" },
    { name: "Flooring", image: "/services-images/flooring.jpg" },
    { name: "Additions", image: "/services-images/additions.jpg" },
    { name: "Basement finishing", image: "/services-images/basement-finishing.jpg" },
    { name: "Kitchen renovations", image: "/services-images/kitechen-renovation.jpg" },
    { name: "Bathrooms remodeling", image: "/services-images/bathroom-remodelling.jpg" },
  ];

  return (
    <main>
      <nav className="navbar">
        <div className="logo">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="logo-image"
          />
          <span>ATL Great Construction</span>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg">
          <Image
            src="/landing.jpg"
            alt="Construction Site"
            fill
            priority
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-subtitle">Complete Construction Services</span>
          <h1>Built Strong for Construction, Renovations, and Beyond</h1>
          <p>All you need, one contractor.</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-label">Reliable Service</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Expert Team</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Quality Work</span>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Services Offered</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="service-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="service-overlay">
                    <h3>{service.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Ready to start your project? Get in touch with us today.</p>
            <div className="info-details">
              <p><strong>Email:</strong> atlgreatconstructionandrenovat@gmail.com</p>
              <p><strong>Phone:</strong> (470) 290-7170 (Jose - Business Owner)</p>
              <p><strong>Address:</strong> Atlanta, GA</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="How can we help?" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ATL Great Construction. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
