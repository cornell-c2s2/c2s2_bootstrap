import React from "react";
import image1 from "./imgs/ElectronicDesignAutomation/image1.png";
import image2 from "./imgs/ElectronicDesignAutomation/image2.png";
import image3 from "./imgs/ElectronicDesignAutomation/image3.png";
import image4 from "./imgs/ElectronicDesignAutomation/image4.png";
import image5 from "./imgs/ElectronicDesignAutomation/image5.png";
import image6 from "./imgs/ElectronicDesignAutomation/image6.png";
import image7 from "./imgs/ElectronicDesignAutomation/image7.png";

function ElectronicDesignAutomation() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Electronic Design Automation: Creating Computers from Code</h1>
            <h2>Angela Cui and Ethan Gabizon</h2>
            <h2 className="underline">November 19th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            The process of producing an integrated circuit involves a meticulous
            process and knowledge in a variety of tasks: creating a high-level
            description, synthesizing a netlist of logic gates, performing
            physical design with placement and routing, and validating the
            design through simulation and verification at various points in this
            process. More than half a decade ago, all of these tasks would have
            to be manually carried out. Now, could you imagine performing these
            steps for today's billion transistor chips? Half a decade ago, this
            may seem like an impossible task. However, with the development of
            electronic design automation (EDA) tools, the modern electronic
            design industry is equipped with tools and methodologies that
            enhance design efficiency, reduce time and costs, and enable
            significantly more complex silicon systems. In this blog post, we
            will discuss how EDA tools impact C2S2's design process and the
            future of EDA tools in research trends.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              <strong>Zilog Z80 8-bit Microprocessor</strong>
              <br />
              Launched 1975
              <br />
              ~8500 transistors
            </figcaption>
          </figure>

          <figure>
            <img src={image2} />
            <figcaption>
              <strong>NVIDIA GH200 Grace Hopper Superchip</strong>
              <br />
              Launched 2022
              <br />
              200 billion transistors
            </figcaption>
          </figure>

          <p>
            What exactly does EDA encompass? EDA is a category of software tools
            that help us design electronic systems, ranging from
            application-specific integrated circuits (ASICs) to printed circuit
            boards (PCBs). Most members on our team work with EDA tools in one
            way or another. The PCB design software used by the System
            Architecture team, the various analog circuit simulations performed
            by the Analog team, and the automated digital design flow used by
            the Digital team are all examples of EDA tools. The algorithms that
            perform static timing analysis and routing are examples as well.
            These tools allow C2S2 to execute fast paced designs. Members are
            able to perform simulations and validate blocks early in the year
            without a significant time bottleneck, thus enabling us to design
            complex hardware in a hierarchical manner.
          </p>

          <p>
            Further, with these tools in hand, we are able to abstract away
            hardware details and design on various abstraction levels. EDA tools
            are able to take various abstractions, such as in the figure below,
            and transform them into designs in file formats that we can then
            send to a PCB manufacturer or ASIC foundry. The power of abstraction
            greatly assists C2S2 in performing undergraduate semiconductor
            design by modeling complex systems, facilitating hierarchical design
            with well-defined modules, and simplifying the complexity of the
            design process.
          </p>

          <figure>
            <img src={image3} />
            <figcaption>
              <strong>1.</strong> RTL Representation to Logic Description
            </figcaption>
          </figure>

          <figure>
            <img src={image4} />
            <figcaption>
              <strong>2.</strong> Logic Gate Symbol to Transistor Schematic
            </figcaption>
          </figure>

          <figure>
            <img src={image5} />
            <figcaption>
              <strong>3.</strong> Transistor Level Schematic to Geometrical
              Representation
            </figcaption>
          </figure>

          <p>
            In addition to its ability to streamline the design process, EDA
            tools give us the actual hardware we are designing, in terms of
            transistor models. The development of EDA tools is tightly coupled
            with the development of process nodes. The properties of a specific
            semiconductor foundry are encoded in a set of files which make up a
            process design kit (PDK). C2S2 uses the open source SkyWater SKY130
            PDK. The information stored in the PDK libraries, such as transistor
            size or timing characteristics, allow us to perform simulations and
            test our circuits to make sure they meet specifications before
            tapeout.
          </p>

          <p>
            Apart from EDA tools that are used for hardware synthesis, as
            discussed above, research trends in the field have involved the
            development of languages and compilers that can generate hardware
            descriptions. In particular, high-level synthesis (HLS) toolchains
            transform a programming language functional description into
            low-level RTL code. One of the most well-known examples of an HLS
            toolchain is Vitis HLS, which compiles C++ programs to Verilog.
            While use of Vitis HLS is quite widespread in academia and industry,
            the last several years have also seen the emergence of more research
            projects that seek to answer the question of how we can leverage
            programming abstractions to make hardware design easier and more
            efficient. Google's open-source XLS toolchain is one such example,
            and is particularly exciting given its potential for use on C2S2.
          </p>

          <figure>
            <img src={image6} />
            <figcaption>XLS Stack Diagram</figcaption>
          </figure>

          <p>
            The goal of XLS is to provide software and hardware engineers with
            the tools they need to develop specialized hardware. XLS has two
            frontends, C++ and a novel language called DSLX, which was developed
            specifically for use in XLS. Given a program in C++ or DSLX, the XLS
            compiler builds an intermediate representation (IR). Many HLS
            toolchains use an intermediate representation that is based on a
            control-flow graph, which is a representation common in typical
            software compilers because it models the sequential execution of a
            program. However, this model is limited in its ability to represent
            hardware designs, in which many computations can occur in parallel.
            For this reason, the XLS compiler opts instead to use an IR that is
            closer to a 'sea of nodes' model, which has less of a rigid
            hierarchical structure than a control-flow graph.
          </p>

          <div className="row" style={{ marginBottom: "1rem" }}>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-block align-items-center">
              <div
                style={{
                  border: "2px solid #b31b1b",
                  borderRadius: "1rem",
                  margin: "0.2rem",
                }}
              >
                <h3>
                  <u>Unoptimized Code</u>
                </h3>
                <span
                  className="code"
                  style={{ display: "inline-block", textAlign: "left" }}
                >
                  int x = 14; <br />
                  int y = 7 - x / 2; <br />
                  return y * (28 / x + 2); <br />
                </span>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-block align-items-center">
              <div
                style={{
                  border: "2px solid #b31b1b",
                  borderRadius: "1rem",
                  margin: "0.2rem",
                }}
              >
                <h3>
                  <u>Optimized code after Constant Propagation</u>
                </h3>
                <span
                  className="code"
                  style={{ display: "inline-block", textAlign: "left" }}
                >
                  int x = 14; <br />
                  int y = 0; <br />
                  return 0; <br />
                </span>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-block align-items-center">
              <div
                style={{
                  border: "2px solid #b31b1b",
                  borderRadius: "1rem",
                  margin: "0.2rem",
                }}
              >
                <h3>
                  <u>
                    Optimized code after Constant Propagation and Dead Code
                    Elimination
                  </u>
                </h3>
                <span
                  className="code"
                  style={{ display: "inline-block", textAlign: "left" }}
                >
                  return 0; <br />
                </span>
              </div>
            </div>
          </div>

          <p>
            With the IR built, the XLS compiler performs a series of
            optimizations on it, many of which are typical compiler passes and
            some of which are specific to compilers that generate hardware
            descriptions. For example, the compiler performs dead code
            elimination, which removes unreachable nodes from the IR. Another
            common pass that the XLS compiler implements is constant folding,
            which has the potential to eliminate computational complexity from
            the IR. For example, if an arithmetic expression has only constants
            as inputs, the compiler is able to compute its value at compile
            time, rather than runtime (in this case, the "runtime" is the
            execution of the hardware). From here, the compiler performs many
            application-specific optimizations, which are targeted at generating
            the most efficient hardware descriptions possible. There are quite a
            lot of them, and they are detailed
            <a href="https://google.github.io/xls/optimizations/optimizations/#narrowing-optimizations">
              here
            </a>
            .
          </p>

          <p>
            A key part of the XLS toolchain is its ability to create schedules
            for the hardware it generates. When we design hardware, we often
            want to pipeline our designs. The XLS toolchain allows programmers
            to simply write a high-level description of a program, in which all
            notions of its underlying hardware or timing behavior are abstracted
            away. Then, the XLS compiler generates and pipelines the design
            using scheduling algorithms. The goal of this phase of the compiler
            is to determine the clock period of the design, and then find a
            schedule that minimizes resource usage while still meeting timing.
          </p>

          <figure>
            <img src={image7} />
            <figcaption>
              Example of a two-cycle multiply and single-cycle add before and
              after pipeline split
            </figcaption>
          </figure>

          <p>
            On C2S2, we have been experimenting with using XLS to generate some
            of our hardware blocks. For example, XLS has a parameterized
            floating point library implemented in DSLX, which can be used for
            our own modules that require floating point math. Using XLS for
            cases such as this would enable us to build more interesting and
            complex blocks without getting stuck in the low-level details of
            implementing a floating point library ourselves by hand.
            Additionally, using XLS would allow us to parameterize our designs
            over pipeline depth, so that we can have multiple blocks which
            compute the same operations but have different timing behavior,
            based on the specific use case of what we may want on the chip.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ElectronicDesignAutomation;
