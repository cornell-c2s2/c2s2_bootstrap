import React from "react";
import eagle from "../assets/img/chips/c2s2-2023-digital.jpg";
import puffin from "../assets/img/chips/eagle_digital_24.jpg";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";
import kiwi from "../assets/img/chips/c2s2-2024-analog.jpg";
import kestrel from "../assets/img/chips/c2s2-2025-analog.png";
import goose from "../assets/img/chips/c2s2-2025-digital.png";
import rfic25 from "../assets/img/chips/c2s2-2025-rfic.png";
import kakapo from "../assets/img/chips/c2s2-2026-analog.png";
import digital26 from "../assets/img/chips/c2s2-2026-digital.png";
import rfic26 from "../assets/img/chips/c2s2-2026-rfic.png";

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
            img={digital26}
            name="Digital SoC"
            date="Spring 2026"
            text="RISC-V 32IM CPU + on-chip SRAM + systolic array. Details coming soon!"
            link="/chip-gallery/digital-2026"
          />
          <ChipComponent
            img={rfic26}
            name="2.4 GHz OOK Transceiver"
            date="Spring 2026"
            text="Details coming soon!"
            link="/chip-gallery/rfic-2026"
          />
          <ChipComponent
            img={kakapo}
            name="Kakapo Analog Chip"
            date="Spring 2026"
            text="Asynchronous SAR ADC, Adiabatic comparator and flash ADC. Details coming soon!"
            link="/chip-gallery/kakapo"
          />
          <ChipComponent
            img={goose}
            name="Goose Digital Chip"
            date="Spring 2025"
            text="FFT Accelerator and Sound classifier. Details coming soon!"
            link="/chip-gallery/goose"
          />
          <ChipComponent
            img={rfic25}
            name="915 MHz OOK Transceiver"
            date="Spring 2025"
            text="First RFIC Chip. Details coming soon!"
            link="/chip-gallery/rfic-2025"
          />
          <ChipComponent
            img={kestrel}
            name="Kestrel Analog Chip"
            date="Spring 2025"
            text="Mixed signal synchronous SAR ADC. Details coming soon!"
            link="/chip-gallery/analog-2025"
          />
          <ChipComponent
            img={puffin}
            name="Puffin Digital Chip"
            date="Spring 2024"
            text="The Spring 24 tapeout builds on top of the Spring 23 tapeout. This is our final iteration of the sound classifier, featuring a 16-bit fixed point (8 integer bits) 32-point Cooley Tukey FFT module, as well as a configurable classifier. Puffin bridges the RISC-V core and the digital classifier via a Wishbone Bus, yielding a more integrated SoC."
            link="/chip-gallery/puffin"
          />
          <ChipComponent
            img={kiwi}
            name="Kiwi Analog Chip"
            date="Spring 2024"
            text="Details coming soon!"
            link="/chip-gallery/kiwi"
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
            <img loading="lazy" decoding="async" src={img} className="chip-image" alt={name} />
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
