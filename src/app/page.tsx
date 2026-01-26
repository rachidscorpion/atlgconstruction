import Image from "next/image";

import fs from "fs";
import path from "path";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

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
    { name: "Kitchen renovations", image: "/services-images/kitchen-renovation.jpg" },
    { name: "Bathrooms remodeling", image: "/services-images/bathroom-remodelling.jpg" },
  ];

  // Read gallery images
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  let galleryImages: string[] = [];
  try {
    const files = fs.readdirSync(galleryDir);
    galleryImages = files
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
      .map((file) => `/gallery/${file}`);
  } catch (error) {
    console.error("Error reading gallery images:", error);
  }

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

      <Hero />

      <Services services={services} />

      <Gallery images={galleryImages} />

      <Contact />

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ATL Great Construction. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

