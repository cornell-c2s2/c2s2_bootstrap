import React from "react";
import eagle from "../assets/img/chips/c2s2-2023-digital.jpg";
import puffin from "../assets/img/chips/eagle_digital_24.jpg";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";

function ChipGallery() {
  return (
    <main id="main">
      <section id="chipgallery" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Chip Gallery</h1>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container chip-gallery-container">
          <ChipComponent
            img={puffin}
            name="Puffin Digital Chip"
            date="Spring 2024"
            text="The Spring 24 tapeout builds on top of the Spring 23 tapeout. This is our final iteration of the sound classifier, featuring a 16-bit fixed point (8 integer bits) 32-point Cooley Tukey FFT module, as well as a configurable classifier. Puffin bridges the RISC-V core and the digital classifier via a Wishbone Bus, yielding a more integrated SoC."
            link="/chip-gallery/puffin"
          />
          <ChipComponent
            img={eagle}
            name="Eagle Digital Chip"
            date="Spring 2023"
            text="The 2023 C2S2 Digital Tapeout showcases a design centered around a RISC-V Litex System on Chip. This chip features a custom digital Cooley-Tukey Fast Fourier Transform (FFT) implementation, optimized for high-speed signal processing tasks. The RISC-V architecture provides a flexible and scalable processing platform, enabling efficient execution of complex algorithms and data manipulation."
            link="/chip-gallery/eagle"
          />
          <ChipComponent
            img={sparrow}
            name="Sparrow Analog Chip"
            date="Spring 2023"
            text="The 2023 C2S2 Analog Tapeout features an innovative hardware design centered around a RISC-V Litex System on Chip (SoC). This versatile chip incorporates multiple analog components to enhance its functionality: operational amplifiers, a 'fingers' implementation for efficient analog interfacing, and an analog multiplier for signal modulation applications."
            link="/chip-gallery/sparrow"
          />
        </div>
      </section>
    </main>
  );
}

function ChipComponent({ img, name, date, text, link }) {
  return (
    <div className="chip-gallery-item" data-aos="zoom-in" data-aos-delay="100">
      <div className="chip-gallery-card">
        <div className="row g-0">
          <div className="col-md-4 chip-image-container">
            <img src={img} className="chip-image" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="chip-desc">
              <h3 className="chip-title">{name}</h3>
              <h4 className="chip-date">{date}</h4>
              <p className="chip-text">{text}</p>
              <a href={link} className="btn-get-started scrollto">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChipGallery;
