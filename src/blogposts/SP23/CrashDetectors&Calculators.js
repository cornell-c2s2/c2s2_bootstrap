import React from "react";
import image1 from "./imgs/CrashDetectors&Calculators/image1.png";

function CrashDetectorsCalculators() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Crash Detectors & Calculators</h1>
            <h2>Ananya Goenka and Michael Wei</h2>
            <h2 className="underline">March 26th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hi! I'm Ananya, a co-lead of the software sub-team, and a sophomore
            studying Computer Science. Since joining C2S2 last Fall, I've gained
            valuable experience navigating the complex and intricate chip design
            process, and have had the privilege to interact with and learn from
            my talented team-members.
          </p>

          <p>
            My work with the software sub-team initially involved the
            development and testing of code snippets for our first project
            (building out a calculator). However, my role has since expanded to
            include co-leading the development of a crash detector (which will
            be presented by Michael), along with a software stack that will
            bolster our future projects.
          </p>

          <p>
            An important goal for the software team from the very beginning has
            been developing software that can be run independently of the
            platform. In the simplest sense this means that for our crash
            detector project, if a crash is "detected" it would result in a
            simple terminal output when run natively, a LED/sound output on an
            Arduino, and would possibly utilize the WIFI capabilities of the
            ESP32 to result in an email alert. This requires defining applicable
            functions differently depending on the interface we plan to run it
            on, so that we can use the same build commands to build for
            different architectures. Applying this approach on the external
            communication aspect of the crash detector project has been the
            primary goal for me and my co-lead Akanksha this semester. This also
            includes building proficiency in logging data on a SD card. This
            will help us pick up the skills necessary to build out software for
            our custom chip.
          </p>

          <p>
            Looking ahead, I am excited to continue building on the foundation
            we've established this semester, and to take on even more ambitious
            software projects in the future. I am confident that we can make a
            meaningful impact in the field of custom chip design, and help shape
            the future of this exciting and rapidly evolving field.
          </p>

          <p>
            Hello, I'm Michael, a member of the software subteam and a sophomore
            studying computer science. I joined C2S2 this semester with the goal
            of learning more about the chip design process, along with
            microcontroller development. So far, I've met many passionate
            individuals and gained insight on other fields of chip design, such
            as analog and digital. I'm currently working on implementing a crash
            detector with my subteam partner, Sana. The crash detector is
            written in <span className="code">C++</span>
            and runs on the <span className="code">UNO R3</span>{" "}
            microcontroller.
          </p>

          <figure>
            <img src={image1} alt="The UNO R3 microcontroller" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              The <span className="code">UNO R3</span> microcontroller
            </figcaption>
          </figure>

          <p>
            The crash detector is based in the{" "}
            <span className="code">IMU library</span>, which is shorthand for{" "}
            <span className="code">Inertial Measurement Unit</span>. This
            library implements common measurement functions, such as obtaining
            the acceleration from the onboard accelerometer of the{" "}
            <span className="code">UNO R3</span>. The acceleration data, in
            combination with a measure of time, can be integrated to determine
            the relative position and velocity of the microcontroller. This data
            can then be fed into a crash detection function, aptly named{" "}
            <span className="code">detectCrash</span>, which determines if the
            change in acceleration with respect to time meets a threshold that
            would constitute a crash.
          </p>

          <p>
            Although I have only been a member of C2S2 for a few months, I am
            already developing a strong foundation for exploring the
            semiconductor industry. The opportunity to delve into semiconductor
            design as an undergraduate is rare, and I am grateful for the chance
            to broaden my knowledge in this field, and to consider it as a
            potential career path.
          </p>
        </div>
      </section>
    </main>
  );
}

export default CrashDetectorsCalculators;
