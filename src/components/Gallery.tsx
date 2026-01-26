"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
    images: string[];
}

export default function Gallery({ images }: GalleryProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const handleDotClick = (index: number) => {
        setCurrentPage(index);
    };

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextSlide = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(curr => curr + 1);
        }
    };

    const prevSlide = () => {
        if (currentPage > 0) {
            setCurrentPage(curr => curr - 1);
        }
    };

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentPage < totalPages - 1) {
            nextSlide();
        }

        if (isRightSwipe && currentPage > 0) {
            prevSlide();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className="gallery-section">
            <div className="container">
                <h2>Our Work Gallery</h2>
                <div
                    className="gallery-viewport"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        className={`gallery-nav prev ${currentPage === 0 ? 'disabled' : ''}`}
                        onClick={prevSlide}
                        aria-label="Previous page"
                        disabled={currentPage === 0}
                    >
                        &#10094;
                    </button>

                    <div
                        className="gallery-track"
                        style={{
                            transform: `translateX(-${(currentPage * 100) / totalPages}%)`,
                            width: `${totalPages * 100}%`
                        }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="gallery-page"
                                style={{ width: `${100 / totalPages}%` }}
                            >
                                {images
                                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                                    .map((src, imgIndex) => (
                                        <div
                                            key={`${pageIndex}-${imgIndex}`}
                                            className="gallery-item"
                                            onClick={() => handleImageClick(src)}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Gallery Image ${pageIndex * itemsPerPage + imgIndex + 1}`}
                                                fill
                                                className="gallery-image"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>

                    <button
                        className={`gallery-nav next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                        onClick={nextSlide}
                        aria-label="Next page"
                        disabled={currentPage === totalPages - 1}
                    >
                        &#10095;
                    </button>
                </div>

                <div className="gallery-pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`pagination-dot ${currentPage === index ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Enlarged gallery image"
                            fill
                            className="lightbox-image"
                            priority
                            quality={90}
                        />
                        <button className="lightbox-close" onClick={closeLightbox}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
