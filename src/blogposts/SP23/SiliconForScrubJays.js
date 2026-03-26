import React from "react";
import image1 from "./imgs/SiliconForScrubJays/image1.png";

function SiliconForScrubJays() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Silicon For Scrub Jays</h1>
            <h2>Chidera Wokonko and Abigail Varghese</h2>
            <h2 className="underline">April 16th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hi, my name is Abigail and I'm a Project Manager on C2S2...and Hi,
            I'm Chidera and I'm one of the team leads on C2S2. At the inception
            of this project team, we set out to create a custom silicon chip
            with an interdisciplinary focus in mind. We wanted to combine
            engineering and <i>something else</i> but we didn't know what that
            was going to be just yet. So we set out on this exploratory exercise
            across the Cornell Campus to figure out who we could team up with to
            embark on this epic adventure with us. We went from department to
            department seeking our partner; ranging from faculty in Veterinary
            medicine and human ecology to digital agriculture and beyond. From
            this campaign, we learned about super cool projects that individuals
            at Cornell were working on such as novel research of microwave
            heating of foods, employment of robots to aid in mitigating downy
            mildew disease, and utilization of AI to determine nitrogen quantity
            in crop fields. Although all the projects we heard about were
            fantastic and groundbreaking, we could not identify an insertion
            point for C2S2 in any of the work that was being done. This was
            mainly because of feasibility issues as many professors or research
            groups were hoping we could achieve an industry level IoT chip or
            had projects that wouldn't be able to utilize an IoT solution.
          </p>

          <p>
            At the end of the fall semester, the Project Management subteam had
            a design review to reflect on the progress made so far during the
            campus partner search. Although we contacted nearly 50 professors
            and research groups, we were still receiving a low response yield.
            From our design review, we also discussed that the possible reasons
            for our low response were due to many professors having limited
            availability and perceiving a campus partnership to be an additional
            significant time commitment to their already busy schedules. We
            quickly worked to shift our approach while searching for a campus
            partner. First, we made adjustments to our template email to reflect
            that a partnership was what the partner themselves wanted to make of
            the experience. We made sure to include more information about the
            team, specifically how we are tailoring towards a low-power IoT chip
            to help reduce the number of infeasible projects. We also continued
            to broaden our search by reaching out to graduate students and PhD
            students that were part of research groups that were utilizing IoT
            devices or could possibly utilize IoT solutions.
          </p>

          <p>
            At the start of the spring semester, we continued to implement
            changes by establishing milestones for the Campus Partner search
            such as deadlines for when we hoped to secure a possible partner and
            how many potential partners we wanted to contact and meet with each
            week. Shifting our approach yielded better results, as we not only
            were able to hear back from more possible partners, but we were also
            able to find more feasible projects for the team! We again were able
            to learn about some unique and interesting projects here on campus
            such as using virtual reality to reduce pollution from fast fashion
            and using IoT devices to help control water quality in fields. The
            digital agriculture team's research was really interesting and in
            the scope of C2S2 and currently working on using IoT devices to
            improve the denitrification process, however, we wanted to have a
            bigger challenge when creating our own design of a chip.
          </p>

          <figure>
            <img src={image1} alt="Scrub Jay" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Scrub Jay
            </figcaption>
          </figure>

          <p>
            Returning back to Professor Adams' - one of our faculty advisors -
            idea of possibly partnering with researchers at the Lab of
            Ornithology, we continued to reach out to professors as well as PhD
            students currently working at the lab. From our search process, we
            finally met with Christopher Tarango, a current PhD candidate at the
            Lab of Ornithology researching the relationship between Scrub Jay
            behavior and vocalizations. His current research requires him to tag
            Scrub Jays to reduce human interaction, which may affect bird
            behavior, as he collects recordings of their vocalizations. These
            current tags only collect audio recordings as well as data on a
            bird's relative acceleration. They also have a poor battery life
            which only allows for about 24 hours of recording. As a result,
            birds frequently must be lured, which is a long process and adds
            more variance in data as the luring process may change a bird's
            behavior and cause them to interact with other wildlife that they
            may not typically interact with.
          </p>

          <p>
            We finally reached the end of our quest for a campus partner as we
            realized that the challenges facing current tags utilized by Tarango
            and the Lab of Ornithology seemed like the perfect fit for C2S2 to
            design a chip for. The poor battery life of current tags aligns well
            with the team's hope to center our design toward a low-power IoT
            chip. Sensors on the current tag, as well as other tags used in
            research, such as the accelerometer and audio recorder already align
            with the "Sensor Shield" design created by the Systems Architecture
            team from the fall semester. Finally, creating a custom chip for a
            tag also poses additional design limitations that would provide more
            of a challenge for the team such as designing a chip that can obey
            the 5% rule, which requires a tag to be less than 5% of the bird's
            weight. So we set out on this exploratory exercise across the
            Cornell Campus to figure out who we could team up with to embark on
            this <i>epic</i> adventure with us...and we found the Lab of
            Ornithology. In the end, we decided to combine Engineering and the
            Scrub Jay!
          </p>
        </div>
      </section>
    </main>
  );
}

export default SiliconForScrubJays;
