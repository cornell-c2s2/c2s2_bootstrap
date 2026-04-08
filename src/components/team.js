import React from "react";

//Advisors
import cb535 from "../assets/img/team/cb535.jpg";
import vha3 from "../assets/img/team/vha3.jpg";
import mibrahim from "../assets/img/team/mibrahim.jpg";
import akv45 from "../assets/img/team/akv45.jpg";
import acm289 from "../assets/img/team/acm289.jpg";

//Business Operations
import adiPrathapa from "../assets/img/team/Adi_Prathapa_agp96.JPG";
import matteoBucci from "../assets/img/team/Matteo_Bucci_mrb357.JPG";
import ridwanahHaque from "../assets/img/team/Ridwanah_Haque_rh736.JPG";

//Digital Subteam
import asherFred from "../assets/img/team/Asher_Fred_ajf273.JPG";
import danielGabai from "../assets/img/team/Daniel_Gabai_dg779.JPG";
import shehrozeKiani from "../assets/img/team/Shehroze_Kiani_szk7.JPG";
import teresaChen from "../assets/img/team/Teresa_Chen_yc2877.JPG";

//RTL Design Subteam
import arjunSaini from "../assets/img/team/Arjun_Saini_ars437.JPG";
import anjelicaBian from "../assets/img/team/Anjelica_Bian_yb265.JPG";
import emilyLan from "../assets/img/team/Emily Lan_Digital.jpg";
import sumaiaJewena from "../assets/img/team/Sumaia_Jewena_saj93.JPG";
import teanLai from "../assets/img/team/Tean_Lai_tml95.JPG";
import yifeiYan from "../assets/img/team/Yifei_Yan_yy2323.JPG";

//Analog Subteam
import annaliseThompson from "../assets/img/team/Annalise_Thompson_art227.JPG";
import cadenXu from "../assets/img/team/Caden_Xu_cx237.JPG";
import danielKaminski from "../assets/img/team/Daniel_Kaminski_dgk64.JPG";
import kaiImani from "../assets/img/team/Kai_Imani_kti3.JPG";
import lenaAraujo from "../assets/img/team/Lena_Conde_Araujo_lc2257.JPG";
import mattCan from "../assets/img/team/Matt_Can_mmc347.JPG";
import tiffanyLi from "../assets/img/team/Tiffany_Li.JPG";

//Software Subteam
import benjaminNudelman from "../assets/img/team/Benjamin_Nudelman_bn278.JPG";
import jackFrank from "../assets/img/team/Jack_Frank_jf679.JPG";
import joyceShen from "../assets/img/team/Joyce_Shen_js3696.JPG";
import majorZangari from "../assets/img/team/Major_Zangari_maz76.JPG";
import olesiaKuzdrovska from "../assets/img/team/Olesia_Kuzdrovska_ok98.JPG";

//Platforms Subteam
import alysaXu from "../assets/img/team/Alysa_Xu_ax52.JPG";
import chelseaZhang from "../assets/img/team/Chelsea_Zhang_eyl47.JPG";
import joanneChen from "../assets/img/team/Joanne_Chen_jc3658.JPG";
import josephWan from "../assets/img/team/Joseph_Wan_jgw227.JPG";
import michaelDierkes from "../assets/img/team/Michael_Dierkes_mwd59.JPG";
import mohamedElmi from "../assets/img/team/Mohamed_Elmi_mae227.JPG";
import rachaelGodwin from "../assets/img/team/Rachael_Godwin_rcg232.JPG";
import tanyaDatta from "../assets/img/team/Tanya_Datta_td423.JPG";

//Design Verification Subteam
import anikaSukthankar from "../assets/img/team/Anika Sukthankar_PM.jpg";
import danielPenasVarela from "../assets/img/team/Daniel_Penas_Varela_dp665.JPG";
import jimingChen from "../assets/img/team/Jiming Chen_Digital.jpg";
import linhAnhNguyen from "../assets/img/team/Linh Anh Nguyen.JPG";
import rohanKalluraya from "../assets/img/team/Rohan_Kalluraya_rak298.JPG";
import simeonTurner from "../assets/img/team/Simeon_Turner_smt259.JPG";

//Physical Design Subteam
import demetriosGavalas from "../assets/img/team/Demetrios_Gavalas_deg273.JPG";
import edwinChen from "../assets/img/team/Edwin_Chen_ec769.JPG";
import ivanMokeyev from "../assets/img/team/Ivan_Mokeyev_ism27.JPG";
import josephJuniorMensah from "../assets/img/team/Joseph_Junior_Mensah_jjm536.JPG";
import tyroneChen from "../assets/img/team/Tyrone_Chen_tc724.JPG";
import vinayIvaturi from "../assets/img/team/Vinay_Ivaturi_vi42.JPG";

//RFIC Subteam
import adityaRao from "../assets/img/team/Aditya_Rao_agr92.JPG";

