import React from "react";
import image1 from "./imgs/AnalogMultiplexer/image1.png";
import image2 from "./imgs/AnalogMultiplexer/image2.png";
import image3 from "./imgs/AnalogMultiplexer/image3.png";
import image4 from "./imgs/AnalogMultiplexer/image4.png";
import image5 from "./imgs/AnalogMultiplexer/image5.png";
import image6 from "./imgs/AnalogMultiplexer/image6.png";

function AnalogMultiplexer() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Analog Multiplexer</h1>
            <h2>Adele Thompson and David Bertuch</h2>
            <h2 className="underline">April 2nd, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hello everyone! As new members of C2S2, we were tasked with building
            an analog multiplexer using digital logic gates and MOSFETs. Since
            we are limited by the number of output pins on a chip, a MUX would
            allow us to measure more signals on the circuit.
          </p>

          <p>
            Our idea for the analog MUX is fundamentally different from a
            digital MUX. In the digital case, you would typically see the input
            signal combined with the select logic.
          </p>

          <figure>
            <img src={image1} alt="2-to-1 Digital Multiplexer" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              <a href="https://electronics.stackexchange.com/users/34156/gabrieljcs">
                2-to-1 Digital Multiplexer
              </a>
            </figcaption>
          </figure>

          <p>
            You can see that an analog signal would not be compatible with this
            design. Because of this, we decided to break our multiplexer into
            two parts: a decoder and an analog switch array.
          </p>

          <p>
            To start, we designed a decoder (Figure 2) using NAND and NOT gates.
            Each output (and its inverse) is connected to an analog switch
            (Figure 3). The decoder uses a 4-bit digital input to select one of
            the 16 possible analog switches. This selection turns on a MOSFET
            pass-gate that connects the desired signal to the analog output.
          </p>

          <figure style={{ maxWidth: "100%" }}>
            <img src={image2} alt="4-to-16 Digital Decoder" />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              4-to-16 Digital Decoder
            </figcaption>
          </figure>

          <p>
            The second part of our circuit is made up of 16 analog switches.
            These switches are MOSFET pass-gates made from complementary
            transistor pairs (Figure 3). Each analog signal enters the switch's
            source, and the switches' drains are tied together to form the MUX
            output (see Figure 4). Each switch was designed to have low
            on-resistance to ensure minimal signal loss and maximum signal
            quality. It is also essential to ensure the on-resistance is linear
            across the range of voltages we use. The MOSFET switches are
            controlled by the digital decoder and can be turned on or off
            depending on the selected input.
          </p>

          <figure>
            <img
              src={image3}
              alt="Analog switch made from a complementary MOSFET pair"
            />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              Analog switch made from a complementary MOSFET pair (VPG and VNG
              must take opposite signals)
            </figcaption>
          </figure>

          <figure style={{ maxWidth: "100%" }}>
            <img src={image4} alt="16 Analog Switches with Connected Drains" />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              16 Analog Switches (modeled as boxes) with Connected Drains
            </figcaption>
          </figure>

          <p>
            After we had completed the design and construction of the analog
            mux, we tested it using all 16 truth table values. We were pleased
            to find that it works as expected.
          </p>

          <p>
            To optimize the performance of the MUX, we went back to test the
            on-resistance of an individual switch (Figure 3). We are currently
            working on this to minimize the loss of input signals and to
            linearize the resistance. This is a matter of adjusting the MOSFET
            aspect ratios.
          </p>

          <p>
            One of the key benefits of an analog mux is that it can take in both
            analog and digital inputs, making it incredibly versatile for
            circuit design. Our project aimed to create more outputs for an
            analog circuit design, and with the successful creation of our
            analog mux, we were able to achieve just that.
          </p>

          <p>
            Overall, the project was a challenging but rewarding experience for
            us. We were able to put our skills in digital logic gates and MOSFET
            transistors to practical use and create a functional and useful
            analog mux. We are excited to continue exploring and expanding our
            knowledge and look forward to future projects and challenges.
          </p>

          <figure>
            <img
              src={image5}
              alt="Analog Mux from the Decoder and 16 signal Analog Switch"
            />
            <figcaption>
              <strong>Figure 5</strong>
              <br />
              Analog Mux from the Decoder and 16 signal Analog Switch
            </figcaption>
          </figure>

          <figure>
            <img src={image6} alt="Top-level Symbol of the Analog MUX" />
            <figcaption>
              <strong>Figure 6</strong>
              <br />
              Top-level Symbol of the Analog MUX
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default AnalogMultiplexer;
