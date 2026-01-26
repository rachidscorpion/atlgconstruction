"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
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
                <motion.span
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Complete Construction Services
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Built Strong for Construction, Renovations, and Beyond
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    All you need, one contractor.
                </motion.p>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="stat-item">
                        <span className="stat-label">Reliable Service</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Expert Team</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Quality Work</span>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
