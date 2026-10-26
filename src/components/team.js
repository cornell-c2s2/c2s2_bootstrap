import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "./lazyimage.js";

//Advisors
import cb535 from "../assets/img/team/optimized/cb535.webp";
import vha3 from "../assets/img/team/optimized/vha3.webp";
import mibrahim from "../assets/img/team/optimized/mibrahim.webp";

// Current team members
import adiPrathapa from "../assets/img/team/optimized/Adi_Prathapa_agp96.webp";
import matteoBucci from "../assets/img/team/optimized/Matteo_Bucci_mrb357.webp";
import ridwanahHaque from "../assets/img/team/optimized/Ridwanah_Haque_rh736.webp";
import asherFred from "../assets/img/team/optimized/Asher_Fred_ajf273.webp";
import danielGabai from "../assets/img/team/optimized/Daniel_Gabai_dg779.webp";
import shehrozeKiani from "../assets/img/team/optimized/Shehroze_Kiani_szk7.webp";
import teresaChen from "../assets/img/team/optimized/Teresa_Chen_yc2877.webp";
import arjunSaini from "../assets/img/team/optimized/Arjun_Saini_ars437.webp";
import sumaiaJewena from "../assets/img/team/optimized/Sumaia_Jewena_saj93.webp";
import yifeiYan from "../assets/img/team/optimized/Yifei_Yan_yy2323.webp";
import cadenXu from "../assets/img/team/optimized/Caden_Xu_cx237.webp";
import danielKaminski from "../assets/img/team/optimized/Daniel_Kaminski_dgk64.webp";
import kaiImani from "../assets/img/team/optimized/Kai_Imani_kti3.webp";
import tiffanyLi from "../assets/img/team/optimized/Tiffany_Li.webp";
import majorZangari from "../assets/img/team/optimized/Major_Zangari_maz76.webp";
import olesiaKuzdrovska from "../assets/img/team/optimized/Olesia_Kuzdrovska_ok98.webp";
import alysaXu from "../assets/img/team/optimized/Alysa_Xu_ax52.webp";
import chelseaZhang from "../assets/img/team/optimized/Chelsea_Zhang_eyl47.webp";
import joanneChen from "../assets/img/team/optimized/Joanne_Chen_jc3658.webp";
import josephWan from "../assets/img/team/optimized/Joseph_Wan_jgw227.webp";
import michaelDierkes from "../assets/img/team/optimized/Michael_Dierkes_mwd59.webp";
import mohamedElmi from "../assets/img/team/optimized/Mohamed_Elmi_mae227.webp";
import jimingChen from "../assets/img/team/optimized/Jiming Chen_Digital.webp";
import linhAnhNguyen from "../assets/img/team/optimized/Linh Anh Nguyen.webp";
import rohanKalluraya from "../assets/img/team/optimized/Rohan_Kalluraya_rak298.webp";
import danielPenasVarela from "../assets/img/team/optimized/Daniel_Penas_Varela_dp665.webp";
import edwinChen from "../assets/img/team/optimized/Edwin_Chen_ec769.webp";
import ivanMokeyev from "../assets/img/team/optimized/Ivan_Mokeyev_ism27.webp";
import josephJuniorMensah from "../assets/img/team/optimized/Joseph_Junior_Mensah_jjm536.webp";
import tyroneChen from "../assets/img/team/optimized/Tyrone_Chen_tc724.webp";
import anikaSukthankar from "../assets/img/team/optimized/Anika Sukthankar.webp";
import adityaRao from "../assets/img/team/optimized/Aditya_Rao_agr92.webp";
import kateSanders from "../assets/img/team/optimized/Kate Sanders_RFIC.webp";
import seanWhelan from "../assets/img/team/optimized/Sean_Whelan_sgw49.webp";
import taylorDo from "../assets/img/team/optimized/Taylor_Do_txd3.webp";
import waliAfridi from "../assets/img/team/optimized/Wali_Afridi_wua3.webp";

const memberSocials = {
  "Stella Zhou": {
    linkedin: "https://www.linkedin.com/in/stella-zhou-578811332",
    github: "https://github.com/StellarLyyd",
  },
  "Jonathan Song": {
    linkedin: "https://www.linkedin.com/in/jonathan-s-song",
    github: "https://github.com/lontans",
  },
  "Ahrar Sameeo": {
    linkedin: "https://www.linkedin.com/in/ahrar-sameeo-8ab18a2a6",
  },
  "Adi Prathapa": {
    linkedin: "https://www.linkedin.com/in/adi-prathapa",
    github: "https://github.com/adiprathapa",
  },
  "Matteo Bucci": {
    linkedin: "https://www.linkedin.com/in/matteorbucci",
  },
  "Michael Dierkes": {
    linkedin: "https://www.linkedin.com/in/michael-dierkes",
  },
  "Alina Lee": {
    linkedin: "https://www.linkedin.com/in/alinalee8",
  },
  "Jiming Chen": {
    linkedin: "https://www.linkedin.com/in/jiming-chen",
    github: "https://github.com/jjc256",
  },
  "Ritika Roy": {
    linkedin: "https://www.linkedin.com/in/ritika-roy-72083a282",
    github: "https://github.com/RitikaRoy72",
  },
  "Leo Qian": {
    linkedin: "https://www.linkedin.com/in/leoqian28",
    github: "https://github.com/Runxin0503",
  },
  "Winnie Chen": {
    linkedin: "https://www.linkedin.com/in/winnie-chen-81a072385",
  },
  "Sean Whelan": {
    linkedin: "https://www.linkedin.com/in/seanwhelan10",
  },
  "Alyssa Xu": {
    linkedin: "https://www.linkedin.com/in/xualyssa",
  },
  "Kate Xue": {
    linkedin: "https://www.linkedin.com/in/kate-xue",
  },
  "Svetlana Gupta": {
    linkedin: "https://www.linkedin.com/in/svetlana-gupta-288419395",
  },
};

