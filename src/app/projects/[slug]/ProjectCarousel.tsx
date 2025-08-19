"use client";
import { useState } from "react";

interface Props {
  images: string[];
}

export default function ProjectCarousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full">
      <img src={images[current]} alt={`Slide ${current}`} className="max-w-full max-h-[700px] mx-auto object-contain rounded-xl" />
      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 
                   bg-primary text-white text-3xl font-bold 
                   w-10 h-10 rounded-full flex items-center justify-center 
                   shadow-lg hover:bg-pink-600 transition"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 
                   bg-primary text-white text-3xl font-bold 
                   w-10 h-10 rounded-full flex items-center justify-center 
                   shadow-lg hover:bg-pink-600 transition"
      >
        ›
      </button>
    </div>
  );
}

