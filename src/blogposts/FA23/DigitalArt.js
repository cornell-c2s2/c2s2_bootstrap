import React from "react";
import image1 from "./imgs/DigitalArt/image1.png";
import image2 from "./imgs/DigitalArt/image2.png";
import image3 from "./imgs/DigitalArt/image3.png";
import image4 from "./imgs/DigitalArt/image4.png";

function DigitalArt() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Digital Art: Principles Of Digital Circuit Design</h1>
            <h2>Setor Simpri and Ena Jovanovic</h2>
            <h2 className="underline">November 5th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            In this post we take a look at an example that illustrates the
            general principles that digital circuit designers employ in
            designing and implementing circuits. These principles increase
            productivity as well as robustness and they help reduce error.
          </p>

          <p>
            Despite the world being analog, digital is still the go-to way for a
            large majority of chip designs. Why is this the case?
          </p>

          <p>
            Digital is more convenient because it is an abstraction. There is no
            need to know how transistors work or to worry about currents and
            voltages.
          </p>

          <p>
            Abstraction refers to the act of concealing details that do not
            matter for how a system is used. In the process of hiding the
            irrelevant details, digital designers abide by the principle of
            discipline; that is, they limit their design choices in such a way
            as to increase productivity. An example will be helpful in
            illustrating the above concepts. As a result, we look at defining
            logic levels.
          </p>

          <h2>Defining Logic Levels</h2>

          <p>
            Digital design deals with discrete values. However, underlying all
            the discrete values are continuous variables such as voltage and
            current. The continuous variables are mapped onto a discrete binary
            variable, thereby allowing a certain range of voltage values to be
            interpreted as a logical 1 while another range will represent a
            logical 0. The diagram below features the defining of logic levels.
          </p>

          <figure>
            <img src={image1} />
          </figure>

          <p>
            In the diagram, we have associated the range of voltage values from
            0 to V<sub>L</sub> with logical 0 and those from V<sub>H</sub> to V
            with logical 1. With this relation established, a component can then
            be abstracted and used while only keeping in mind that a certain
            voltage threshold leads to 1 and that some other leads to 0. The
            diagram below makes the idea concrete. The triangular component
            takes in some voltage value and outputs a voltage value that can be
            interpreted as 1 or 0.
          </p>

          <figure>
            <img src={image2} />
          </figure>

          <p>
            However, before this abstraction, designers must meet the static
            discipline. Static discipline requires that if a digital circuit
            receives a logically valid input, then it will produce a logically
            valid output. In other words, people working on circuits will
            implement them so that input or output voltages only fall within the
            logical 1 or 0 zones. If, for some unintended reason, the input
            should fall within the forbidden zone, (the region between V
            <sub>L</sub> and V<sub>H</sub>, indicated in the first diagram), the
            circuit behaves unpredictably and should not be expected to work as
            specified.
          </p>

          <h2>Managing Complexity</h2>

          <p>
            In addition to abstraction and discipline, digital designers use the
            three ideas of hierarchy, modularity and regularity to break down
            large systems into smaller systems that are more manageable.
            Specifically, hierarchy calls for decomposing the system into its
            major components; then, these components are further subdivided into
            various modules. As a result, the system can be looked at as a
            hierarchy of components. The figure below illustrates this: the
            green complex system is broken down into its constituent parts
            colored orange, red and blue.
          </p>

          <figure>
            <img src={image3} />
          </figure>

          <p>
            Modularity ensures that the components have a clearly defined
            function so that they can be assembled hierarchically into the
            bigger system without any unintended side effects. Last but not the
            least: regularity. It works at creating uniformity among the various
            modules. Regularity allows modules to be interchanged with those
            similarly specified. An analogy that may help here is one involving
            a door knob. When a knob breaks or no longer functions properly, one
            can simply go into a shop and purchase a similar knob as
            replacement; one need not throw away the whole door. In this sense,
            the malfunctioning knob is not the only one that could possibly fit
            the door. Likewise, the two modules depicted below, whose function
            is to add inputs of form A, B and C and produce outputs of the form
            Out 1 and Out 2, are interchangeable.
          </p>

          <figure>
            <img src={image4} />
          </figure>

          <p>
            In conclusion, by limiting their design choices, digital circuit
            designers are able to avoid unnecessary details like the whole range
            of voltage values or the particular nature of noise. They define
            logic levels and then abstract the component; this increases
            productivity greatly. Moreover, designers exploit hierarchy,
            modularity and regularity in managing complex projects: they break
            down larger systems into smaller systems, build these smaller
            systems and then assemble these modules to get a solution to the
            complex project. All of these ideas help digital circuit designers
            design and build robust systems in a less time consuming and
            relatively very error proof way.
          </p>
        </div>
      </section>
    </main>
  );
}

export default DigitalArt;
