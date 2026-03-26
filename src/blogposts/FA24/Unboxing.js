import React from "react";
import image1 from "./imgs/unboxing/image1.png";
import image2 from "./imgs/unboxing/image2.png";
import image3 from "./imgs/unboxing/image3.png";
import image4 from "./imgs/unboxing/image4.jpg";
import image5 from "./imgs/unboxing/image5.jpg";
import image6 from "./imgs/unboxing/image6.png";
import image7 from "./imgs/unboxing/image7.png";

function Unboxing() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Unboxing C2S2's 2024 Spring Tape Outs!</h1>
            <h2>Jason Wang</h2>
            <h2 className="underline">Dec 8, 2024</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            C2S2 is a Cornell Engineering Project Team focused on advancing
            undergraduate custom semiconductor design. Collaborating with the
            Lab of Ornithology and contributing to the open-source silicon
            ecosystem, we utilize Efabless and Sky130 for digital, analog, and
            mixed-signal chip development. Over the past two years, we have
            designed and taped out chips twice annually. Recently, we received
            our Spring 2024 Digital and Spring 2024 Analog tape-outs. While the
            team finalizes the chip names, let's explore their designs, physical
            tape-outs, and ongoing testing!
          </p>

          <h2>The Digital Chip - Design</h2>

          <p>
            The Spring 2024 tape-out is a modular digital chip packed with
            features for flexible signal processing. It includes a 16-bit
            fixed-point 32-point FFT module to analyze signals in the frequency
            domain and a configurable classifier to filter and classify audio
            signals based on frequency, amplitude, and sampling rate. The design
            incorporates three dynamic crossbars that enable flexible data
            routing between modules or external interfaces, such as SPI,
            Wishbone, and GPIOs. Messages sent to the chip are 20 bits wide,
            with the top 4 bits used for addressing and the bottom 16 for data
            or configuration. A modified SPI testing framework streamlines the
            testing process by automating data flow simulations and validating
            the chip's functionality, making it adaptable to diverse signal
            processing and system integration tasks.
          </p>

          <figure>
            <img
              src={image1}
              alt="Block Diagram of the Spring 2024 Digital Chip"
            />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              The Block Diagram of the Spring 2024 Digital Chip
            </figcaption>
          </figure>

          <h2>The Analog Chip - Design</h2>

          <p>
            The Spring 2024 Analog Chip is designed to bridge continuous analog
            signals with digital systems using two specialized Analog-to-Digital
            Converters (ADCs). The Delta-Sigma Modulator prioritizes high
            resolution and noise-shaping capabilities, making it ideal for
            precise, low-frequency signal processing, such as audio and
            environmental data. The Flash ADC, on the other hand, excels in
            rapid signal conversion, enabling high-speed applications like
            real-time monitoring. Together, these ADCs provide a versatile
            platform capable of handling both accuracy-demanding and
            high-throughput scenarios.
          </p>

          <figure>
            <img
              src={image2}
              alt="Rendering Photos of the Spring 2024 Analog Chip"
            />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Rendering Photos of the Spring 2024 Analog Chip
            </figcaption>
          </figure>

          <h2>Tape-out</h2>

          <p>
            A tape-out is the final stage of chip design where the completed
            schematics are sent for fabrication, producing physical silicon
            chips. In the box, we received both bare dies, raw silicon chips,
            and packaged versions, where the dies are encased for protection and
            connectivity. These tapeouts mark the transition from design to
            hardware, paving the way for real-world testing.
          </p>

          <figure>
            <img src={image3} alt="Unboxing the Efabless package" />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              Unboxing the Efabless package - Bare Dies, Prototyping Module, and
              the Test Board
            </figcaption>
          </figure>

          <h2>Digital and Analog Chips Testing</h2>

          <p>
            Both the Digital and Analog chips are undergoing rigorous testing to
            validate their performance and functionality. For the Digital Chip,
            automated pytest scripts have verified the interconnect
            functionality and data routing, confirming that paths such as
            classifier input/output and loopback configurations are operating as
            designed. All tests have been successfully passed, demonstrating
            that the chip is fully functional and ready for integration into
            further systems.
          </p>

          <figure>
            <img src={image4} alt="Digital Chip Testing Setup" />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              Digital Chip Testing Setup
            </figcaption>
          </figure>

          <figure>
            <img src={image5} alt="Digital Chip Tests Ongoing" />
            <figcaption>
              <strong>Figure 5</strong>
              <br />
              Digital Chip Tests Ongoing and Running at the ELL C2 Computer
            </figcaption>
          </figure>

          <p>
            For the Analog Chip, testing emphasizes the performance of the ADCs
            in real-world conditions, which have manufacturing imperfections and
            variations. Signal plots and oscilloscope traces reveal detailed
            behavior, providing insight into the Delta-Sigma Modulator and Flash
            ADC performance. The oscilloscope trace represents the output of the
            Flash ADC, and the sliding window plot allows the analog team to
            estimate the Delta Sigma ADC performance.
          </p>

          <figure>
            <img src={image6} alt="Delta Sigma Modulator Testing" />
            <figcaption>
              <strong>Figure 6</strong>
              <br />
              Delta Sigma Modulator Tested and Worked in Preliminary Testing
            </figcaption>
          </figure>

          <figure>
            <img src={image7} alt="Flash ADC Testing" />
            <figcaption>
              <strong>Figure 7</strong>
              <br />
              Flash ADC Tested and Worked in Preliminary Testing
            </figcaption>
          </figure>

          <p>
            Both chips leverage a shared modular testing setup, where packaged
            devices are mounted on white Efabless PCBs connected to black
            testing PCBs. This framework supplies power, clock signals, and SPI
            interfaces, enabling seamless integration of digital and analog
            signals for comprehensive validation. With ongoing tests, the team
            is gaining valuable insights to refine these designs further-stay
            tuned for more updates as our work continues!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Unboxing;
