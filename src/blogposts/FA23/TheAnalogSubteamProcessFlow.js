import React from "react";
import image1 from "./imgs/TheAnalogSubteamProcessFlow/image1.png";
import image2 from "./imgs/TheAnalogSubteamProcessFlow/image2.png";
import image3 from "./imgs/TheAnalogSubteamProcessFlow/image3.png";
import image4 from "./imgs/TheAnalogSubteamProcessFlow/image4.png";
import image5 from "./imgs/TheAnalogSubteamProcessFlow/image5.png";
import image6 from "./imgs/TheAnalogSubteamProcessFlow/image6.png";
import image7 from "./imgs/TheAnalogSubteamProcessFlow/image7.png";
import image8 from "./imgs/TheAnalogSubteamProcessFlow/image8.png";
import image9 from "./imgs/TheAnalogSubteamProcessFlow/image9.png";

function TheAnalogSubteamProcessFlow() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>The Analog Subteam Process Flow</h1>
            <h2>Thomas Figura and David Bertuch</h2>
            <h2 className="underline">October 15th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            To properly tape out an analog integrated circuit, one needs to know
            how to make their way through the analog tape out flow, so we want
            to share the processes that we used in last year's tape out.
          </p>

          <p>
            For this blog post, we will go through the process flow of a simple
            inverter circuit in the SKY130 PDK through the use of
            XSCHEM/NGSpice, Magic VLSI, and Netgen. We use XSCHEM for the
            schematic capture and SPICE testing, Magic VLSI for laying out the
            schematic into metal, and Netgen to check whether the schematic
            netlist from XSCHEM matches the netlist from Magic.
          </p>

          <figure>
            <img src={image1} alt="The Analog Subteam's Process Flow" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              The Analog Subteam's Process Flow
            </figcaption>
          </figure>

          <p>To begin, we start with creating the circuit through XSCHEM.</p>

          <figure>
            <img src={image2} alt="Schematic of the Inverter" />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Schematic of the Inverter
            </figcaption>
          </figure>

          <p>
            After finalizing our schematic, we move on to testing with Ngspice,
            integrated into XSCHEM. We start by importing models from the SKY130
            PDK to inform Ngspice about how our components should behave.
            Following this, we conduct specific tests to check the performance
            of our circuit. The choice of tests depends on the type of circuit
            we're working with. Typically, we perform transient analysis to
            observe how our design behaves over time. Subsequently, we proceed
            to frequency testing to assess the operational limits of our
            circuit. Ngspice provides a graphing tool to help us understand the
            circuit's response.
          </p>

          <p>Below are some simulations:</p>

          <figure>
            <img src={image3} alt="DC Voltage Stepping" />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              DC Voltage Stepping
            </figcaption>
          </figure>

          <figure>
            <img src={image4} alt="Transient of a Square Wave Input" />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              Transient of a Square Wave Input
            </figcaption>
          </figure>

          <p>
            Once our tests confirm the expected behavior, we transition to the
            layout phase.
          </p>

          <p>
            Unlike digital design, analog circuits have to be laid out manually.
            This involves arranging our components and routing them with the
            materials available on the chip. The tool we use is called Magic
            VLSI. Before getting started, we must import the caravel magic files
            from Efabless. This will give us the chip's footprint so that we
            know where all the IO pads are. We can then import the devices used
            in our schematic into Magic and begin arranging them.
          </p>

          <figure>
            <img src={image5} alt="Layout of the Inverter in Magic" />
            <figcaption>
              <strong>Figure 5</strong>
              <br />
              Layout of the Inverter in Magic
            </figcaption>
          </figure>

          <p>
            As we paint on the materials, we closely monitor that our layout is
            within the design requirements of SKY130. Some materials need
            sufficient spacing or have a minimum size requirement.
          </p>

          <p>
            If our chip layout looks good and meets all the design
            specifications, we have to ensure that everything is connected
            properly.
          </p>

          <p>
            To confirm the consistency between our Magic layout and the
            schematic designed in XSCHEM, we utilize Netgen software. This tool
            thoroughly examines the connections and devices within our Magic
            layout, comparing them with the schematic connections. This
            verification process is known as LVS, short for
            layout-versus-schematic. To get this to work, we have to export a
            complete description of the connections from both designs to a
            netlist. Netgen will process these netlists and give a rundown of
            how the circuits compare.
          </p>

          <figure>
            <img src={image6} alt="Netgen Output of LVS Test" />
            <figcaption>
              <strong>Figure 6</strong>
              <br />
              Netgen Output of LVS Test
            </figcaption>
          </figure>

          <p>
            If everything matches up, we can move on to the final step,
            simulating the extracted layout.
          </p>

          <p>
            Unfortunately, the materials used in a chip are not ideal: they have
            some capacitance and resistivity, which we call "parasitics".
            However, we can model these approximate parasitic values from our
            Magic layout in a process called extraction. Instead of having
            idealized connections, the extracted netlist will have connections
            modeled by resistor and capacitor components. We can run the same
            simulations as before, but now with something that models how our
            design would act on a chip.
          </p>

          <figure>
            <img src={image7} alt="Extracted Circuit in XSCHEM" />
            <figcaption>
              <strong>Figure 7</strong>
              <br />
              Extracted Circuit in XSCHEM
            </figcaption>
          </figure>

          <figure>
            <img src={image8} alt="Extracted DC Sweep" />
            <figcaption>
              <strong>Figure 8</strong>
              <br />
              Extracted DC Sweep
            </figcaption>
          </figure>

          <figure>
            <img src={image9} alt="Extracted Transient" />
            <figcaption>
              <strong>Figure 9</strong>
              <br />
              Extracted Transient
            </figcaption>
          </figure>

          <p>
            Seeing that our post-extraction simulations run as expected, we have
            completed the process flow!
          </p>

          <p>
            Going from an idea to a chip can seem like an intimidating process,
            especially in the world of analog design. But, by writing this blog
            post, we hope we have broken down the process flow into small steps
            that are easier to follow and understand.
          </p>
        </div>
      </section>
    </main>
  );
}

export default TheAnalogSubteamProcessFlow;
