import React from "react";
import LazyImage from "./lazyimage.js";

//Advisors
import cb535 from "../assets/img/team/optimized/cb535.webp";
import vha3 from "../assets/img/team/optimized/vha3.webp";
import mibrahim from "../assets/img/team/optimized/mibrahim.webp";
import akv45 from "../assets/img/team/optimized/akv45.webp";
import acm289 from "../assets/img/team/optimized/acm289.webp";

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
import anikaSukthankar from "../assets/img/team/optimized/Anika Sukthankar_PM.webp";
import adityaRao from "../assets/img/team/optimized/Aditya_Rao_agr92.webp";
import kateSanders from "../assets/img/team/optimized/Kate Sanders_RFIC.webp";
import seanWhelan from "../assets/img/team/optimized/Sean_Whelan_sgw49.webp";
import taylorDo from "../assets/img/team/optimized/Taylor_Do_txd3.webp";
import waliAfridi from "../assets/img/team/optimized/Wali_Afridi_wua3.webp";

//Alumni
import AlumniInfo from "../assets/json/alumni8.json";

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
  return (
    <main id="main">
      <section id="team" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Meet the Team</h1>
          </div>
        </div>
      </section>
      <section id="team" className="team">
        <div className="container">
          <div className="inner-page" data-aos="fade-up">
            <p>
              C2S2 would not be possible without all of the amazing people that
              contribute to its success
            </p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Prof. Christopher Batten"
              role="Faculty Advisor"
              img={cb535}
              github=""
              linkedin=""
            />
            <TeamMember
              name="Prof. Hunter Adams"
              role="Faculty Advisor"
              img={vha3}
              github=""
              linkedin=""
            />
            <TeamMember
              name="Prof. Mohamed I. Ibrahim"
              role="Faculty Advisor"
              img={mibrahim}
              github=""
              linkedin=""
            />
            <TeamMember
              name="Abigail Varghese"
              role="Former Team Lead"
              img={akv45}
              github=""
              linkedin="https://www.linkedin.com/in/abigail-varghese-589b49244/"
            />
            <TeamMember
              name="Aidan McNay"
              role="Former Team Lead"
              img={acm289}
              github="https://github.com/Aidan-McNay"
              linkedin="https://www.linkedin.com/in/aidan-mcnay-0ba928201/"
            />
            <TeamMember
              name="Daniel Kaminski"
              role="Former Team Lead"
              img={danielKaminski}
              github=""
              linkedin=""
            />
            <TeamMember
              name="Alyssa Xu"
              role="Team Lead"
              img={alysaXu}
              github=""
              linkedin=""
            />
            <TeamMember
              name="Joseph Wan"
              role="Team Lead"
              img={josephWan}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      {subteams.map((subteam) => (
        <SubteamSection key={subteam.id} {...subteam} />
      ))}

      <section id="senior-advisors" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-mortarboard"></i>
            <p>Senior Advisors</p>
          </div>

          <div className="row justify-content-center">
            {seniorAdvisors.map((advisor) => (
              <TeamMember
                key={advisor.name}
                name={advisor.name}
                role={advisor.role}
                img={advisor.img}
                github=""
                linkedin=""
              />
            ))}
          </div>
        </div>
      </section>

      <section className="alumni-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Alumni</p>
          </div>
          <div className="inner-page" data-aos="fade-up">
            <p>Thanks to our amazing Alumni who continue to support us!</p>
          </div>

          <div className="alumni-grid">
            {AlumniInfo.map((alumni, index) => {
              return <AlumniCard key={index} {...alumni} />;
            })}
          </div>
          <div className="alumni-button-container">
            <a href="/alumni" className="btn-get-started scrollto">
              View All Alumni
            </a>
          </div>
        </div>
      </section>

      {/* <AlumniCompanies /> */}
    </main>
  );
}

export default Team;

function SubteamSection({ id, name, icon, members }) {
  return (
    <section id={id} className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <i className={`bi ${icon}`}></i>
          <p>{name}</p>
        </div>

        <div className="row justify-content-center">
          {members.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role || ""}
              img={member.img}
              github=""
              linkedin=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember(prop) {
  return (
    <div
      className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="member">
        <LazyImage
          src={prop.img}
          className="img-fluid"
          alt={prop.name}
          onLoad={(e) => e.target.classList.add("loaded")}
        />
        <div className="member-info">
          <div
            className={
              prop.github == "" && prop.linkedin == ""
                ? "member-info-content-no-social"
                : "member-info-content"
            }
          >
            <h4>{prop.name}</h4>
            {prop.role == "" ? "" : <span>{prop.role}</span>}
          </div>
          {prop.github == "" && prop.linkedin == "" ? (
            ""
          ) : (
            <div className="social">
              {prop.github == "" ? (
                ""
              ) : (
                <a target="_blank" href={prop.github}>
                  <i className="bi bi-github"></i>
                </a>
              )}
              {prop.linkedin == "" ? (
                ""
              ) : (
                <a target="_blank" href={prop.linkedin}>
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AlumniCard(prop) {
  return (
    <div className="alumni-card" data-aos="zoom-in" data-aos-delay="100">
      <div className="name">{prop.first + " " + prop.last}</div>

      {prop.position && <div className="position">{prop.position}</div>}

      {prop.years && <div className="years">{prop.years}</div>}

      {prop.major && <div className="major">{prop.major}</div>}

      {prop.employer && <div className="employer">{prop.employer}</div>}

      <div className="linkedin-container">
        {prop.linkedin === "" ? (
          <span className="no-linkedin">No LinkedIn profile</span>
        ) : (
          <a
            href={prop.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="linkedin-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
