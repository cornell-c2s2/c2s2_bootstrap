import React from "react";
import image1 from "./imgs/ABlinkIntoSiliconsPotential/image1.png";
import image2 from "./imgs/ABlinkIntoSiliconsPotential/image2.png";
function ABlinkIntoSiliconsPotential() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>A Blink Into Silicon's Potential</h1>
            <h2>Ananya Goenka, Elias Castro</h2>
            <h2 className="underline">October 22nd, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            In the realm of electronics, there's something profoundly satisfying
            about witnessing the fruits of your labor come to life. The first
            thing the software team did when we got access to our custom silicon
            was perform a simple yet vital task: blinking.
          </p>

          <p>
            Our first endeavor was to get the onboard LED to blink at varying
            frequencies. This primary step, though simple, was crucial in
            understanding the interaction between our code and the hardware. By
            tweaking the delay parameters in our code, we were able to control
            the blink rate of the LED, creating a visual rhythm that danced to
            the beat of our silicon conductor.
          </p>

          <p>
            With the onboard LED successfully blinking to our tune, we
            transitioned to a more colorful and complex setup utilizing external
            LEDs. Our aim was to orchestrate a "light show" by controlling the
            blink rate and intensity of these LEDs. We began by setting up the
            connections on a breadboard using wires. To give context, the
            diagram below shows what a breadboard looks like and outlines it's
            main features.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>Breadboard Outline</figcaption>
          </figure>

          <p>
            A breadboard is useful for making temporary circuits and
            prototyping. One of the most versatile things about them is that
            they require absolutely no soldering! Let's start to break this
            diagram down by first starting at the terminal strips.
          </p>

          <p>
            The terminal strip on a breadboard is made up of small holes that
            allow us to insert and connect electronic components like LEDs and
            resistors. Terminal strips are isolated from each other, meaning
            that each row is electrically independent of the others. This
            isolation prevents unintended short circuits and allows us to create
            complex, compact circuits designs and prototypes.
          </p>

          <p>
            The power rails serve the crucial function of distributing
            electrical power to various parts of our circuit. There are usually
            two power rails on a breadboard, with one on each side of the
            breadboard. Each side has a red rail and a blue rail. The red rail
            is typically used to distribute positive voltage to the circuit
            while the blue rail is used to distribute the ground reference (0V)
            to the circuit. Just like the rest of the breadboard, the power
            rails are electrically isolated from each other! This ensures that
            any components or circuits connected to the power rail on one side
            of the board will not interfere with components connected to the
            power rail on the other side.
          </p>

          <p>
            Finally, the divider separates the breadboard into two distinct
            sections. This, again, provides electrical isolation between the two
            halves and allows for multiple experiments to be carried out on the
            board! We connect our external LEDs to a power rail on the
            breadboard.
          </p>

          <p>
            Once the physical connections were secure, it was time to delve into
            the digital realm. Our board is filled with General Purpose
            Input/Output (GPIO) pins.
          </p>

          <figure>
            <img src={image2} />
            <figcaption>Caravel GPIO Channel Structure</figcaption>
          </figure>

          <p>
            This is a structure of a GPIO pin. GPIO's are known for their
            versatility as they can be configured as an input or an output. When
            configured as an input, the GPIO can read the state of an external
            digital signal. When configured as an output, a GPIO pin can drive a
            digital signal to control external components, like our LEDs!
          </p>

          <p>
            We set the correct GPIOs using hexadecimal notation, a method that
            allows for precise control over the binary configurations of the
            GPIO pins. With the GPIOs correctly configured, we then toyed with
            loops to vary the frequencies of blinking.
          </p>

          <p>
            Now it was time to play around. The experimentation phase was filled
            with trials, errors, and a lot of learning. Each iteration brought
            us closer to perfecting our light show, and with every successful
            blink, our excitement only grew.
          </p>

          <p>
            Looking ahead, while the software team is gearing up to build our
            very own bare-metal software stack and harness the various sensors
            on the board, we are also brewing plans for a fun side project. Our
            vision is to design and build a luminous C2S2 sign. So, the next
            time you find yourself in the ELL, keep an eye out for our glowing
            C2S2 sign!
          </p>
        </div>
      </section>
    </main>
  );
}

export default ABlinkIntoSiliconsPotential;
