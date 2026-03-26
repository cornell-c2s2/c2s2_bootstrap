import React from "react";
import figure1 from "./imgs/AmbilaIMU/ambiluIMG1.png";
import figure2 from "./imgs/AmbilaIMU/ambiluIMG2.png";
import figure3 from "./imgs/AmbilaIMU/AmbiluIMG3.png";

function AmbilaIMU() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Intelligence on a Chip: IMU Motion Classification</h1>
            <h2>Ambila Sivabalan</h2>
            <h2 className="underline">February 13, 2026</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">

          <p>
            A duck goes to the store and buys a loaf of bread. The cashier says "cash or charge?".
          </p>

          <p>"Neither. Just put it on my bill."</p>

          <p>But how do we tell what the duck was doing?</p>

          <p>
            Hi, my name is Ambilu, and I am a member of the Project Management subteam of C2S2. This semester, I had
            the opportunity to learn more about the work of the Software subteam, specifically their development of an
            Inertial Measurement Unit (IMU) pipeline and motion classification model for a low power chip designed to
            be mounted on birds. Their work focuses on transforming raw sensor data into meaningful behavioral insights
            within the strict constraints of an embedded system.
          </p>

          <h2>Intelligence on a Chip</h2>

          <p>
            Tracking wildlife movement is not as simple as knowing where an animal is located. For researchers,
            understanding how an animal moves can provide critical information about behavior, health, and interactions
            with the environment. However, transmitting large amounts of raw sensor data from a small, battery powered
            chip is impractical. Instead, intelligence must live directly on the chip itself. This is where the
            Software subteam's work becomes essential.
          </p>

          <figure>
            <img src={figure1} alt="Bird with Tag" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />Bird with Tag (to show size of current tags)
            </figcaption>
          </figure>

          <h2>From Motion to Meaning: What an IMU Does</h2>

          <p>
            An IMU is a sensor that measures motion using components such as accelerometers and gyroscopes. These
            sensors generate continuous streams of numerical data that describe how the chip is moving in three
            dimensional space. On their own, these numbers are difficult to interpret. The challenge is converting this
            raw data into classifications that describe what kind of movement is occurring.
          </p>

          <p>
            The Software subteam developed a pipeline that processes IMU data into a format suitable for machine
            learning. This includes cleaning the data, organizing it into time windows, and extracting patterns that
            correspond to different types of motion. At a high level, this allows the chip to answer a simple but
            important question: what is the bird doing at a given moment?
          </p>

          <figure>
            <img src={figure2} alt="IMU Data Stream" />
            <figcaption>
              <strong>Figure 2</strong>
              <br />IMU Data Stream
            </figcaption>
          </figure>

          <h2>Building and Training the Model</h2>

          <p>
            After establishing the data pipeline, the Software subteam focused on developing a model capable of
            classifying movement. The model is trained offline using labeled IMU data, where specific motion patterns
            correspond to known behaviors. Through training and validation, the model learns which features of the
            sensor data are most useful for distinguishing between different types of movement.
          </p>

          <p>
            An important consideration throughout this process is that accuracy alone is not sufficient. Larger and
            more complex models may perform well during testing but are not practical for deployment on a chip with
            limited resources. As a result, the team prioritized lightweight model architectures that achieve reliable
            classification while remaining feasible for on chip inference.
          </p>

          <h2>Efficiency Under Constraint</h2>

          <p>
            Software designed for embedded systems faces strict limitations on memory, processing power, and energy
            consumption. These constraints influenced every design decision made by the Software subteam.
          </p>

          <p>
            To operate within these limits, the team focused on efficiency across the entire pipeline. This included
            reducing model size, minimizing computational complexity during inference, and carefully selecting features
            that provide the most information at the lowest cost. In this context, efficiency is what enables real
            world deployment rather than just improved performance metrics. A technique used is quantization, which
            makes models smaller and more efficient.
          </p>

          <figure>
            <img src={figure3} alt="Logic behind Quantization of Neural Networks" />
            <figcaption>
              <strong>Figure 3</strong>
              <br />Logic behind Quantization of Neural Networks
            </figcaption>
          </figure>

          <h2>Results and Impact</h2>

          <p>
            By the end of the semester, the Software subteam successfully implemented a functional IMU based motion
            classification system capable of running directly on the chip. This system allows motion data to be
            interpreted in real time, providing meaningful behavioral insights without the need to transmit large
            volumes of raw sensor data. The modular design of the pipeline also supports integration with the work of
            other subteams as part of the full chip.
          </p>

          <p>
            Overall, the Software subteam demonstrated strong progress in bridging machine learning and embedded
            systems. Their work shows how carefully designed software can transform raw sensor data into actionable
            information, enabling low power chips to support real world wildlife research.
          </p>

        </div>
      </section>
    </main>
  );
}

export default AmbilaIMU;
