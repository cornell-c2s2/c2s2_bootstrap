import React from "react";

import nvidia from "../assets/img/aluminCompanies/nvidia_logo.jpeg";
import spacex from "../assets/img/aluminCompanies/spacex_logo.jpeg";
import ge from "../assets/img/aluminCompanies/geaerospace_logo.jpeg";
import nasa from "../assets/img/aluminCompanies/nasa_logo.jpeg";
import google from "../assets/img/aluminCompanies/google_logo.jpeg";
import amd from "../assets/img/aluminCompanies/amd_logo.jpeg";
import intel from "../assets/img/aluminCompanies/intel_logo.jpeg";
import apple from "../assets/img/aluminCompanies/apple_logo.jpeg";
import ey from "../assets/img/aluminCompanies/ey_logo.jpeg";
import atlassian from "../assets/img/aluminCompanies/atlassian_logo.jpeg";
import aws from "../assets/img/aluminCompanies/aws_logo.jpeg";
import arm from "../assets/img/aluminCompanies/arm_logo.jpeg";
import tesla from "../assets/img/aluminCompanies/tesla_logo.jpeg";
import cadence from "../assets/img/aluminCompanies/cadence_logo.jpeg";
import dell from "../assets/img/aluminCompanies/dell_logo.jpeg";
import cisco from "../assets/img/aluminCompanies/cisco_logo.jpeg";
import deepmind from "../assets/img/aluminCompanies/deepmind_logo.jpg";
import apollo from "../assets/img/aluminCompanies/apollo_logo.jpg";
import citadel from "../assets/img/aluminCompanies/citadel_logo.jpg";
import millennium from "../assets/img/aluminCompanies/millennium_logo.png";
import micron from "../assets/img/aluminCompanies/micron_logo.jpeg";

const AlumniCompanies = () => {
  const companies = [
    { name: "Google", logo: google },
    { name: "DeepMind", logo: deepmind },
    { name: "Apple", logo: apple },
    { name: "Nvidia", logo: nvidia },
    { name: "NASA", logo: nasa },
    { name: "SpaceX", logo: spacex },
    { name: "Tesla", logo: tesla },
    { name: "Intel", logo: intel },
    { name: "AMD", logo: amd },
    { name: "AWS", logo: aws },
    { name: "ARM", logo: arm },
    { name: "Cadence", logo: cadence },
    { name: "Citadel", logo: citadel },
    { name: "Apollo", logo: apollo },
    { name: "Millennium", logo: millennium },
    { name: "GE Aerospace", logo: ge },
    { name: "Atlassian", logo: atlassian },
    { name: "Cisco", logo: cisco },
    { name: "Dell", logo: dell },
    { name: "EY", logo: ey },
    { name: "Micron", logo: micron },
  ];

  const midpoint = Math.ceil(companies.length / 2);
  const firstRow = companies.slice(0, midpoint);
  const secondRow = companies.slice(midpoint);

  const renderLogoCard = (company, index, rowLabel) => (
    <div className="c2s2-alumni-logo-item" key={`${rowLabel}-${company.name}-${index}`}>
      <div className="c2s2-alumni-logo-container">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          className="c2s2-alumni-company-logo"
        />
      </div>
    </div>
  );

  return (
    <section className="c2s2-alumni-companies-section">
      <div className="c2s2-alumni-container">
        <h2 className="c2s2-alumni-title">Where Our Alumni Have Gone</h2>

        <p className="c2s2-alumni-description">
          With skills developed through C2S2, our graduates have secured
          positions at leading technology companies and
          innovative organizations across various industries.
        </p>
      </div>

      <div className="c2s2-alumni-marquee-wrapper">
        <div className="c2s2-alumni-marquee c2s2-alumni-marquee-left">
          <div className="c2s2-alumni-marquee-track">
            {[...firstRow, ...firstRow, ...firstRow].map((company, index) =>
              renderLogoCard(company, index, "left")
            )}
          </div>
        </div>

        <div className="c2s2-alumni-marquee c2s2-alumni-marquee-right">
          <div className="c2s2-alumni-marquee-track">
            {[...secondRow, ...secondRow, ...secondRow].map((company, index) =>
              renderLogoCard(company, index, "right")
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AlumniCompanies;