import kateSanders from "../assets/img/team/Kate Sanders_RFIC.jpg";
import samuelFertal from "../assets/img/team/Samuel_Fertal_sf626.JPG";
import seanWhelan from "../assets/img/team/Sean_Whelan_sgw49.JPG";
import shangXiang from "../assets/img/team/Shang_Xiang_sx277.JPG";
import taylorDo from "../assets/img/team/Taylor_Do_txd3.JPG";
import waliAfridi from "../assets/img/team/Wali_Afridi_wua3.JPG";

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
              name="Daniel Kaminski"
              role="Team Lead"
              img={danielKaminski}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Caden Xu"
              role="Subteam Lead"
              img={cadenXu}
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
              name="Kai Imani"
              role=""
              img={kaiImani}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Lena Conde Araujo"
              role=""
              img={lenaAraujo}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Matt Can"
              role=""
              img={mattCan}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Tiffany Li"
              role=""
              img={tiffanyLi}
              github=""
              linkedin=""

            />
          </div>
        </div>
      </section>

      <section id="business-ops" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-briefcase"></i>
            <p>Business Operations Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Ridwanah Haque"
              role="Subteam Lead"
              img={ridwanahHaque}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Matteo Bucci"
              role=""
              img={matteoBucci}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Adi Prathapa"
              role=""
              img={adiPrathapa}
              github=""
              linkedin=""

            />
          </div>
        </div>
      </section>

      <section id="design-verification" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-shield-check"></i>
            <p>Design Verification Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Simeon Turner"
              role="Subteam Lead"
              img={simeonTurner}
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
              name="Daniel Penas Varela"
              role=""
              img={danielPenasVarela}
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
              name="Linh Anh Nguyen"
              role=""
              img={linhAnhNguyen}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Rohan Kalluraya"
              role=""
              img={rohanKalluraya}
              github=""
              linkedin=""

            />

          </div>
        </div>
      </section>

      <section id="digital" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-file-earmark-binary"></i>
            <p>Digital Freshmen</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Asher Fred"
              role=""
              img={asherFred}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Daniel Gabai"
              role=""
              img={danielGabai}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Shehroze Kiani"
              role=""
              img={shehrozeKiani}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Teresa Chen"
              role=""
              img={teresaChen}
              github=""
              linkedin=""
            />
          </div>
        </div>
      </section>

      <section id="physical-design" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-layers"></i>
            <p>Physical Design Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Demetrios Gavalas"
              role="Subteam Lead"
              img={demetriosGavalas}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Edwin Chen"
              role=""
              img={edwinChen}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Ivan Mokeyev"
              role=""
              img={ivanMokeyev}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Joseph Junior Mensah"
              role=""
              img={josephJuniorMensah}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Tyrone Chen"
              role=""
              img={tyroneChen}
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

      <section id="platforms" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-motherboard"></i>
            <p>Platforms Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Joseph Wan"
              role="Subteam Lead"
              img={josephWan}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Rachael Godwin"
              role="Subteam Lead"
              img={rachaelGodwin}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Alysa Xu"
              role=""
              img={alysaXu}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Chelsea Zhang"
              role=""
              img={chelseaZhang}
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
              name="Michael Dierkes"
              role=""
              img={michaelDierkes}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Mohamed Elmi"
              role=""
              img={mohamedElmi}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Tanya Datta"
              role=""
              img={tanyaDatta}
              github=""
              linkedin=""

            />
          </div>
        </div>
      </section>

      <section id="rfic" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-router"></i>
            <p>RFIC Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Kate Sanders"
              role="Subteam Lead"
              img={kateSanders}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Taylor Do"
              role="Subteam Lead"
              img={taylorDo}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Aditya Rao"
              role=""
              img={adityaRao}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Samuel Fertal"
              role=""
              img={samuelFertal}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Sean Whelan"
              role=""
              img={seanWhelan}
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

            <TeamMember
              name="Wali Afridi"
              role=""
              img={waliAfridi}
              github=""
              linkedin=""

            />
          </div>
        </div>
      </section>

      <section id="rtl-design" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <i className="bi bi-cpu"></i>
            <p>RTL Design Subteam</p>
          </div>

          <div className="row justify-content-center">
            <TeamMember
              name="Angelica Bian"
              role="Subteam Lead"
              img={anjelicaBian}
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
              name="Emily Lan"
              role=""
              img={emilyLan}
              github=""
              linkedin=""
            />

            <TeamMember
              name="Sumaia Jewena"
              role=""
              img={sumaiaJewena}
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
              name="Yifei Yan"
              role=""
              img={yifeiYan}
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
              name="Jack Frank"
              role="Subteam Lead"
              img={jackFrank}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Joyce Shen"
              role="Subteam Lead"
              img={joyceShen}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Benjamin Nudelman"
              role=""
              img={benjaminNudelman}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Major Zangari"
              role=""
              img={majorZangari}
              github=""
              linkedin=""

            />

            <TeamMember
              name="Olesia Kuzdrovska"
              role=""
              img={olesiaKuzdrovska}
              github=""
              linkedin=""

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
        <img
          src={prop.img}
          className="img-fluid"
          alt=""
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
