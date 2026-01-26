"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Contact Us</h2>
                    <p>Ready to start your project? Get in touch with us today.</p>
                    <div className="info-details">
                        <p><strong>Email:</strong> atlgreatconstructionandrenovat@gmail.com</p>
                        <p><strong>Phone:</strong> (470) 290-7170 (Jose - Business Owner)</p>
                        <p><strong>Address:</strong> Atlanta, GA</p>
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
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
                </motion.form>
            </div>
        </section>
    );
}
