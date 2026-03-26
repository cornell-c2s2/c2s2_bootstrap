import React from "react";
import image1 from "./imgs/TechnicalPM/image1.png";
import image2 from "./imgs/TechnicalPM/image2.png";
import image3 from "./imgs/TechnicalPM/image3.jpg";
import image4 from "./imgs/TechnicalPM/image4.png";
import image5 from "./imgs/TechnicalPM/image5.png";
import image6 from "./imgs/TechnicalPM/image6.png";

function TechnicalPM() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Sync & Innovate: Technical PM Applied</h1>
            <h2>Taylor Do and Jason Wang</h2>
            <h2 className="underline">May 7, 2024</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hi, I'm Taylor, and my name is Jason. We're both part of the C2S2
            Project Management subteam. In our last blog post, we discussed our
            initial project, which involved redesigning the sponsorship packet
            and newsletter for our sponsors and alumni. By updating the design
            and incorporating technical details about the subteams' achievements
            and goals, we provided a visually appealing and informative snapshot
            of C2S2's current initiatives. This revamped sponsorship packet
            proved important in facilitating a prompt response to a potential
            collaboration opportunity with Synopsys.
          </p>

          <p>
            This semester, as all subteams forge ahead with new projects, the PM
            team has focused on enhancing external communications and keeping
            our documents up-to-date. An important update was adding an all-team
            photo taken after we received our merchandise at the semester's
            start. These photos have been utilized in various events and
            outreach materials, such as the Intel presentation and our
            sponsorship packet. Reflecting on feedback from last fall's pitch
            demo, we realized the importance of balancing both the people side
            and the technical work side when presenting ourselves to the
            outside. Throughout the semester, we frequently captured moments of
            collaboration and daily activities in the ELL, especially during
            chip testing, CNF training sessions, and social events. These
            images, showcasing our team in C2S2 shirts, strengthen our
            collective identity.
          </p>
          <p>
            Additionally, we attended subteam meetings and design reviews to
            gather information about ongoing projects, which helped us provide a
            richer narrative in our updated newsletter. The newsletter now
            includes detailed accounts of past achievements and current
            objectives for the spring semester, while the sponsorship packet
            remains a concise summary designed to spark corporate interest.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Spring 2024 Newsletter With All-Team Photo
            </figcaption>
          </figure>

          <figure>
            <img src={image2} />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Sponsorship Packet New Digital Subteam Page
            </figcaption>
          </figure>

          <p>
            On March 22nd, C2S2 hosted an event with AMD experts and several ECE
            alumni to discuss our progress and gain insights into industry
            practices. Mr. Kashem's lecture on design thinking, illustrated
            through the simple example of a ball pen, emphasized the importance
            of project management in defining outcomes, addressing team needs,
            planning events, and engaging with stakeholders-vital for many
            organizations' success. During the dinner, Taylor, Abigail, Adele,
            and I engaged Mr. Kashem in a discussion about AMD's project
            management practices. He mentioned that AMD has more specialized
            project groups and advised us to maintain a higher than current PM
            member ratio to facilitate design. He also recommended the use of
            Gantt charts and communication methods that have proven effective at
            AMD. His insights affirmed the value of our work and provided
            guidance on improving subteam communication and managing external
            events.
          </p>

          <figure>
            <img src={image3} />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              C2S2 AMD Event Dinner Social
            </figcaption>
          </figure>

          <p>
            This spring, we also explored more visual and interactive methods to
            communicate our work and team to the broader Cornell community and
            beyond. Following the high interest shown by Cornell students and
            high schoolers in our fall community engagement event, we recognized
            the need for more accessible information. During the giving day, we
            collected concise updates from subteam leads and combined this with
            footage to create a video for C2S2, which was shared on Instagram
            and will soon be available on our website. We are also developing
            new content, including videos on CNF training and chip imaging, to
            enrich our online presence further.
          </p>

          <figure>
            <img src={image4} />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              Giving Day Video Screenshot
            </figcaption>
          </figure>

          <p>
            As we interacted with various subteams to understand their technical
            projects, our Project Management team is evolving to embrace more
            technical aspects and has discovered a passion for projects like RF
            design. The RFIC project being pursued by C2S2 has been in the
            making since the beginning of the Winter break of the 2023-24
            academic year. The thought process for this technical expansion of
            the team follows from the new tools developed for the SKY130 PDK and
            the previous projects that the analog team has pursued. In November
            2023, Cadence and Skywater announced that they have collaborated
            with one another to release a Cadence-compatible version of the
            SKY130 PDK; this would allow us to add many of Cadence's tools and
            features for more advanced projects that C2S2 would like to pursue.
            This would include an expansion into RF systems, which would
            normally require advanced electromagnetic simulations that we
            currently do not have access to. In addition, most of our past
            analog projects have been in the realm of mixed-signal design; to
            diversify team members' learning experiences, we would also like to
            introduce and cultivate RF experience on the team. This semester,
            Taylor has been the main student working on setting up this project,
            which includes creating a system-level overview of what this RF
            module would look like and setting up the tools that would be used
            in designing the RF module at the transistor level (Cadence Virtuoso
            and EMX).
          </p>

          <figure>
            <img src={image5} />
            <figcaption>
              <strong>Figure 5</strong>
              <br />
              Snapshot of Project Reference Guide to the RFIC Project for
              incoming members
            </figcaption>
          </figure>

          <p>
            The goal is to design a 915MHz transmitter with a wake-up receiver.
            If we can finish the complete design, layout, and simulations for
            the project earlier than expected, we may also look into making the
            design more complex by adding an I/Q modulated receiver in addition
            to the wake-up receiver; however, this idea is still in progress
            and, thus, is subject to what we can achieve in a given amount of
            time. We plan to begin the transistor-level design of this project
            in the summer of 2024 with a tape-out deadline of the following
            academic year (i.e., May 2025).
          </p>

          <figure>
            <img src={image6} />
            <figcaption>
              <strong>Figure 6</strong>
              <br />
              Quick Simulation of Transmission Line using EMX (characteristic
              impedance = ~50 ohms)
            </figcaption>
          </figure>
          <p>
            It is important to make it clear that the analog team is not
            shifting from open-source tools to commercial tools; for this
            project, we are using Cadence tools specifically because designing
            an RF module is already quite difficult for a group of undergraduate
            students to succeed in; thus we do not want to make the project more
            difficult by using purely open-source tools which may risk the
            incompletion of the project. In particular, an accurate
            electromagnetic simulator, such as EMX, is needed to simulate our
            RFIC designs and account for the parasitics that will arise from our
            layout. Without this tool, the project's success would decrease
            significantly as there is no comparable open-source analogue. The
            mixed-signal portion of the project team will likely continue using
            open-source EDA tools for the foreseeable future.
          </p>

          <p>
            Overall, our enhancements in external communications and the
            initiation of the RFIC project are some of the work and highlights
            of combining strategic engagement with technical innovation in
            project management. Thanks for reading; we look forward to a bright
            future for C2S2!
          </p>
        </div>
      </section>
    </main>
  );
}

export default TechnicalPM;
