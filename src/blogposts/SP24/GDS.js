import React from "react";
import image1 from "./imgs/GDS/image1.png";
import image2 from "./imgs/GDS/image2.png";
import image3 from "./imgs/GDS/image3.png";
import image4 from "./imgs/GDS/image4.png";
import image5 from "./imgs/GDS/image5.png";

function GDS() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>GDS Chip Art</h1>
            <h2>Emily Lan and Demetrios Gavalas</h2>
            <h2 className="underline">March 24rd, 2024</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            <strong>
              This blog post was inspired by jazvw and uses code from them! It
              can be found at{" "}
              <a href="https://github.com/jazvw/chip_art">
                https://github.com/jazvw/chip_art
              </a>{" "}
              and all rights surrounding the code belong to them.
            </strong>
          </p>

          <h2>Intro</h2>
          <p>
            GDS art is a great way to give our custom chip some flair! More
            importantly though, learning how GDS art is generated can give us
            some good insight into what GDS is, and how it is used to go to the
            high level designs we are familiar with to actual fabrication of our
            custom chips.
          </p>

          <h2>On Layouts</h2>
          <p>
            The Integrated Circuit (IC) boasts a compact yet complex
            architecture. At the heart of every IC lies its layout, or the IC
            mask layout, which delineates the arrangement of metal layers and
            interconnections of the circuit in a geometric and three-dimensional
            representation. At its heart, it serves to detail the functionality
            and performance of the IC.
          </p>

          <p>
            Those area lot of words. We prefer to call it a complex digital
            soldering experience. Gross oversimplification? Maybe. But allow us
            to explain:
          </p>

          <p>
            In order to connect two devices together in a layout, you link them
            together with a layer of Metal. If you'd like to connect those two
            Metals together, (thereby linking those two devices together as
            well), you link them with a Via where they intersect. See? Just like
            soldering.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              We want to connect these two metals together. We use a Via.
            </figcaption>
          </figure>

          <figure>
            <img src={image2} />
            <figcaption>
              We don't want to connect these two metals together. They reside on
              separate layers and won't touch.
            </figcaption>
          </figure>

          <p>
            Of course, digital layout design is mostly automated these days,
            especially with how big these ICs are, and you don't really get the
            opportunity to do this yourself unless you'd really like to.
          </p>

          <p>
            Still, there are opportunities to get up close and personal with
            layout design.
          </p>

          <p>
            We need to first understand the building blocks of a layout: LEF and
            GDS files.
          </p>

          <h2>LEF and GDS Files</h2>

          <p>
            There are two kinds of LEF files: Cell LEF files, and Tech LEF
            files.
          </p>

          <p>
            The Cell LEF file contains the layout information for a single cell
            on your board. It contains a cell name, class, sizing and symmetry
            information, and pin information. This allows the layout to be
            separated into discrete cells, which improves organization and
            modularity.
          </p>

          <p>
            Tech LEF files contain information for all of the metal
            interconnects on a board, including their geometry and physical
            dimensions. These are specified layer by layer, in process order,
            meaning that the LEF file is specifying how each layer is actually
            being fabricated.
          </p>

          <p>
            GDS files are a kind of database file which are used to store the
            full three-dimensional layout of the chip. That's what you send to a
            foundry, which is how they configure their machines to make your
            chip. Like LEF files, the making of a GDS file is mostly automated
            using high level tools. While they generally describe functional
            parts of the chip, we can also use it to put more fun stuff on our
            trip, like art.
          </p>

          <h2>GDS Art</h2>
          <p>
            Now that we understand GDS and LEF files, the idea of GDS chip art
            becomes very, very possible!
          </p>

          <p>
            At its core, we're taking pixels-a bitmap, to be more precise-and
            mapping prominent geometric shapes with different layers of metal.
            Different colors utilize different layers of metal. Vias aren't
            necessary, because we aren't looking for functionality out of this
            thing-just that it looks the way we want it to!
          </p>

          <p>
            The code involved in making this process possible is a little more
            complicated. We used jazvw's code, which can be found{" "}
            <a href="https://github.com/jazvw/chip_art">here</a>, in order to
            transform our PNG into a GDS file!
          </p>

          <p>
            One thing to note: while we went through the process of exploring
            jazvw's code and using it in order to transform it from a PNG into a
            GDS file, we noticed that there was an issue with the python
            environment. In order to get the script up and running, we went into
            the makefile and changed <span class="code">./chip_art.py</span> to{" "}
            <span class="code">python3 chip_art.py</span>. This uses the Python3
            environment rather than Python in our path, which solved the issue.
            If you don't have this issue on your end, great! If you have it,
            it's something you can try.
          </p>

          <p>
            You'll also have to tinker with the image width a little bit, as
            that's something you have to specify when taking your picture from a
            PNG to a GDS file. You'll want to change your PNG picture width to
            the specific amount of pixels you'd want your GDS to be in &microm.
          </p>

          <p>
            We decided to use the C2S2 logo for our expedition into GDS art.
            This is a relatively simple transformation, visually speaking; there
            are only two colors involved in our logo. And, sure enough, here's
            our final result!
          </p>

          <figure>
            <img src={image3} />
          </figure>

          <figure>
            <img src={image4} />
            <figcaption>
              <i>Here are the layers for reference, color coded!</i>
            </figcaption>
          </figure>

          <p>Isn't this super cool???</p>

          <p>
            Now, how did we open this file? GDS files aren't exactly{" "}
            <i>readable</i> on their own.
          </p>

          <h2>Opening a GDS File</h2>
          <p>
            We used <a href="https://www.klayout.de/">Klayout</a> in order to
            open our C2S2 logo, which seems to be the most reliable and
            user-friendly open-source application capable of opening and viewing
            a GDS file!
          </p>

          <p>
            Klayout allows you to draw your own layouts, view layouts (like we
            did for the logo), and handle GDS files in a way that would
            otherwise be super, super difficult without exclusive industry tools
            like Calibre DESIGNRev.
          </p>

          <p>
            Therels also <a href="https://heitzmann.github.io/gdstk/">Gdstk</a>,
            a C++ library that, in its own words, is meant "for creation and
            manipulation of GDSII" files! It's definitely worth checking out if
            you're going for further customization and creation of your own
            GDSII files.
          </p>

          <p>Now you can try on your own!</p>

          <figure>
            <img src={image5} />
          </figure>
        </div>
      </section>
    </main>
  );
}
export default GDS;
