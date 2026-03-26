import React from "react";
import kiwi from "../assets/img/chips/c2s2-2024-analog.jpg";
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
            text=""
            link="chip-gallery/puffin"
          />
          <ChipComponent
            img={kiwi}
            name="Kiwi Analog Chip"
            date="Spring 2024"
            text=""
            link="chip-gallery/kiwi"
          />
          <ChipComponent
            img={eagle}
            name="Eagle Digital Chip"
            date="Spring 2023"
            text="The 2023 C2S2 Digital Tapeout showcases a design centered around a RISC-V Litex System on Chip. This chip features a custom digital Cooley-Tukey Fast Fourier Transform (FFT) implementation, optimized for high-speed signal processing tasks. The RISC-V architecture provides a flexible and scalable processing platform, enabling efficient execution of complex algorithms and data manipulation"
            link="chip-gallery/eagle"
          />
          <ChipComponent
            img={sparrow}
            name="Sparrow Analog Chip"
            date="Spring 2023"
            text="The 2023 C2S2 Analog Tapeout features an innovative hardware design centered around a RISC-V Litex System on Chip (SoC). This versatile chip incorporates multiple analog components to enhance its functionality: operational amplifiers — integrated to provide versatile analog signal processing capabilities, 'fingers' implementation — allows for efficient interfacing and control in various analog scenarios, and 'multiplier' implementation — facilitates analog multiplication processes for applications requiring signal modulation and other complex mathematical operations."
            link="chip-gallery/sparrow"
          />
          {/* <ChipComponent
            img={dove}
            name="Dove ECE 5745"
            date="Spring 2022"
            text="This test chip, developed by the ECE 5745 class, is designed to explore the capabilities of Caravel and OpenLane. At its core, the chip features a RISC-V Litex SoC architecture, enabling flexible and efficient processing. It integrates four specialized hardware accelerators to enhance performance in various applications: Group 15: Wavelet Compression Accelerator, Group 16: SpMV Accelerator, Group 17: BNN Accelerator, Group 99: GCD Accelerator"
            link="chip-gallery/dove"
          />
          <ChipComponent
            img={cnf}
            name="CNF Chip Art"
            date="Spring 2022"
            text="Using CNF's optical microscopy, we can see a sailing ship design, that was added by our manufacturer Efabless, embedded in the metal layers of our digital chip, Eagle. Located among the standard cells and metal fill patterns, this microscopic artwork demonstrates how artistic elements can be integrated into functional IC layouts."
            link="chip-gallery/cnf"
          /> */}
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
