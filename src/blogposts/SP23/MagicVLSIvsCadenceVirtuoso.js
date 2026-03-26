import React from "react";
import image1 from "./imgs/MagicVLSIvsCadenceVirtuoso/image1.png";
import image2 from "./imgs/MagicVLSIvsCadenceVirtuoso/image2.png";
import image3 from "./imgs/MagicVLSIvsCadenceVirtuoso/image3.png";
import image4 from "./imgs/MagicVLSIvsCadenceVirtuoso/image4.png";
import image5 from "./imgs/MagicVLSIvsCadenceVirtuoso/image5.png";

function MagicVLSIvsCadenceVirtuoso() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Magic VLSI vs. Cadence Virtuoso</h1>
            <h2>Thomas Figura and Aidan McNay</h2>
            <h2 className="underline">April 30th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            One of the consistent worries and reservations surrounding
            open-source tools is whether there is a drop in quality in
            comparison to commercially available alternatives. Surely a
            community-developed tool couldn't compare to one developed
            professionally? In this post, we wanted to look into two
            alternatives for VLSI layout; Magic (an open-source tool) and
            Cadence Virtuoso (a commercial tool). Looking into this, we
            specifically wanted to explore the process of designing a NAND gate
            as a benchmark.
          </p>

          <figure>
            <img
              src={image1}
              alt="Schematic of a NAND gate in Cadence Virtuoso"
            />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Schematic of a NAND gate in Cadence Virtuoso
            </figcaption>
          </figure>

          <p>
            When designing a NAND gate in Cadence, we first begin with defining
            our schematic. You can see above that we've made this with two
            parallel pMOS devices in the pull-up network (PUN) and two series
            nMOS devices in the pull-down network (PDN) in order to correctly
            implement a NAND gate. From here, we can natively use the schematic
            to create our layout, avoiding any possible errors in conversion.
            Cadence Virtuoso has many tools for interacting with the layout
            area, allowing the user to intuitively move, stretch, and design
            with different layers. Lower-level devices are automatically
            grouped, so that they can be moved as one unit. This allows us to
            make the finalized layout that can be seen on the left. The large
            teal box represents our "bounding box", to represent how much area
            our device could be expected to take up on a chip (noting that power
            and ground can be shared). We have our 4 devices as well; two nMOS
            on the top, and two pMOS on the bottom. Cadence intuitively noticed
            that we could share diffusion with these devices, so when dragging
            them close, they were automatically merged into one. (Note that we
            are currently missing connections, or "taps", to our substrate and
            well, as this gate was designed to be used as part of a larger
            circuit).
          </p>

          <figure>
            <img src={image2} alt="Layout of a NAND gate in Cadence Virtuoso" />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Layout of a NAND gate in Cadence Virtuoso
            </figcaption>
          </figure>

          <p>
            Finally, we can additionally conduct our DRC (Design Rule Check) and
            LVS (Layout vs. Schematic) checks, to verify that our design can be
            fabricated, and is an accurate representation of our schematic,
            respectively. DRC checks are usually straightforward, and are
            included as part of the PDK. However, since Cadence is entirely
            self-integrated, LVS can be easily done with a few button-presses in
            their menu to compare our schematic and layout views of our
            circuits. Finally, Cadence allows us to easily extract the circuit
            to test with parasitics.
          </p>

          <p>
            To design the same NAND gate in MAGIC, many more steps and software
            are required. Whereas in Cadence, all the tools are integrated into
            one overall package, the tools needed to create the schematic,
            layout, and then LVS check the schematic and to the layout are all
            separated in their own software, Xschem, Magic VSLI, and Netgen.
          </p>

          <p>
            To first construct the NAND gate we first open up the schematic
            capture Xschem and create the NAND with the parallel pmos pullup
            network and the series nmos pull down structure.
          </p>

          <figure>
            <img src={image3} alt="Schematic of a NAND gate in Magic VLSI" />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              Schematic of a NAND gate in Magic VLSI
            </figcaption>
          </figure>

          <p>
            From this schematic of the NAND, we can now progress into Magic and
            start the layout. To start the layout we can do one of two things:
            you can import the spice netlist of the schematic into Magic to
            generate all the device instances, or each device can be
            instantiated by hand. For the purposes of this post and since the 2
            input NAND structure is only four transistors, I will instantiate by
            hand.
          </p>

          <p>
            To go about painting the metal layers, Magic uses a box system where
            you define the top right corner and the bottom left corner. With
            these two points you can then paint whichever layer you want, and
            from this create any sort of layout.
          </p>

          <figure>
            <img src={image4} alt="Layout of a NAND gate in Magic VLSI" />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              Layout of a NAND gate in Magic VLSI
            </figcaption>
          </figure>

          <p>
            From the photo above, it is clear that Magic and Cadence implement
            their layout tools similarly. Every layer in the process stack has
            its own associated color/patterning to make it distinguishable from
            the other layers. What makes the tools different comes from the
            quality of life features that Cadence has, or the lack of them in
            Magic. In Magic the only information that you are creating an okay
            layout is its DRC checker. However, these are displayed by small
            white dots, so they can be easy to overlook.
          </p>

          <p>
            From here, to make sure that this device properly implements the
            NAND schematic from Xschem, we will first have to extract the
            netlist from Magic, and then use the program Netgen, which will read
            the spice netlist saved from Xschem and compare it to the one from
            Magic.
          </p>

          <figure>
            <img src={image5} alt="Comparison of netlists using Netgen" />
            <figcaption>
              <strong>Figure 5</strong>
              <br />
              Comparison of netlists using Netgen
            </figcaption>
          </figure>

          <p>
            Knowing all of this, we can begin to understand which is 'better'.
            Most designers will agree that Cadence Virtuoso has more{" "}
            <strong>functionality</strong> and better{" "}
            <strong>integration</strong>. Their tools are designed to work well
            together, and a lot of engineering has gone into making sure that
            there are no hiccups along the entire flow. In contrast, Magic is
            part of a larger set of tools required to implement a complete
            analog flow. There is no unified engineering team designing them,
            but rather community members designing tools how they personally
            envision them. This can lead to complications when transitioning
            from one to the other; our team spent a significant amount of time
            working to debug an issue where Xchem gave a netlist in an order
            that Magic didn't expect, causing issues. Additionally, commercial
            tools often come with a lot more <strong>support</strong>. Cadence
            Virtuoso has a team of engineers ready to help their clients if any
            issues arise, as paying for the tools guarantees you some assurance
            that they will function. Open-source tools, in contrast, are often
            developed by members of the community at large, who are volunteering
            their time and effort to create something for others to use. This
            comes with no assurance of functionality, as well as variable levels
            of support, depending on what the designer wants to provide.
          </p>

          <p>
            Along with better functionality and support, since Cadence is
            developed and supported by a dedicated team, the
            <strong> documentation</strong> for Cadence is readily available for
            those who have access to the program. Another benefit towards the
            commercial nature of Cadence Virtuoso is the ease of use. Although
            there are many steps in the process of creating circuits, simulating
            them and then laying out, the use of Cadence is much easier to get
            into from the start. With Magic and Xschem, you are provided a
            simple UI to start the design, but besides this, the rest of the
            software is done from text boxes and command prompts. In Cadence
            however, although everything can be done through the CIW, the
            process of creating an elaborate simulation is made easy by its ADE
            window (for analog design) as every type of simulation, transient,
            ac, etc, has its own UI that only requires specific inputs. From
            this, one still needs to have an understanding of how spice works,
            but unlike Xschem and writing NGspice, it is very easy to start
            setting up simulations. Comparing this to the open-source tools,
            since everything is separated into its own program, to acquire the
            knowledge to even start can be a challenge to find as it is located
            in each program's documentation (which may or may not be up to date)
            or hidden somewhere on a forum. Once these obstacles are passed,
            however, the use of these open-source tools are surprisingly
            powerful.
          </p>

          <p>
            Open-source design doesn't come without its advantages, the first of
            which is <strong>accessibility</strong>. A common theme among design
            tools is the fact that they are often surrounded by many
            restrictions. If you want to be able to use Cadence Virtuoso, you
            have to pay to use it; with a{" "}
            <a
              target="_blank"
              href="https://www.eetimes.com/cadence-rolls-custom-ic-tools-into-one-platform-2/#:~:text=U.S.%20pricing%20for%20a%20one,%24100%2C000%20for%20Virtuoso%20Silicon%20Analysis."
            >
              minimum price tag
            </a>
            of $15,000, many users aren't able to access the tool outside of
            industry. In addition, many of the other commercial products that
            are used by Cadence (such as Process Design Kits, or PDKS) are
            subject to NDA's (Non-Disclosure Agreements) that anyone who wants
            to use the product must sign and go through before using. These
            NDA's are often difficult to get for individual use, and can
            additionally be subject to export control, limiting who can sign
            them based on your home country. In contrast, anyone is able to{" "}
            <a target="_blank" href="http://opencircuitdesign.com/magic/">
              download and install Magic
            </a>
            . This significantly lowers the boundary to entry for analog design;
            anyone is able to start designing without having to pay or go
            through paperwork. For many designers, this is the draw to
            open-source. Instead of having to jump through hoops to start, you
            can sit down and start designing, iterating and engineering
            immediately.
          </p>

          <p>
            However, a possibly more subtle advantage of open-source tools is{" "}
            <strong>extensibility</strong>. With tools like Cadence Virtuoso,
            you as a designer are usually stuck with what the tools have to
            offer; it comes in a pre-made, unmodifiable setup. If you want or
            need more functionality for your project, you may be out of luck (or
            have to pay more for additions). This is the exact opposite of the
            case for open-source tools like Magic. By definition, the source
            code is available (
            <a target="_blank" href="https://github.com/RTimothyEdwards/magic">
              including for Magic
            </a>
            ). Anyone is able to not only see the code, but to modify it how
            they need it, and even submit their modifications to be used in the
            official version. This also has the side-effect that the designers
            of the tools are more available for communication. Our team has been
            in communication throughout our design process with Magic's current
            maintainer, Tim Edwards, who has greatly assisted us in being able
            to use and understand the tool.
          </p>

          <p>
            Neither tool is applicable globally. For large companies, using
            industry standards with extensive functionality is appealing due to
            the support they are guaranteed, the completeness of documentation,
            and the reliability of the package. However, for at-home hobbyist
            designers, open-source is a great way to try out your designs
            without having to commit to a large investment.
            <a target="_blank" href="https://join.skywater.tools/">
              The open-source community
            </a>{" "}
            is rich with enthusiastic members who are able to contribute and
            help where they can, and the environment has reached a point where
            much of the desired functionality is flushed out and tools will
            function reliably. And hey, if there's something you need, you can
            always put on your engineering hat and make it for yourself and
            others.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MagicVLSIvsCadenceVirtuoso;
