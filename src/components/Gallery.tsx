"use client";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const images = [
  { src: "/gallery-1.jpg", alt: "Páramo restaurado 1" },
  { src: "/gallery-2.jpg", alt: "Voluntarios plantando" },
  { src: "/gallery-3.jpg", alt: "Vivero comunitario" },
  { src: "/gallery-4.jpg", alt: "Equipo Green Nation" },
  { src: "/gallery-5.jpg", alt: "Río protegido" },
  { src: "/gallery-6.jpg", alt: "Panorámica del páramo" },
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-12">
          Projects & Structures
        </h2>
        <Masonry
          breakpointCols={breakpoints}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="mb-4 cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </Masonry>
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          index={index}
        />
      </div>
    </section>
  );
}
