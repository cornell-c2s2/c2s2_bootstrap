import React from "react";
import image1 from "./imgs/ChipChatter/image1.png";
import image2 from "./imgs/ChipChatter/image2.png";
import image3 from "./imgs/ChipChatter/image3.png";

function ChipChatter() {
    return (
        <main id="main">

            <section id="apply" className="breadcrumbs">
                <div className="container">

                    <div className="section-title">
                        <h1>Chip Chatter</h1>
                        <h2>Abigail Varghese and Adele Thompson</h2>
                        <h2 clasName="underline">March 30, 2024</h2>
                    </div>

                </div>
            </section>

            <section className="inner-page blog-post">
                <div className="container">
                    <p>
                        Hi, my name is Adele and my name is Abigail, and we both are members of C2S2's Project Management subteam. In our last
                        post, we assisted the System Architecture team in creating a system diagram of what the team's proposed proof of concept
                        chip, tailored to our campus partner, would look like. There still are a few moving pieces with projects, but the system
                        diagram was updated to include the Software subteam's classifier, which determines if a bird call is a Scrub Jay or not,
                        and System Architecture's particle board as a method of offloading data. The most updated diagram was presented to the
                        team during the final presentation towards the end of the Fall 2023 semester by System Architecture. With projects for
                        each subteam now catered specifically towards the campus partner and the team preparing for taping out chips this
                        semester, one of Project Management's primary focuses has transitioned back to collaborating with our campus partner.
                        Additionally, we wanted to ensure that he was equally as informed of the team's efforts so that we could all be on the
                        same page and address concerns or potential issues early on during the design process.
                    </p>

                    <p>
                        To better facilitate the collaboration between C2S2 and the campus partner, we primarily worked on updating our campus
                        partner on the team's progress and the system diagram. To effectively communicate a high-level overview and get more
                        members of Project Management involved with sharing the technical milestones and works of the team, each member of
                        Project Management spent time sitting in different subteam meetings and talking with members about their projects to
                        learn about recent progress. Additionally, we each met with Abigail and Akshati to learn more details about the system
                        diagram to have a thorough understanding of the inner workings of the chip and to be able to discuss further
                        modifications with the campus partner.
                    </p>

                    <figure>
                        <img src={image1} />
                        <figcaption><strong>Figure 1</strong><br />Updated Systems Diagram by the System Architecture Subteam</figcaption>
                    </figure>

                    <p>
                        During our meeting with the campus partner, we were not only able to explain some of the key features of our system
                        diagram, but also discuss and address some of his concerns. One of the main concerns we discussed was more about the
                        team's classifier and the idea of having different modes of functionality to address the challenge of limited battery
                        life. Although this is still a work in progress for the team, one of the team's proposed solutions to lengthen the
                        deployment period of a tag was to implement various modes of activity for the tag such as a sleep mode in addition to
                        the traditional on and off mode. In this sleep mode, the tag would remain on but be reduced in functionality. More
                        specifically, the tag would not be recording all audio data and instead would remain on standby waiting for the right
                        conditions, such as the call of a Scrub Jay, determined by Digital's classifier, to turn on and start actively recording
                        data. This was a point of concern for the campus partner because currently in his research, he listens through all of
                        the recorded audio samples for a variety of sounds beyond the calls of a Scrub Jay to better answer what type of call
                        they are vocalizing and determine how different calls relate to their behavior or interactions with other Scrub Jays.
                        For example, we learned that he might listen to some noises from the environment like the wind and trees to get a better
                        understanding of how the bird may be interacting with its environment such as flying or hopping between branches. Based
                        on our conversations, we also learned that having the additional background noise may provide insight into what other
                        birds it may be communicating with. Moreover, because his research in linking Scrub Jay vocal calls with their behavior
                        and movement can be rather broad, there is a wide variety of possible sounds of interest, so it would be up to the team
                        to decide what we thought would be interesting for our tag to switch to an alert mode to start recording data.
                    </p>

                    <figure>
                        <img src={image2} />
                        <figcaption><strong>Figure 2</strong><br />Scrub Jay. Photo taken by Christopher Tarango</figcaption>
                    </figure>

                    <p>
                        Although our idea of multiple modes for the tag, especially the concept of not recording all the data, may not align
                        with the specific research objectives of our campus partner, it is in line with our collaboration agreement to develop a
                        chip that addresses the challenges outlined by our campus partner. From these discussions, the campus partner has
                        provided invaluable support by offering data, such as recordings collected with his current tags and sounds of interest.
                        He also has been providing his general insight into other details we should be considering. For instance, we were able
                        to learn and share more information on general Scrub Jay behavior, including typical activity patterns and frequency of
                        vocalizations with the team. The discussions with the campus partner have also prompted us to explore additional
                        criteria while developing classifiers, such as sound amplitude, to determine the tag's operational mode. This
                        collaborative exchange of knowledge ensures that the team's chip remains informed by real-world observations and aligns
                        with the overarching goals of our partnership.
                    </p>

                    <figure>
                        <img src={image3} />
                        <figcaption><strong>Figure 3</strong><br />Spectrogram of Rattle Call from <br /> Christopher Tarango</figcaption>
                    </figure>

                    <p>
                        Beyond conversations between Project Management and the campus partner to increase collaboration between the team and
                        the Lab of Ornithology, we are happy to announce that the campus partner is finally active on Slack. This step allows
                        any other members of the team to be able to directly contact him with quick questions, such as the technical details
                        about his research as they are working on projects, without necessarily having to wait for a member of Project
                        Management to coordinate a meeting. This speeds up answering any questions so that subteams can work faster toward their
                        goals. In similar news, we also were able to coordinate having the campus partner attend an all-team meeting to present
                        his work to the team. This was helpful for the team to be able to directly ask any questions they might have based on
                        his current research and data findings. With this, the team also gained more insight into what is meant by "good" versus
                        "bad" background noise as well as the particular Rattle Call that he studies. Moving forward, we still will be working
                        on building the team's partnership with the campus partner and the Lab of Ornithology, as well as developing Project
                        Management's skills in facilitating collaboration and communication by continuing to have these discussions with the
                        campus partner and checking in with subteams.
                    </p>
                </div>
            </section>
        </main>)
}

export default ChipChatter