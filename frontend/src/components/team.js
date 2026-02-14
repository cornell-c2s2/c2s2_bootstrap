import React from "react";

//Advisors
import cb535 from "../assets/img/team/cb535.jpg";
import vha3 from "../assets/img/team/vha3.jpg";
import mibrahim from "../assets/img/team/mibrahim.jpg";
import akv45 from "../assets/img/team/akv45.jpg";
import acm289 from "../assets/img/team/acm289.jpg";

//Digital Subteam
import johnnyMartinez from "../assets/img/team/jjm469.jpg";
import anjelicaBian from "../assets/img/team/Anjelica Bian_Digital.jpg";
import barryLyu from "../assets/img/team/fl327.jpg";
import emilyLan from "../assets/img/team/Emily Lan_Digital.jpg";
import demetriosGavalas from "../assets/img/team/deg273.jpg";
import jimingChen from "../assets/img/team/Jiming Chen_Digital.jpg";
import arjunSaini from "../assets/img/team/Arjun Saini_Digital.jpg";
import junSim from "../assets/img/team/IMG_0758.jpg";
import michaelMcGruder from "../assets/img/team/Michael McGruder_Digital.jpg";
import nataliaPope from "../assets/img/team/Natalia Pope_Digital.jpg";
import nathanRakhlin from "../assets/img/team/Nathan Rakhlin_Digital.jpg";
import simeonTurner from "../assets/img/team/Simeon Turner_Digital.jpg";
import teanLai from "../assets/img/team/Tean Lai_Digital.jpg";
import vinayIvaturi from "../assets/img/team/Vinay Ivaturi_Digital.jpg";

//Analog Subteam
import cadenXu from "../assets/img/team/Caden Xu_Analog.jpg";
import danielKaminski from "../assets/img/team/Daniel Kaminski_Analog.jpg";
import anishkaRaina from "../assets/img/team/Anishka Raina_Analog.jpg";
import annaliseThompson from "../assets/img/team/Annalise Thompson_Analog.jpg";
import lenaAraujo from "../assets/img/team/Lena Araujo_Analog.jpg";
import sidAhuja from "../assets/img/team/Sid Ahuja_Analog.jpg";

//Software Subteam
import eliasCastro from "../assets/img/team/ec798.jpg";
import joyceShen from "../assets/img/team/Joyce Shen_Software.jpg";
import arnavMuthiayen from "../assets/img/team/Arnav Muthiayen_Software.jpg";
import jackFrank from "../assets/img/team/Jack Frank_Software.jpg";

//Platform Subteam
import alyssaXu from "../assets/img/team/Alyssa Xu_Platforms.jpg";
import joanneChen from "../assets/img/team/Joanne Chen_Platforms.jpg";
import josephWan from "../assets/img/team/Joseph Wan_Platforms.jpg";
import paigeYun from "../assets/img/team/Paige Yun_Platforms.jpg";
import rachelGodwin from "../assets/img/team/Rachel Goldwin_Platforms.jpg";

//Mixed Signal SoC Subteam
import akshatiVaishnav from "../assets/img/team/Akshati Vaishnav_SOC.jpg";

//RFIC Subteam
import taylorDo from "../assets/img/team/Taylor Do_RFIC.jpg";
import jeffWilcox from "../assets/img/team/Jeff Wilcox_RFIC.jpg";
import chrislonergan from "../assets/img/team/Chris Lonergan_RFIC.jpg";
import javierChambilla from "../assets/img/team/Javier Chambilla_RFIC.jpg";
import kateSanders from "../assets/img/team/Kate Sanders_RFIC.jpg";
import shangXiang from "../assets/img/team/Shang Xiang_RFIC.jpg";

//Project Management Subteam
import jasonWang from "../assets/img/team/Jason Wang_PM.jpg";
import abigailVarghese from "../assets/img/team/akv45.jpg";
import vayunTiwari from "../assets/img/team/Vayun Tiwari_PM.jpg";
import anikaSukthankar from "../assets/img/team/Anika Sukthankar_PM.jpg";
import tanyaDatta from "../assets/img/team/Tanya Datta_PM.jpg";
import ivanMokeyev from "../assets/img/team/ivan.jpg";
import nickchanng from "../assets/img/team/Nicholas Channg_PM.jpg";

