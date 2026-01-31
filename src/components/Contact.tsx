"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/contact";

interface State {
    success?: string;
    error?: string;
}

const initialState: State = {
    success: "",
    error: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="btn-submit" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
}

// Helper for form status hook if needed in older react builds, but here we can just import it from react-dom
import { useFormStatus } from "react-dom";

export default function Contact() {
    const [state, formAction] = useActionState(sendEmail, initialState);
    const [name, setName] = useState("Jose");
    const [email, setEmail] = useState("altconstructions09@gmail.com");
    const [phone, setPhone] = useState("(470) 290-7170");
    const [address, setAddress] = useState("Atlanta, GA");

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Contact Us</h2>
                    <p>Ready to start your project? Get in touch with us today.</p>
                    <div className="info-details">
                        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                        <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a> ({name} - Business Owner)</p>
                        <p><strong>Address:</strong> {address}</p>
                    </div>
                </motion.div>

                <motion.form
                    action={formAction}
                    className="contact-form"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {state?.success && (
                        <div className="alert-success" style={{
                            padding: "1rem",
                            backgroundColor: "rgba(0, 255, 0, 0.1)",
                            border: "1px solid green",
                            marginBottom: "1rem",
                            borderRadius: "4px"
                        }}>
                            {state.success}
                        </div>
                    )}
                    {state?.error && (
                        <div className="alert-error" style={{
                            padding: "1rem",
                            backgroundColor: "rgba(255, 0, 0, 0.1)",
                            border: "1px solid red",
                            marginBottom: "1rem",
                            borderRadius: "4px"
                        }}>
                            {state.error}
                        </div>
                    )}

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
                    <SubmitButton />
                </motion.form>
            </div>
        </section>
    );
}

