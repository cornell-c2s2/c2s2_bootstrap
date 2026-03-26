import React from "react";
import image1 from "./imgs/ProgressReportMarch2023/image1.png";
import image2 from "./imgs/ProgressReportMarch2023/image2.png";
import image3 from "./imgs/ProgressReportMarch2023/image3.png";

function ProgressReportMarch2023() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Progress Report - March 2023</h1>
            <h2>Dylan Tom and Edmund Lam</h2>
            <h2 className="underline">March 19th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hi! I'm Edmund, a member of the Digital Subteam, and a sophomore
            studying CS and Math. I created the fixed point multiplier, complex
            multiplier, and butterfly modules for the FFT. I joined the subteam
            as someone with no ECE whatsoever, other than some prior knowledge
            and interest in assembly. Today I will be going over how the code I
            wrote has changed as I have learned more about Verilog and RTL
            design, and how the blocks I designed have changed over time.
          </p>

          <p>
            Because I taught myself Verilog and the ASIC flow through working in
            C2S2, my initial work was heavily influenced by my experience in
            computer science, as I treated Verilog very similarly to normal
            programming languages. For example, in the figure shown below, I
            initially built the fixed point iterative multiplier using a very
            linear approach, where the fpmulit_inner module pretty much
            represented the inside of a for loop which would update the
            multiplier state each iteration. The control logic was all
            non-resettable and not fully enumerated, leading not only to
            inferred latches further down the line, but also making the logic
            hard to understand, resulting in an incorrect Val/Rdy interface.
            Much of this was because I was not used to thinking of control flow
            in terms of connecting actual blocks such as muxes and registers,
            which also resulted in most of my blocks being non-fully-resettable,
            a problem which was bound to show itself in four state simulation.
          </p>

          <figure>
            <img
              src={image1}
              alt="Early Functioning Iteration of the Fixed Point Iterative Multiplier"
            />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Early Functioning Iteration of the Fixed Point Iterative
              Multiplier
            </figcaption>
          </figure>

          <p>
            This semester, after running into many of the issues I had described
            above, I decided to completely rewrite many of my older blocks,
            using a Finite State Machine for the control logic, and connecting
            the datapath properly to resettable registers and muxes. This makes
            the reset logic clear and simple, solves the inferred latches
            issues, and also makes sure the Val/Rdy logic is explicit and
            correct. However, it requires a very different approach to
            programming than before, as rather than viewing it as I would
            approach a computer program, I was looking at it much more like an
            actual circuit layout with all the blocks doing different
            operations.
          </p>

          <figure>
            <img
              src={image2}
              alt="New Iteration of the Fixed Point Iterative Multiplier"
            />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              New Iteration of the Fixed Point Iterative Multiplier
            </figcaption>
          </figure>

          <p>
            Both iterations have similar characterization statistics (area,
            power, timing) but the advantage of having a well-designed module is
            that understanding the code and making revisions or debugging
            becomes much easier. I did the same changes to the complex
            multiplier and butterfly blocks I have made, which I have also
            further optimized to save area for the FFT.
          </p>

          <p>
            My name is Dylan and I am a sophomore in CS and Math as well! I
            joined C2S2 as a member of the digital design team in Spring 2023.
            As a new member to the team, I want to take this opportunity to
            explain the onboarding process for C2S2 and what I have been doing
            so far. Previously I took ECE 2300: Digital Logic and Computer
            Organization, so I was familiar with the RTL blocks and implementing
            simple logic in Verilog. However, a major component of digital ASIC
            design is being able to push our designs through a flow that can be
            simulated as if it were going to be on a chip.
          </p>

          <p>
            My first few weeks on C2S2 were filled with a lot of onboarding,
            long installations, and very niche bugs. That being said, I
            thoroughly enjoyed the opportunity to apply what I learned in class
            to a project not many undergraduates are able to work on outside of
            Cornell. Initially, I was focused on completing various onboarding
            tutorials to familiarize myself with SystemVerilog, PyMTL testing,
            and hardening a design using OpenLANE.
          </p>

          <figure>
            <img
              src={image3}
              alt="C2S2 Tutorial - Implementing a Simple Register Counter"
            />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              C2S2 Tutorial - Implementing a Simple Register Counter
            </figcaption>
          </figure>

          <p>
            A lot of open source tools are rapidly evolving and I experienced
            this while trying to run the OpenLANE flow. We were using a tutorial
            written in December 2022, just a few months ago! It wasn't wrong,
            but a lot of the permissions did not allow us to work with the
            necessary files. We contacted Aidan to help us resolve this issue by
            making sure that we are not overwriting the global installation of
            OpenLANE. Thankfully, this was a quick issue to resolve but it
            becomes apparent how complex and dynamic open source tools are.
          </p>

          <p>
            I am currently working with Christopher on high level synthesis,
            with the goal of automating our flows. The existing architecture
            requires us to change directories and manually adjust files, which
            will become a lot more complicated as we scale up. Our solution is
            to abstract the RTL design process using XLS, Google's open source
            HLS toolkit and Bazel, a tool to build our projects. I am really
            excited to see what I can accomplish this semester with this
            project. In other news, we are going to a research facility to see
            how chips are manufactured. I'm excited I get this opportunity from
            joining C2S2 as it allows us to achieve and experience open source
            chip designs as undergraduates.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProgressReportMarch2023;
