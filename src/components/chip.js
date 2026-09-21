import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { chipImages, chips } from "../data/chips.js";

function Chip() {
  const location = useLocation();
  const navigate = useNavigate();
  const [chip, setChip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageModal, setImageModal] = useState(false);
  const enlargeRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    // Extract URL details whenever the location changes
    const pathId = location.pathname.split("/").pop();

    // Get chip data from imported JSON
    const selectedChip = chips.find((item) => item.id === pathId);
    setChip(selectedChip);
    setLoading(false);
  }, [location]);

  const openImageModal = () => setImageModal(true);

  // Closing hands focus back to the control that opened the modal, so a keyboard
  // visitor doesn't get dropped at the top of the document.
  const closeImageModal = useCallback(() => {
    setImageModal(false);
    enlargeRef.current?.focus();
  }, []);

  // Move focus into the modal when it opens, and close it on escape.
  useEffect(() => {
    if (!imageModal) return;

    closeRef.current?.focus();

    const handleEsc = (event) => {
      if (event.key === "Escape") closeImageModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [imageModal, closeImageModal]);

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

  const detailedText = chip.text?.trim();
  const description =
    detailedText && detailedText.toLowerCase() !== "coming soon."
      ? detailedText
      : chip.summary;

  // Arriving from the gallery, going back is a real history back: it returns to
  // the gallery's own history entry, which keeps the category filter and the
  // scroll position the visitor left it at. Arriving any other way (a shared
  // link, a search result) there is nothing to go back to, so link instead.
  const backToGallery = location.state?.fromGallery ? (
    <button
      type="button"
      className="chip-page__back"
      onClick={() => navigate(-1)}
    >
      <i className="bi bi-arrow-left" aria-hidden="true"></i>
      Back to Chip Gallery
    </button>
  ) : (
    <Link className="chip-page__back" to="/chip-gallery">
      <i className="bi bi-arrow-left" aria-hidden="true"></i>
      Back to Chip Gallery
    </Link>
  );

  return (
    <main id="main" className="chip-page">
      {/* Image Modal */}
      {imageModal && chipImages[chip.id] && (
        <div
          className="chip-page__modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${chip.title} chip, enlarged`}
          onClick={closeImageModal}
        >
          <div
            className="chip-page__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              ref={closeRef}
              className="chip-page__modal-close"
              onClick={closeImageModal}
              aria-label="Close enlarged image"
            >
              &times;
            </button>
            <img loading="lazy" decoding="async"
              src={chipImages[chip.id]}
              alt={`${chip.title} chip (enlarged)`}
              className="chip-page__modal-image"
            />
            <div className="chip-page__modal-caption">{chip.title}</div>
          </div>
        </div>
      )}

      <section className="chip-page__header">
        <div className="container">
          {backToGallery}
          <div className="chip-page__title-container">
            <h1 className="chip-page__title" tabIndex="-1">{chip.title}</h1>
            <div className="chip-page__date">{chip.date}</div>
          </div>
        </div>
      </section>

      <section className="chip-page__content">
        <div className="container">
          <div className="chip-page__card">
            <div className="chip-page__image-container">
              {chipImages[chip.id] ? (
                <button
                  type="button"
                  ref={enlargeRef}
                  className="chip-page__image-button"
                  onClick={openImageModal}
                  aria-label={`Enlarge the ${chip.title} chip image`}
                >
                  <img loading="eager" decoding="async" fetchpriority="high"
                    src={chipImages[chip.id]}
                    alt={`${chip.title} chip`}
                    className="chip-page__image"
                  />
                </button>
              ) : (
                <div className="chip-page__image-placeholder">
                  <span>Image coming soon</span>
                </div>
              )}
            </div>
            <div className="chip-page__details">
              {description && (
                <div className="chip-page__description">
                  <h2 className="chip-page__subtitle">Description</h2>
                  <p>{description}</p>
                </div>
              )}

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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chip;
