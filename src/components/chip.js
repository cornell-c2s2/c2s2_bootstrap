import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import chipData from "../assets/json/chip.json";
import kiwi from "../assets/img/chips/c2s2-2024-analog.jpg";
import eagle from "../assets/img/chips/c2s2-2023-digital.jpg";
import puffin from "../assets/img/chips/eagle_digital_24.jpg";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";

const images = {
  kiwi,
  puffin,
  eagle,
  sparrow,
};

function Chip() {
  const location = useLocation();
  const [chip, setChip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageModal, setImageModal] = useState(false);

  useEffect(() => {
    // Extract URL details whenever the location changes
    const pathId = location.pathname.split("/").pop();

    // Get chip data from imported JSON
    const selectedChip = chipData.find((item) => item.id === pathId);
    setChip(selectedChip);
    setLoading(false);
  }, [location]);

  // Function to toggle the image modal
  const toggleImageModal = () => {
    setImageModal(!imageModal);
  };

  // Close modal if user presses escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setImageModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (loading) {
    return (
      <div className="chip-page">
        <div className="chip-page__loading">Loading chip data...</div>
      </div>
    );
  }

  if (!chip) {
    return (
      <div className="chip-page">
        <div className="chip-page__error">Chip not found</div>
      </div>
    );
  }

  return (
    <main id="main" className="chip-page">
      {/* Image Modal */}
      {imageModal && (
        <div className="chip-page__modal" onClick={toggleImageModal}>
          <div
            className="chip-page__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="chip-page__modal-close" onClick={toggleImageModal}>
              &times;
            </span>
            <img
              src={images[chip.id]}
              alt={`${chip.title} chip (enlarged)`}
              className="chip-page__modal-image"
            />
            <div className="chip-page__modal-caption">{chip.title}</div>
          </div>
        </div>
      )}

      <section className="chip-page__header">
        <div className="container">
          <div className="chip-page__title-container">
            <h1 className="chip-page__title">{chip.title}</h1>
            <div className="chip-page__date">{chip.date}</div>
          </div>
        </div>
      </section>

      <section className="chip-page__content">
        <div className="container">
          <div className="chip-page__card">
            <div className="chip-page__image-container">
              <img
                src={images[chip.id]}
                alt={`${chip.title} chip`}
                className="chip-page__image"
                onClick={toggleImageModal}
              />
              <div className="chip-page__image-overlay">
                <span className="chip-page__image-zoom-text">
                  Click to enlarge
                </span>
              </div>
            </div>
            <div className="chip-page__details">
              <div className="chip-page__description">
                <h2 className="chip-page__subtitle">Description</h2>
                <p>{chip.text}</p>
              </div>

              {chip.specifications && (
                <div className="chip-page__specs">
                  <h2 className="chip-page__subtitle">Specifications</h2>
                  <ul className="chip-page__specs-list">
                    {Object.entries(chip.specifications).map(([key, value]) => (
                      <li key={key} className="chip-page__spec-item">
                        <span className="chip-page__spec-key">{key}:</span>{" "}
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* {chip.features && (
                <div className="chip-page__features">
                  <h2 className="chip-page__subtitle">Features</h2>
                  <ul className="chip-page__features-list">
                    {chip.features.map((feature, index) => (
                      <li key={index} className="chip-page__feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              <div className="chip-page__more-info">
                <h3 className="chip-page__more-info-title">
                  Technical Documentation
                </h3>
                <p className="chip-page__more-info-text">
                  Additional technical information and documentation coming
                  soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chip;
