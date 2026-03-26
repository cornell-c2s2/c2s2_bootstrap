import React from "react";
import image1 from "./imgs/RepresentingNumbersInHardware/image1.png";
import image2 from "./imgs/RepresentingNumbersInHardware/image2.png";
import image3 from "./imgs/RepresentingNumbersInHardware/image3.png";
import image4 from "./imgs/RepresentingNumbersInHardware/image4.png";
import image5 from "./imgs/RepresentingNumbersInHardware/image5.png";

function RepresentingNumbersInHardware() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Representing Numbers In Hardware</h1>
            <h2>Madeleine Lee and Vicky Le</h2>
            <h2 className="underline">October 22nd, 2023</h2>
          </div>
        </div>
      </section>
      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Have you ever wondered how your computer represents numbers? You've
            probably already heard of binary numbers - using a series of 0's and
            1's to represent numerical values - but how do we use binary to
            represent values between 0 and 1 ("decimal" values)? There are two
            primary ways to do this. They are called <i>"fixed point"</i> and{" "}
            <i>"floating point"</i> representations.
          </p>

          <h2>Review of Binary Numbers</h2>

          <p>
            Before we get into these representations of numbers, let's do a
            quick review of what we call <i>integer</i> binary numbers. Binary
            numbers are a base 2 number system, so unlike our everyday base 10
            system where we use digits 0-9, binary uses the digits 0-1 to
            represent numbers. Each of these digits is referred to as a bit, and
            when multiple bits are put together the right-most bit is called the
            "least significant bit" (LSB) representing 2<sup>0</sup> , while
            each bit left represents 2<sup>bit position</sup>. The left-most bit
            is called the "most significant bit" (MSB). Below is a diagram that
            can help visualize this system.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>Visualization of Base 2</figcaption>
          </figure>

          <p>
            Relatively simple right? To convert to decimal, just multiply each
            digit by its corresponding power of two and add all of the digits
            together. However, this system as it stands, does not allow us to
            represent numbers between 0 and 1. So, enter fixed point
            representations!
          </p>

          <h2>Fixed Point Numbers</h2>

          <p>
            One way that we can begin to represent fractional values is by
            introducing negative powers of two. We can split our binary digits
            into two parts: a whole number part and a fractional part, with the
            whole number part representing positive powers of two, and the
            fractional part representing negative powers of two.
          </p>

          <figure>
            <img src={image2} />
            <figcaption>Visualization of Fixed Point</figcaption>
          </figure>

          <p>
            We use a "binary point" to denote the boundary between the two parts
            (not "decimal" point because that would indicate base 10!). We call
            this representation "fixed point" because the binary point is fixed.
            That is, it stays in the same position for all numbers within the
            representation. Thus, we cannot perform computations with one number
            whose binary point is between digits 15 and 16, and one whose point
            is between digits 5 and 6 without converting them to the same binary
            point. Additionally, we are limited in the range of numbers that we
            can represent with this representation. Although it increases
            precision by having a fractional part, the overall range of numbers
            we can represent is decreased since we decrease the number of bits
            with positive powers of two. One way to increase the range that we
            can represent is by using floating point numbers.
          </p>

          <h2>Floating Point Numbers</h2>

          <p>
            The concept of floating point is that the binary point is no longer
            fixed. It can "float" around to different locations within the
            binary number. This allows us to represent a larger range of
            numbers. However, this means that we have to have some way to
            communicate where the binary point is within the number.
          </p>

          <p>
            To effectively organize all of the information needed for a floating
            point number, the total bit width of a number is broken into 3
            parts: a sign bit, exponent bits, and mantissa bits. The MSB is the
            sign bit and is used to denote whether the number is negative (1) or
            positive (0). Following the sign bits are the exponent bits which
            are used to represent positive and negative exponents and a bias is
            added in order to get the stored exponent. A bias is added to these
            bits in order to make full use of the bits available such that each
            set of unique combinations represents a different number. Lastly are
            the mantissa bits which represent the significant digits within the
            floating point number.
          </p>

          <p>
            We can think of floating point as a version of scientific notation,
            except instead of multiplying the coefficient (mantissa) by a power
            of 10, we multiply by a power of two.
          </p>

          <figure>
            <img src={image3} />
            <figcaption>Relation to Scientific Notation</figcaption>
          </figure>

          <p>
            Using the diagram of scientific notation above, the analog for
            floating point would be that the coefficient is the mantissa, the
            base is always two, and the exponent is the exponent.
          </p>

          <p>
            Now that we know the basics of floating point numbers, let's look at
            an example based on IEEE 754 standard for single precision numbers.
          </p>

          <figure>
            <img src={image4} />
            <figcaption>IEEE Specification</figcaption>
          </figure>

          <figure>
            <img src={image5} />
            <figcaption>Conversion to Floating Point</figcaption>
          </figure>

          <p>
            From this it can be seen that floating point can represent multiple
            numbers, but due to this flexibility there are special cases in
            floating point such as what to do when a number does not terminate
            or when there are undefined results. For these situations we have
            special numbers such as zero, infinity, and not a number (NaN).
          </p>

          <h2>Floating Point in Hardware</h2>

          <p>
            This semester we are working on creating a floating point library
            that consists of floating point arithmetic units such as a
            multiplier, divider, subtractor and adder to the C2S2 IP
            (intellectual property). This will enable the team to hopefully be
            able to work with more precise numbers as well as a larger range of
            numbers. We also hope to have parameterizable bit widths for total
            size of input, number of exponent bits, and number of mantissa bits.
            By adding this element of resizeable bit fields, different ranges of
            numbers and different precisions can be chosen depending on the
            application of the arithmetic units. Although it will be a
            challenging journey to accomplish this, we hope that this project
            will be helpful to the team in the future by enabling us to have
            more options and we hope you learned more about different
            representations of numbers in binary!
          </p>

          <h2>Additional Resources</h2>

          <ul style={{ padding: "auto", textAlign: "left" }}>
            <li>
              <a href="https://mathcenter.oxford.emory.edu/site/cs170/ieee754/">
                The IEEE 754 Format
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQhj5RGtag0">
                How Floating Point Works
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default RepresentingNumbersInHardware;