const seniorAdvisors = [
  { name: "Edwin Chen", role: "PD", img: edwinChen },
  { name: "Caden Xu", role: "Analog", img: cadenXu },
  { name: "Daniel Kaminski", role: "Analog", img: danielKaminski },
  { name: "Taylor Do", role: "RFIC", img: taylorDo },
  { name: "Wali Afridi", role: "RFIC", img: waliAfridi },
  { name: "Anika Sukthankar", role: "DV", img: anikaSukthankar },
];

const subteams = [
  {
    id: "analog",
    name: "Analog Subteam",
    icon: "bi-speedometer2",
    description:
      "Building the analog interfaces that connect our chips to the physical world.",
    members: [
      { name: "Kai Imani", role: "Subteam Lead", img: kaiImani },
      { name: "Tiffany Li", img: tiffanyLi },
    ],
  },
  {
    id: "business-ops",
    name: "Business Operations Subteam",
    icon: "bi-briefcase",
    description:
      "Keeping the team funded, connected, organized, and ready for what comes next.",
    members: [
      { name: "Ridwanah Haque", role: "Subteam Lead", img: ridwanahHaque },
      { name: "Adi Prathapa", img: adiPrathapa },
      { name: "Matteo Bucci", img: matteoBucci },
    ],
  },
  {
    id: "design-verification",
    name: "Design Verification Subteam",
    icon: "bi-shield-check",
    description:
      "Proving our designs behave as intended before they become silicon.",
    members: [
      {
        name: "Daniel Penas Varela",
        role: "Subteam Lead",
        img: danielPenasVarela,
      },
      { name: "Rohan Kalluraya", role: "Subteam Lead", img: rohanKalluraya },
      { name: "Jiming Chen", img: jimingChen },
      { name: "Linh Anh Nguyen", img: linhAnhNguyen },
    ],
  },
  {
    id: "physical-design",
    name: "Physical Design Subteam",
    icon: "bi-layers",
    description:
      "Turning logical designs into layouts that are ready for fabrication.",
    members: [
      { name: "Ivan Mokeyev", role: "Subteam Lead", img: ivanMokeyev },
      { name: "Joseph Junior Mensah", img: josephJuniorMensah },
      { name: "Tyrone Chen", img: tyroneChen },
      { name: "Daniel Gabai", img: danielGabai },
    ],
  },
  {
    id: "platforms",
    name: "Platforms Subteam",
    icon: "bi-motherboard",
    description:
      "Creating the boards, tools, and systems that bring our chips to life.",
    members: [
      { name: "Joanne Chen", role: "Subteam Lead", img: joanneChen },
      { name: "Mohamed Elmi", role: "Subteam Lead", img: mohamedElmi },
      { name: "Michael Dierkes", img: michaelDierkes },
      { name: "Chelsea Zhang", img: chelseaZhang },
      { name: "Alyssa Xu", img: alysaXu },
    ],
  },
  {
    id: "rf",
    name: "RF Subteam",
    icon: "bi-router",
    description:
      "Designing high-frequency circuits for sensing and wireless communication.",
    members: [
      { name: "Kate Sanders", role: "Subteam Lead", img: kateSanders },
      { name: "Aditya Rao", role: "Subteam Lead", img: adityaRao },
      { name: "Sean Whelan", role: "Subteam Lead", img: seanWhelan },
    ],
  },
  {
    id: "rtl-design",
    name: "RTL Design Subteam",
    icon: "bi-cpu",
    description:
      "Describing and architecting the digital hardware at the heart of our chips.",
    members: [
      { name: "Ethan (Yifei) Yan", role: "Subteam Lead", img: yifeiYan },
      { name: "Sumaia Jewena", role: "Subteam Lead", img: sumaiaJewena },
      { name: "Arjun Saini", img: arjunSaini },
      { name: "Teresa Chen", img: teresaChen },
      { name: "Shehroze Kiani", img: shehrozeKiani },
      { name: "Asher Fred", img: asherFred },
      { name: "Joseph Wan", img: josephWan },
    ],
  },
  {
    id: "software",
    name: "Software Subteam",
    icon: "bi-code-slash",
    description:
      "Building the software stack that makes our custom hardware useful.",
    members: [
      { name: "Major Zangari", role: "Subteam Lead", img: majorZangari },
      { name: "Olesia Kuzdrovska", img: olesiaKuzdrovska },
    ],
  },
];

