import React from "react";
import image1 from "./imgs/chooseFighter/image1.png";
import image2 from "./imgs/chooseFighter/image2.png";
import image3 from "./imgs/chooseFighter/image3.png";
import image4 from "./imgs/chooseFighter/image4.png";

function chooseFighter() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>KiCad vs. Altium: Choosing Your Fighter!</h1>
            <h2>Chimdi Anude and Sherri Qazi</h2>
            <h2 className="underline">March 3rd, 2024</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            System Architecture has been doing a bit of exploration and
            discovery this semester. Since the beginning of C2S2,we have been
            strictly using Altium Designer as our PCB Design Tool of choice.
            However, after having some conversations and reflecting on the
            nature of this team we decided it was prudent to see other software
            and compare it to Altium. We chose KiCad and we are going to do a
            quick comparison of our initial thoughts of each tool and see which
            one aligns more with your needs.
          </p>

          <p>
            There are multiple PCB Design Tools or EDA Tools available on the
            market. The most notable being Altium Designer, OrCAD and Allegro,
            EAGLE and KiCad. These softwares help with schematic design and
            capture,creating component footprints, layout design, implementing
            design rule checks (DRCs) and more. These are all important aspects
            of the design process so it is important to choose a tool that works
            for you.
          </p>

          <h2>Accessibility</h2>

          <h3>Altium</h3>
          <p>
            Altium Designer is a commercial PCB design software that comes with
            various subscription based licensing options. The perpetual license
            cost is 11,970 USD and the term-based license is 355 USD per month.
            However they do provide free annual licenses to students. Although
            Altium's software may be free for students, accessibility may be
            difficult for those who want access to PCB design software outside
            of an academic setting. In addition, Altium Designer is mainly
            intended for Windows, but it can run on macOS using virtual
            machines.
          </p>

          <h3>KiCad</h3>
          <p>
            KiCad is an Open Source EDA tool that is available for download on
            Windows, macOS and Linux. It is mostly used by electronic hobbyists
            and inexperienced users as it is free to the general public. It is
            part of their mission statement to balance between keeping the
            software approachable to new users but still having complex design
            features for professional users.
          </p>

          <h2>User-Interface</h2>

          <h3>Altium</h3>

          <p>
            Altium's user interface may be daunting for beginners as there are
            many panels or options to choose from. However, once you overcome
            the steep learning curve, you can utilize its large library of
            components that exist in the real world! This is a major advantage
            of Altium because it avoids the hassle of searching for datasheets,
            and it neglects the need to check whether a component is in stock or
            not.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Here is the schematic layout of a Battery Voltage Monitor Circuit
            </figcaption>
          </figure>

          <p>
            As you can see from above, Altium labels each component with its
            part number corresponding to the part manufacturer. Aside from that
            difference, the general layout of the schematic is similar to KiCad.
          </p>

          <figure>
            <img src={image2} />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Here is the PCB Layout of Battery Voltage Monitor Circuit
            </figcaption>
          </figure>

          <p>
            Importing the footprints from the schematic is very straightforward
            due to the fact that Altium has footprints associated with most of
            the manufactured parts. Notably, Altium has an auto router which can
            be used to assist users with routing. However, Altium's interface
            for routing is simple enough for anyone to learn.
          </p>

          <h3>KiCad</h3>
          <p>
            KiCad is a bit more user friendly than Altium and sets a lot of
            things up for you on the jump. When you create a new project, it
            automatically opens a schematic file and a layout file. From there,
            you can place and wire the symbols you need for your project. One
            thing to note is that there isn't a default footprint to each symbol
            so make sure you select the part or else there will be no footprint
            for layout.
          </p>

          <figure>
            <img src={image3} />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              Here is the schematic of the same Battery Voltage Monitor Circuit
            </figcaption>
          </figure>

          <p>
            As you can see, the schematics look similar but are using different
            symbols. KiCad has a bunch of shortcuts that are more intuitive than
            Altium. Everything you need to draw your schematic is on the right
            side of the screen and as seen in the picture the cursor is the
            intersection of two lines to make sure that when you place
            components or wires everything is well aligned. This makes KiCad
            slightly easier to use when designing compared to Altium.
          </p>

          <figure>
            <img src={image4} />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              Here is the PCB Layout of the same Battery Voltage Monitor Circuit
            </figcaption>
          </figure>

          <p>
            Just like in Altium, all the reference numbers and component names
            are transferred over from the schematic. Another cool feature is
            that when you draw a trace to connect one pin to another it
            highlights where it should go. This is extremely useful as your
            projects get more complicated, it gets harder to see where to route
            the traces.
          </p>

          <h2>Overall Features</h2>

          <h3>Altium</h3>
          <p>
            There are an extensive number of features that Altium supports. As
            mentioned before, Altium has a comprehensive set of manufactured
            part libraries which streamlines the process of searching for the
            vendors, datasheets, and part design (both 3D and 2D). Altium also
            supports a 3D viewing tool which allows users to view their design
            in a spatial format that's easier to visualize than the traditional
            2D layout. Another feature of Altium is Simulation and Analysis
            which allows users to perform signal and power analysis of their
            analog and digital circuits. This feature allows users to identify
            issues with their circuit before it is manufactured. The most
            helpful feature of Altium is the ability to collaborate with other
            people on designs. Altium utilizes a GIT system that can allow users
            to commit to the same project, and version control. Lastly, the
            documentation feature of Altium makes it convenient for users to
            compile resources such as assembly drawings and bill of materials
            (BOM) to support the fabrication and assembly processes.
          </p>

          <h3>KiCad</h3>
          <p>
            KiCad also has features unique to its platform. A really cool one is
            that it is integrated with SPICE (Simulation Program with Integrated
            Circuit Emphasis) Simulation. One can create a schematic in KiCad
            and select parameters for your project. Then you can simulate it to
            see if you are getting your desired output. This saves a lot of time
            and money fabricating a prototype that doesn't work as designed.
            KiCad also has a thriving community of users and thorough
            documentation that are available if you have questions or need
            assistance. One can also download plugins to automate design tasks
            like autorouting, an interactive BOM (Bill of Materials) generator
            and quick order buttons to various PCB manufacturers.
          </p>

          <h3>Conclusion</h3>
          <p>
            Altiumely (Ultimately), the choice is yours depending on what you
            prioritize when designing your PCBs. Altium Designer is an expensive
            commercial product designed for industrial use, but offers numerous
            features and a sleek user interface that one can learn over time. It
            can be very helpful for those looking to do more complex and
            professional PCB designs.On the other hand, KiCad is an open source
            and readily accessible tool that also carries similar features and
            functionality to Altium in an intuitive user interface . However,
            KiCad may be inconvenient for hobbyist designers who plan to often
            send their designs to PCB fabrication plants as KiCad does not offer
            extensive component libraries from different manufacturers with the
            datasheets readily available. In the world of PCB design, the
            software skills are transferable so whatever you choose, you're one
            step closer to becoming a PCB designer.
          </p>
        </div>
      </section>
    </main>
  );
}

export default chooseFighter;
