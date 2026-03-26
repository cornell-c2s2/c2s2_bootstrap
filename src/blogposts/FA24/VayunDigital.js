import React from "react";
import image1 from "./imgs/VayunDigital/image1.png";

function VayunDigital() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Digital Design Subteam Advances</h1>
            <h2>Vayun Tiwari</h2>
            <h2 className="underline">Dec 20, 2024</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Since the digital subteam has had experience taping out a few chips
            over the past few semesters, they are focused on creating a solid
            foundation for long term advancements for future designs by
            strengthening their verification infrastructure, and developing a
            more diverse block library.
          </p>
          <h3>Improved Verification Infrastructure</h3>

          <p>
            Verification is crucial to ensure a chip works as intended before
            fabrication. The team has embraced Cocotb, a Python-based framework
            that simplifies testing compared to traditional Verilog testbenches.
            Cocotb allows for flexible, high-level test creation, with features
            like randomized input generation and easy integration with Python
            libraries for coverage and debugging. It also abstracts simulator
            differences, making the process more streamlined and robust.
          </p>

          <p>
            For even deeper validation, the team has adopted formal verification
            using Cadence Jasper. Unlike simulation, which checks specific test
            cases, formal verification exhaustively analyzes all possible states
            and transitions in a design. For example, the team verified state
            machine correctness and ensured registers store expected values
            across every conceivable input. This guarantees the design behaves
            reliably under all conditions, beyond just the ones tested in
            simulation.
          </p>

          <p>
            Additionally, FPGA emulation has enabled the team to rehearse
            testing on hardware before tapeout. By running designs on an FPGA,
            they can catch integration issues, like timing errors that might not
            appear in simulation. This approach also allows early demos,
            boosting confidence in the design.
          </p>

          <h3>Developing a Diverse Block Library</h3>

          <p>
            To support more sophisticated designs, the team has been creating
            reusable digital blocks that enhance both performance and
            flexibility. Developing a diverse block library vastly eases design
            time and allows for more modularity.
          </p>

          <p>
            LBIST (Logic Built-In Self-Test): By embedding self-test features
            into chips, LBIST allows internal logic validation without external
            equipment. It uses components like LFSRs (to generate test patterns)
            and MISRs (to compress outputs into a signature). This capability is
            critical for post-silicon debugging.
          </p>

          <p>
            Wallace Tree Multiplier: Multiplication is a fundamental operation
            in many applications, from DSP to cryptography. The Wallace Tree
            design optimizes for speed, reducing partial products in parallel
            using full and half adders. Compared to iterative multipliers, it's
            fully combinational, making it much faster-ideal for applications
            where latency is critical, though it comes at a higher area cost.
          </p>

          <p>
            Convolution Block: Convolution is essential in digital signal
            processing (e.g., filtering or feature extraction). The team
            implemented both a combinational and iterative version. The
            combinational design offers high throughput, making it ideal for
            fixed-use scenarios like accelerators. The iterative version trades
            speed for flexibility, using less hardware but allowing parameter
            adjustments, making it suitable for general-purpose tasks. Together,
            these designs broaden the applications the subteam can target for
            future designs.
          </p>

          <p>
            The digital subteam's work this semester exemplifies the importance
            of innovation and adaptability in chip design. As our current campus
            partner, Christopher Tarango, approaches the completion of his PhD,
            we are exploring opportunities to collaborate with new campus
            partners and address fresh challenges. By bolstering verification
            with advanced methodologies like formal verification, and
            diversifying their RTL stack, the digital subteam is preparing for
            more ambitious tapeouts and redefining what is possible for
            undergraduates in chip design.
          </p>

          <figure>
            <img src={image1} alt="4 Layer Wallace Tree Multiplier" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />4 Layer Wallace Tree Multiplier. Using 15 half adders (two
              dots) and 38 full adders (three dots).
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default VayunDigital;
