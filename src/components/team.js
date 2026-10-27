import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import AlumniInfo from "../assets/json/alumni8.json";

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
    members: [
      { name: "Kai Imani", role: "Subteam Lead", img: kaiImani },
      { name: "Tiffany Li", img: tiffanyLi },
    ],
  },
  {
    id: "business-ops",
    name: "Business Operations Subteam",
    icon: "bi-briefcase",
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
    members: [
      { name: "Major Zangari", role: "Subteam Lead", img: majorZangari },
      { name: "Olesia Kuzdrovska", img: olesiaKuzdrovska },
    ],
  },
];

function Team() {
  const location = useLocation();
  const [activeSubteam, setActiveSubteam] = useState("all");
  const facultyAdvisors = [
    { name: "Prof. Christopher Batten", role: "Faculty Advisor", img: cb535 },
    { name: "Prof. Hunter Adams", role: "Faculty Advisor", img: vha3 },
    { name: "Prof. Mohamed I. Ibrahim", role: "Faculty Advisor", img: mibrahim },
  ];
  const teamLeads = [
    { name: "Alyssa Xu", role: "Team Lead", img: alysaXu },
    { name: "Joseph Wan", role: "Team Lead", img: josephWan },
  ];
  const teamMembers = subteams.flatMap((subteam) =>
    subteam.members.map((member) => ({
      ...member,
      subteamId: subteam.id,
      subteam: subteam.name.replace(" Subteam", ""),
    })),
  );
  const visibleMembers =
    activeSubteam === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.subteamId === activeSubteam);

  useEffect(() => {
    const requestedSubteam = location.hash.replace("#", "");
    if (subteams.some((subteam) => subteam.id === requestedSubteam)) {
      setActiveSubteam(requestedSubteam);
    }
  }, [location.hash]);

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
            <h2 id="leadership-title">Leadership</h2>
          </div>
          <div className="leadership-layout">
            <LeadershipPanel
              title="Faculty Advisors"
              icon="bi-mortarboard"
              people={facultyAdvisors}
              faculty
            />
            <LeadershipPanel
              title="Team Leads"
              icon="bi-people"
              people={teamLeads}
            />
          </div>
        </div>
      </section>

      <section className="team-atlas team-directory" aria-labelledby="team-members-title">
        <div className="container">
          <div className="team-section-heading" data-aos="fade-up">
            <h2 id="team-members-title">Team Members</h2>
          </div>
          <div className="team-directory__toolbar" data-aos="fade-up">
            <div className="chip-gallery-filters" role="group" aria-label="Filter team members by subteam">
              <button
                type="button"
                className={activeSubteam === "all" ? "chip-filter chip-filter--active" : "chip-filter"}
                aria-pressed={activeSubteam === "all"}
                onClick={() => setActiveSubteam("all")}
              >
                All
              </button>
              {subteams.map((subteam) => (
                <button
                  key={subteam.id}
                  id={subteam.id}
                  type="button"
                  className={activeSubteam === subteam.id ? "chip-filter chip-filter--active" : "chip-filter"}
                  aria-pressed={activeSubteam === subteam.id}
                  onClick={() => setActiveSubteam(subteam.id)}
                >
                  {subteam.name.replace(" Subteam", "")}
                </button>
              ))}
            </div>
            <span className="visually-hidden" role="status" aria-live="polite">
              Showing {visibleMembers.length} team {visibleMembers.length === 1 ? "member" : "members"}.
            </span>
          </div>
          <div className="team-directory__grid">
            {visibleMembers.map((member) => (
              <PersonCard
                key={`${member.subteamId}-${member.name}`}
                {...member}
                hoverRole
              />
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
              <h2>Alumni</h2>
              <p>
                Thanks to our amazing alumni who continue to support us!
              </p>
              <div className="team-alumni-preview">
                {AlumniInfo.slice(0, 12).map((alumni) => (
                  <AlumniPreviewCard
                    key={`${alumni.first}-${alumni.last}`}
                    {...alumni}
                  />
                ))}
              </div>
            </div>
            <Link to="/alumni" className="team-alumni-cta__link">
              View all alumni
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;

function LeadershipPanel({ title, icon, people, faculty = false }) {
  return (
    <div className="leadership-panel" data-aos="fade-up">
      <div className="leadership-panel__heading">
        <i className={`bi ${icon}`} aria-hidden="true"></i>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`leadership-panel__people leadership-panel__people--${faculty ? "faculty" : "leads"}`}>
        {people.map((member) => (
          <PersonCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

function PersonCard({
  name,
  role = "",
  subteam = "",
  img,
  compact = false,
  hoverRole = false,
}) {
  const socials = memberSocials[name] || {};
  const detail = [hoverRole ? "" : role, subteam].filter(Boolean).join(" · ");

  return (
    <div className={`person-card${compact ? " person-card--compact" : ""}`}>
      <div className="person-card__image-wrap">
        <LazyImage
          src={img}
          className="person-card__image"
          alt={name}
          onLoad={(event) => event.target.classList.add("loaded")}
        />
        {hoverRole && role && (
          <span className="person-card__hover-role">{role}</span>
        )}
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
        {detail && <span>{detail}</span>}
      </div>
    </div>
  );
}

function AlumniPreviewCard({
  first,
  last,
  position,
  years,
  major,
  employer,
  linkedin,
}) {
  return (
    <div className="alumni-card">
      <div className="name">{`${first} ${last}`}</div>
      {position && <div className="position">{position}</div>}
      {years && <div className="years">{years}</div>}
      {major && <div className="major">{major}</div>}
      {employer && <div className="employer">{employer}</div>}
      <div className="linkedin-container">
        {linkedin ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
            <span>LinkedIn</span>
          </a>
        ) : (
          <span className="no-linkedin">No LinkedIn profile</span>
        )}
      </div>
    </div>
  );
}
