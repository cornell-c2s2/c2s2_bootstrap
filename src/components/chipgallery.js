import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import { chipCategories, chips } from "../data/chips.js";

function ChipGallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const activeCategory =
    chipCategories.find(
      (category) => category.toLowerCase() === requestedCategory?.toLowerCase()
    ) || "All";

  const selectCategory = (category) => {
    if (category === "All") {
      setSearchParams({});
      return;
    }

    setSearchParams({ category: category.toLowerCase() });
  };

  // chips is sorted newest first, so the most recent tapeout year is the one to
  // feature. Deriving it means next year's chips get promoted by adding them to
  // chip.json, with nothing here to remember to bump.
  const latestYear = chips[0]?.year;
  const featuredChips = chips.filter((chip) => chip.year === latestYear);
  const archiveChips = chips.filter(
    (chip) =>
      chip.year < latestYear &&
      (activeCategory === "All" || chip.category === activeCategory)
  );

  return (
    <main id="main" className="chip-gallery-page">
      <section className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Chip Gallery</h1>
          </div>
        </div>
      </section>

      <section className="chip-gallery-featured">
        <div className="container">
          <div className="section-title chip-gallery-heading">
            <div>
              <h2>Spring {latestYear} Tapeouts</h2>
            </div>
          </div>

          <div className="chip-feature-grid">
            {featuredChips.map((chip) => (
              <ChipCard key={chip.id} chip={chip} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="chip-gallery-archive">
        <div className="container">
          <div className="section-title chip-gallery-heading">
            <div>
              <h2>Previous Tapeouts</h2>
            </div>
          </div>

          <div className="chip-gallery-toolbar">
            <div
              className="chip-gallery-filters"
              role="group"
              aria-label="Filter chips by subteam"
            >
              {chipCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "chip-filter chip-filter--active"
                      : "chip-filter"
                  }
                  aria-pressed={activeCategory === category}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="visually-hidden" role="status" aria-live="polite">
              Showing {archiveChips.length} previous {activeCategory === "All" ? "" : `${activeCategory} `}
              {archiveChips.length === 1 ? "tapeout" : "tapeouts"}.
            </span>
          </div>

          <div className="chip-archive-grid">
            {archiveChips.map((chip) => (
              <ChipCard key={chip.id} chip={chip} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ChipCard({ chip, featured = false }) {
  return (
    <Link
      to={`/chip-gallery/${chip.id}`}
      state={{ fromGallery: true }}
      className={featured ? "chip-card chip-card--featured" : "chip-card"}
      aria-label={`Explore ${chip.title}`}
    >
      <div className="chip-card__media">
        <img
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={featured ? "high" : "auto"}
          src={chip.thumbnail}
          alt={`${chip.title} die`}
        />
      </div>
      <div className="chip-card__body">
        <h3>{chip.title}</h3>
        {!featured && (
          <div className="chip-card__meta">
            <span>{chip.date}</span>
          </div>
        )}
        <p>{chip.summary}</p>
      </div>
    </Link>
  );
}

export default ChipGallery;
