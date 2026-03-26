import React from "react";
import image1 from "./imgs/TheProcessOfAcquiringSponsors/image1.png";
import image2 from "./imgs/TheProcessOfAcquiringSponsors/image2.png";

function TheProcessOfAcquiringSponsors() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>The Process of Acquiring Sponsors</h1>
            <h2>Jasmine Samadi and Jay Patel</h2>
            <h2 className="underline">March 19th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hello everyone! In this blog post we are going to take you through
            the journey of developing a sponsorship packet, formulating email
            drafts, and ultimately acquiring the sponsorship.
          </p>

          <p>
            The first step in this process is to create a sponsorship packet. In
            creating this packet, one must think about what they want to show to
            the world about their team. Ultimately we broke it up into 4
            categories: About Us, Our Subteams, Sponsorship Details, Contact Us.
            To organize the packet, we included a table of contents with each of
            the categories.
          </p>

          <p>
            The most challenging part of the design process was making sure that
            we had a design that was inclusive to all while being aesthetically
            pleasing. Our main colors are dark red, black and white. This was
            tricky because for some, the dark red is not visible over a black
            background. Furthermore, sticking to a black or red background with
            white text was rather mundane. So we used{" "}
            <a href="https://webaim.org/resources/contrastchecker/">a tool</a>{" "}
            to figure out which colors are definitely visible over certain
            backgrounds. In the process we realized that it is not necessarily
            about the color, rather the contrast.
          </p>

          <figure>
            <img src={image1} alt="Who We Are page" />
            <figcaption>
              <strong>Figure 1</strong>
              <br />
              "Who We Are" page
            </figcaption>
          </figure>

          <p>
            In the process of experimenting with different colors and contrasts,
            we ended up introducing gold and blue, as represented on the 'Who We
            Are' page to the left. The image we used is a picture from our first
            team social. In addition, the pie chart is included to let potential
            sponsors aware of the breakdown of the team.
          </p>

          <figure>
            <img src={image2} alt="Example Subteam Page" />
            <figcaption>
              <strong>Figure 2</strong>
              <br />
              Example Subteam Page
            </figcaption>
          </figure>

          <p>
            Expressing the team's work in a creative way was key for this
            project! To emphasize the subteams, we kept the words on each page
            minimal. On each page there is a brief (1-3 sentences) explanation
            of the sub-team. We made sure that this was new information that
            differed from what is on our website. On each page we also highlight
            a project that the team is currently working on. This includes a
            brief description and an engaging image. This way potential sponsors
            can get a better understanding of what each subteam is doing and the
            impact they are making. Furthermore, for aesthetic purposes, we
            rounded the edges of the team pictures and gave a shout out to the
            team lead!
          </p>

          <p>
            The last main design aspect included the sponsorship details.
            Ultimately, we decided that the best way to approach the sponsorship
            benefits was to have each tier mutually benefit the sponsors and
            students. Some of these benefits include hosting recruitment events,
            access to our resume book, and a social media spotlight. In terms of
            tiers, we wanted to go with fun names that reflected the team. From
            the least to most expensive tier the names include: Solder, Iron,
            Copper, and Silicon. Obviously Silicon is the best tier because we
            are Cornell Custom Silicon Systems. To display this information, we
            created a checklist with X and check icons for each benefit.
          </p>

          <p>
            Furthermore, when we decided to reach out to companies in hopes of
            getting sponsorship, it was important for us to be clear, concise,
            and professional. To do this we came up with a template that
            resembled those ideas and began by introducing ourselves and the
            team's initiatives. We then explained why we were reaching out and
            the ways the company could contribute if it wished to do so. We
            asked companies to contribute in two main ways, the first being a
            monetized sponsorship to help the team with its chip-design
            initiatives. The second form of sponsorship is an in-kind
            sponsorship. This would allow the company to contribute by offering
            goods or services (in the forms of machines or specific hardware/
            software that we may use). We then went on to outline the benefits
            the company will receive by sponsoring our project team; by the
            means of tax deductions for the sponsorship amount, the ability to
            host recruitment events for our members, and a spotlight for the
            company via our website/ social media. We also made sure to provide
            clear details for the benefits the company received on the
            sponsorship package we were offering by designating tiers for the
            sponsored amount of funding. Finally, at the end of the email, we
            expressed our gratitude for the company's consideration and provided
            our contact information for further communication. By creating this
            template, we were able to increase our chances of securing a
            successful sponsorship and have reached out to over 120 companies in
            total over the past few weeks.
          </p>
        </div>
      </section>
    </main>
  );
}

export default TheProcessOfAcquiringSponsors;
