import React from "react";

function SoftwareAndRelativePositionEstimator() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Software and Relative Position Estimator</h1>
            <h2>Akanksha Sarkar and Sana Chawla</h2>
            <h2 className="underline">April 23rd, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hello! I am Akanksha, a co-lead of the software sub-team, and a
            sophomore studying Computer Science and Mathematics. I joined C2S2
            last Fall and have learnt a lot about chip design and its
            development process. As the software team, our main goal is to come
            up with a testing infrastructure for the chip and make sure all of
            its components are communicating with each other properly.
          </p>

          <p>
            We have therefore till now been working on smaller projects like
            calculators and crash detectors to understand how to work with the
            chip and gain some experience coding in C++. However, things are
            escalating this semester because ... <i>(drumroll please)</i>
            we have a campus partner now! Since we are now working with the Lab
            of Ornithology, we have a better understanding of our project's
            software needs and because of all the work we have been doing
            before, are well equipped to come up with the functionality
            required. We are now working on a Relative position estimator to
            track the movement of the Scrub Jays and potentially collect
            attitude and audio data from the tagged chip.
          </p>

          <p>
            We are primarily working with the Uno R3 microcontroller. One of the
            problems we were facing is the issue of GPS tracking. While tracking
            using a GPS module is highly accurate, it consumes a lot of power
            and has other weight considerations. Therefore, we have decided to
            work with an error logging procedure. The idea is that the
            microcontroller starts at a known position and is then moved around
            campus. We log the error of our R3 approximation function using
            another device and realign the estimated position of the R3 function
            to the true coordinates. My co-lead Ananya and I have been working
            on the external communication capabilities of our crash detector
            which we are hoping to use for the relative position estimator as
            well. This will help us store the data as well as transform it post
            collection for further analysis.
          </p>

          <p>
            Another goal for the software team is to write code which can be
            easily translated to other environments. We want to create programs
            that can be run independently of the platform. We have been focusing
            on better documentation habits so that all the code we are writing
            for Arduino boards can be translated to our custom chip without
            changing the structure massively.
          </p>

          <p>
            Looking forward, we will be working on figuring out how to translate
            the 2D mapping we have to a 3D setting as well as test our code by
            moving around campus. I also think the software team will be
            collaborating more with the system architecture team more and look
            forward to watching our project come to life. This was my first
            semester being a co-lead and I am enjoying being part of this cool
            community of chip design enthusiasts. This is definitely an
            interesting time to be in this field and I am very grateful to be
            exposed to this field so early on in my CS career.{" "}
            <i>(Go C2S2!!!!)</i>
          </p>

          <p>
            Hello, I am Sana Chawla, a member of the Software subteam of C2S2
            and a sophomore studying Computer Science. I joined C2S2 this
            semester with the goal of learning about and gaining experience in
            the chip design process. So far, as a new member I have had the
            chance to learn a lot about the industry and its various fields,
            like analog design, microarchitecture etc.
          </p>

          <p>
            Michael (my subteam partner) and I began the semester working on a
            crash detector to get acquainted with using the UNO R3
            microcontroller, C++ coding, etc. The crash detector code uses the
            timestamp and x, y, z acceleration values which are available as
            inputs from the accelerometer to calculate the relative position and
            velocity by integration. A crash is then "detected" if the change in
            acceleration is found to meet a certain predetermined threshold.
            This served as a very insightful first project for me as a C2S2
            member, as I gained a lot of experience in C++ coding and using
            Arduino libraries like Adafruit.
          </p>

          <p>
            Once the C2S2 campus partner was finalized, we have switched our
            focus to begin working on a relative position estimator which is
            more in line with the needs of the partner, the Lab of Ornithology.
            The position estimator would be used to determine the relative
            position of the Scrub Jays.
          </p>

          <p>
            Even though I have been in C2S2 for only one semester now I have
            gained a lot of insight into the semiconductor industry. I look
            forward to working on the position estimator project and possibly
            collaborating with the System Architecture team to assist our campus
            partner with the project. I am grateful for this opportunity to
            learn about the chip design process and broaden my knowledge in this
            field.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SoftwareAndRelativePositionEstimator;