function Team() {
  const facultyAdvisors = [
    { name: "Prof. Christopher Batten", role: "Faculty Advisor", img: cb535 },
    { name: "Prof. Hunter Adams", role: "Faculty Advisor", img: vha3 },
    { name: "Prof. Mohamed I. Ibrahim", role: "Faculty Advisor", img: mibrahim },
  ];
  const teamLeads = [
    { name: "Alyssa Xu", role: "Team Lead", img: alysaXu },
    { name: "Joseph Wan", role: "Team Lead", img: josephWan },
  ];

  return (
    <main id="main" className="team-page">
      <section id="team" className="breadcrumbs team-page-header">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h1>Meet the Team</h1>
            <p className="team-page-intro">
              C2S2 would not be possible without the amazing people who
              contribute to its success.
            </p>
          </div>
        </div>
      </section>

      <section className="team-leadership" aria-labelledby="leadership-title">
        <div className="container">
          <div className="team-section-heading" data-aos="fade-up">
            <span>Guiding C2S2</span>
            <h2 id="leadership-title">Leadership</h2>
          </div>
          <div className="leadership-layout">
            <LeadershipPanel
              eyebrow="Mentorship"
              title="Faculty Advisors"
              icon="bi-mortarboard"
              people={facultyAdvisors}
              faculty
            />
            <LeadershipPanel
              eyebrow="Direction"
              title="Team Leads"
              icon="bi-people"
              people={teamLeads}
            />
          </div>
        </div>
      </section>

      <section className="team-atlas" aria-labelledby="subteams-title">
        <div className="container">
          <div className="team-section-heading" data-aos="fade-up">
            <span>How we work</span>
            <h2 id="subteams-title">Explore our subteams</h2>
            <p>
              Different disciplines, one tapeout. Each subteam owns a critical
              part of the journey from idea to working silicon.
            </p>
          </div>
          <div className="team-atlas__grid">
            {subteams.map((subteam, index) => (
              <SubteamCard key={subteam.id} index={index} {...subteam} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="senior-advisors"
        className="senior-advisors"
        aria-labelledby="senior-advisors-title"
      >
        <div className="container">
          <div className="team-section-heading team-section-heading--centered" data-aos="fade-up">
            <span>Experience that carries forward</span>
            <h2 id="senior-advisors-title">Senior Advisors</h2>
          </div>
          <div className="senior-advisors__grid" data-aos="fade-up">
            {seniorAdvisors.map((advisor) => (
              <PersonCard key={advisor.name} {...advisor} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-alumni-cta">
        <div className="container">
          <div className="team-alumni-cta__card" data-aos="fade-up">
            <div>
              <span className="team-alumni-cta__eyebrow">Part of the C2S2 story</span>
              <h2>Built by generations of students</h2>
              <p>
                Meet the alumni whose work and mentorship continue to shape our team.
              </p>
            </div>
            <Link to="/alumni" className="team-alumni-cta__link">
              Explore our alumni
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;

function LeadershipPanel({ eyebrow, title, icon, people, faculty = false }) {
  return (
    <div className="leadership-panel" data-aos="fade-up">
      <div className="leadership-panel__heading">
        <i className={`bi ${icon}`} aria-hidden="true"></i>
        <div>
          <span>{eyebrow}</span>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`leadership-panel__people${faculty ? " leadership-panel__people--faculty" : ""}`}>
        {people.map((member) => (
          <PersonCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

function SubteamCard({ id, name, icon, description, members, index }) {
  const isWide = members.length >= 5;

  return (
    <article
      id={id}
      className={`subteam-card${isWide ? " subteam-card--wide" : ""}`}
      data-aos="fade-up"
    >
      <div className="subteam-card__header">
        <div className="subteam-card__icon">
          <i className={`bi ${icon}`} aria-hidden="true"></i>
        </div>
        <div>
          <span>{members.length} team members</span>
          <h3>{name.replace(" Subteam", "")}</h3>
        </div>
        <span className="subteam-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="subteam-card__description">{description}</p>
      <div className="subteam-card__members">
        {members.map((member) => (
          <PersonCard key={member.name} {...member} compact />
        ))}
      </div>
    </article>
  );
}

function PersonCard({ name, role = "", img, compact = false }) {
  const socials = memberSocials[name] || {};

  return (
    <div className={`person-card${compact ? " person-card--compact" : ""}`}>
      <div className="person-card__image-wrap">
        <LazyImage
          src={img}
          className="person-card__image"
          alt={name}
          onLoad={(event) => event.target.classList.add("loaded")}
        />
        {(socials.github || socials.linkedin) && (
          <div className="person-card__socials">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}>
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            )}
          </div>
        )}
      </div>
      <div className="person-card__info">
        <h4>{name}</h4>
        {role && <span>{role}</span>}
      </div>
    </div>
  );
}