//Alumni
import AlumniInfo from "../assets/json/alumni8.json";

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
              role="Team Lead"
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
          </div>
        </div>
      </section>
      <section id="digital" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-file-earmark-binary"></i>
            <p>Digital Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Johnny Martinez"
              role="Digital Subteam Co-Lead"
              img={johnnyMartinez}
              github="https://github.com/jjm469"
              linkedin="https://www.linkedin.com/in/johnny-martinez469/"
            />

            <TeamMember
              name="Anjelica Bian"
              role="Digital Subteam Co-Lead"
              img={anjelicaBian}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Barry Lyu"
              role=""
              img={barryLyu}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Emily Lan"
              role=""
              img={emilyLan}
              github=""
              linkedin="https://www.linkedin.com/in/emily-lan-ca/"
            />

            <TeamMember
              name="Demetrios Gavalas"
              role=""
              img={demetriosGavalas}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Jiming Chen"
              role=""
              img={jimingChen}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Arjun Saini"
              role=""
              img={arjunSaini}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Jun Sim"
              role=""
              img={junSim}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Michael McGruder"
              role=""
              img={michaelMcGruder}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Natalia Pope"
              role=""
              img={nataliaPope}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Nathan Rakhlin"
              role=""
              img={nathanRakhlin}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Simeon Turner"
              role=""
              img={simeonTurner}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Tean Lai"
              role=""
              img={teanLai}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Vinay Ivaturi"
              role=""
              img={vinayIvaturi}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="analog" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-speedometer2"></i>
            <p>Analog Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Caden Xu"
              role="Analog Subteam Co-Lead"
              img={cadenXu}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Daniel Kaminski"
              role="Analog Subteam Co-Lead"
              img={danielKaminski}
              github="https://github.com/dgkaminski"
              linkedin="https://www.linkedin.com/in/daniel-kaminski-447785234/"
            />

            <TeamMember
              name="Anishka Raina"
              role=""
              img={anishkaRaina}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Annalise Thompson"
              role=""
              img={annaliseThompson}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Lena Araujo"
              role=""
              img={lenaAraujo}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Sid Ahuja"
              role=""
              img={sidAhuja}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="software" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-code-slash"></i>
            <p>Software Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Elias Castro"
              role="Software Subteam Lead"
              img={eliasCastro}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Joyce Shen"
              role=""
              img={joyceShen}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Arnav Muthiayen"
              role=""
              img={arnavMuthiayen}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Jack Frank"
              role=""
              img={jackFrank}
              github="https://github.com/frank-jack"
              linkedin="https://www.linkedin.com/in/jack-frank-4a9897245/"
            />
          </div>
        </div>
      </section>

      <section id="platforms" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-code-slash"></i>
            <p>Platforms Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Alyssa Xu"
              role="Platforms Subteam Lead"
              img={alyssaXu}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Joanne Chen"
              role=""
              img={joanneChen}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Joseph Wan"
              role=""
              img={josephWan}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Paige Yun"
              role=""
              img={paigeYun}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Rachel Godwin"
              role=""
              img={rachelGodwin}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="soc" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-router"></i>
            <p>Mixed Signal SoC Subteam</p>
          </div>

          <div class="row justify-content-center">
            <TeamMember
              name="Akshati Vaishnav"
              role="Mixed Signal SoC Subteam Lead"
              img={akshatiVaishnav}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="rfic" class="team">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <i className="bi bi-router"></i>
            <p>RFIC Subteam</p>
          </div>

          <div class="row justify-content-center">
            <TeamMember
              name="Taylor Do"
              role="RFIC Lead"
              img={taylorDo}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Jeff Wilcox"
              role=""
              img={jeffWilcox}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Chris Lonergan"
              role=""
              img={chrislonergan}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Javier Chambilla"
              role=""
              img={javierChambilla}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Kate Sanders"
              role=""
              img={kateSanders}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Shang Xiang"
              role=""
              img={shangXiang}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="proj-man" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-clipboard-check"></i>
            <p>Project Management Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Jason Wang"
              role="Project Management Subteam Lead"
              img={jasonWang}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Abigail Varghese"
              role=""
              img={abigailVarghese}
              github=""
              linkedin="https://www.linkedin.com/in/abigail-varghese-589b49244"
            />

            <TeamMember
              name="Vayun Tiwari"
              role=""
              img={vayunTiwari}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Anika Sukthankar"
              role=""
              img={anikaSukthankar}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Tanya Datta"
              role=""
              img={tanyaDatta}
              github=""
              linkedin="https://www.linkedin.com/in/tanya-datta-5966a028a/"
            />

            <TeamMember
              name="Iván Mokeyev"
              role=""
              img={ivanMokeyev}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Nicholas Channg"
              role=""
              img={nickchanng}
              github="https://github.com/nicholaschanng"
              linkedin="https://www.linkedin.com/in/nicholaschanng/"
            />
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

function TeamMember(prop) {
  return (
    <div
      className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="member">
        <img src={prop.img} className="img-fluid" alt="" />
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
