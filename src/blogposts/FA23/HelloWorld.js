import React from "react";
import image1 from "./imgs/HelloWorld/image1.png";
import image2 from "./imgs/HelloWorld/image2.png";
import image3 from "./imgs/HelloWorld/image3.png";
import image4 from "./imgs/HelloWorld/image4.png";
import image5 from "./imgs/HelloWorld/image5.png";
import image6 from "./imgs/HelloWorld/image6.png";

function HelloWorld() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>
              Hello World! New Updates on Sponsorship Packet and Newsletter
            </h1>
            <h2>Taylor Do and Jason Wang</h2>
            <h2 className="underline">November 5th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hi everyone! My name is Taylor Do, and I am joined by Jason Wang; we
            are the newest members of the Project Management subteam of Cornell
            Custom Silicon Systems. In the first quarter of this semester, we
            primarily worked on the redesign of the sponsorship packet and the
            creation of a newsletter for alumni and sponsors. The first project
            that we will be reviewing in this blog post is the sponsorship
            packet.
          </p>

          <p>
            The purpose of a sponsorship packet for an engineering project team
            is to show the world who we are, what we do, and ultimately gain
            support for sustainable development. The previous PM team members
            and alumni put in efforts to develop a clear, concise, and
            professional packet (discussed in the
            <a href="https://c2s2.engineering.cornell.edu/blogposts/SP23/TheProcessOfAcquiringSponsors">
              previous blog post
            </a>
            ).
          </p>

          <p>
            As the team progressed this year, there were updates of different
            projects from each subteam, so our motivation was to design a new,
            clearer, and more informative version that matched C2S2's
            fast-evolving culture and actions. The previous packet used the
            iconic red and contrasting colors, but this year, we decided to go
            with a white background with red elements to enhance simplicity and
            aesthetics. We also incorporated more visual designs, graphs, and
            updated team pictures to guide the audience to quickly arrive at the
            main points while maintaining the joy of reading about our team.
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              Cover Page of the New Sponsorship Packet
            </figcaption>
          </figure>

          <p>
            Two additions to the existing structure are the "Message From Our
            Founders" page and the "Acknowledgement" page. As shown in Figure 2,
            the message page included Professor Batten and Dr. Adams' words on
            the story of C2S2 and our core values. Team lead Aidan followed with
            a paragraph to speak from the student perspective as well as lead
            into the purpose of this packet to seek support and subteam details.
            The addition of this page provides more context to our sponsors and
            reinforces C2S2's values and founding purposes that are demonstrated
            in the actions of the 6 subteams explained right after. Figure 3
            shows one of the subteams' pages - System Architecture! The addition
            of the "Past Achievement" session to the last version provides
            potential sponsors with the most updated team progress to be
            transparent about how their funds will help the team. For the
            "Sponsorship Tiers" page, we adjusted the amount based on the
            tape-out cost and changed the format to focus on the equivalent
            benefits of each level of support. Finally, we added an
            "Acknowledgment" page with essential contact information, campus
            partners, current sponsors, and team members' names.
          </p>

          <figure>
            <img src={image2} />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Message from our Founders Page
            </figcaption>
          </figure>

          <figure>
            <img src={image3} />
            <figcaption>
              <strong>Figure 3</strong>
              <br />
              System Architecture Subteam Page
            </figcaption>
          </figure>

          <figure>
            <img src={image4} />
            <figcaption>
              <strong>Figure 4</strong>
              <br />
              Sponsorship Tiers Page
            </figcaption>
          </figure>

          <figure>
            <img src={image5} />
            <figcaption>
              <strong>Figure 5</strong>
              <br />
              Acknowledgements Page
            </figcaption>
          </figure>

          <p>
            Working on the sponsorship packet was an experience practicing
            design skills using Canva and Figma, but it also prompted discussion
            within the PM team for holistic presentation and with other subteams
            to ensure concise updates from the technical aspect. The process of
            acquiring sponsorship is a pitching process, so it requires the
            packet to be clear, professional, and visually appealing. While
            making it, we also collected many photos with the help of subteams
            and made adjustments to them to align the design, e.g., the change
            of the analog subteam photo's black background to a white background
            for better presentation.
          </p>

          <p>
            The new packet will undergo some final updates and will be sent to
            sponsors when the project management team reaches out to companies
            in late fall and early spring, when the companies begin the
            financial year and allocate funds to new investments. The project
            management team will utilize a spreadsheet of companies and contacts
            to keep reaching out and expand our team's support network.
          </p>

          <p>
            The second project we worked on was making this semester's
            newsletter. The newsletter is a formal communication with both our
            alumni and current sponsors about the detailed progress of each
            subteam as well as some future plans. Previously, these updates were
            communicated through emails and other informal conversations, but
            the newsletter can fit in more technical information and has a
            better presentation with an additional documentation purpose. We
            began working on the template Jay created, and each member of the PM
            team focused on one or two subteams to communicate and research the
            ongoings of the subteam. Below is the digital subteam's newsletter
            page.
          </p>

          <figure>
            <img src={image6} />
            <figcaption>
              <strong>Figure 6</strong>
              <br />
              Digital Subteam Newsletter Page
            </figcaption>
          </figure>

          <p>
            The structure of the newsletter includes an introduction followed by
            each subteam's page. For each subteam, we wrote about their past
            achievements and ongoing projects. For example, the digital subteam
            is currently working on FFT optimization. To gain more information,
            PM members went to several subteam meetings and reached out to team
            leads for details of their progress. This process formed a big
            picture of C2S2 in general but also with adequate details to keep
            our alumni and sponsors updated with our ongoing improvements. After
            the recent design review, we adjusted our pace to focus on quality
            rather than quantity, making the newsletter per semester instead of
            monthly. Therefore, the project management team is getting ready to
            send out this version and starting to prepare for the next!
          </p>
        </div>
      </section>
    </main>
  );
}

export default HelloWorld;
