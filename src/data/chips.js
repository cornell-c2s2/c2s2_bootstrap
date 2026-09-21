import chipData from "../assets/json/chip.json";

import eagle from "../assets/img/chips/c2s2-2023-digital.jpg";
import puffin from "../assets/img/chips/eagle_digital_24.jpg";
import sparrow from "../assets/img/chips/Sparrow_AnalogSpring'23.JPG";
import kiwi from "../assets/img/chips/c2s2-2024-analog.jpg";
import analog25 from "../assets/img/chips/c2s2-2025-analog.png";
import goose from "../assets/img/chips/c2s2-2025-digital.png";
import rfic25 from "../assets/img/chips/c2s2-2025-rfic.png";
import kakapo from "../assets/img/chips/c2s2-2026-analog.png";
import digital26 from "../assets/img/chips/c2s2-2026-digital.png";
import rfic26 from "../assets/img/chips/c2s2-2026-rfic.png";

import eagleThumbnail from "../assets/img/chips/thumbnails/eagle.webp";
import puffinThumbnail from "../assets/img/chips/thumbnails/puffin.webp";
import sparrowThumbnail from "../assets/img/chips/thumbnails/sparrow.webp";
import kiwiThumbnail from "../assets/img/chips/thumbnails/kiwi.webp";
import analog25Thumbnail from "../assets/img/chips/thumbnails/analog-2025.webp";
import gooseThumbnail from "../assets/img/chips/thumbnails/goose.webp";
import rfic25Thumbnail from "../assets/img/chips/thumbnails/rfic-2025.webp";
import kakapoThumbnail from "../assets/img/chips/thumbnails/kakapo.webp";
import digital26Thumbnail from "../assets/img/chips/thumbnails/digital-2026.webp";
import rfic26Thumbnail from "../assets/img/chips/thumbnails/rfic-2026.webp";

export const chipImages = {
  eagle,
  puffin,
  sparrow,
  kiwi,
  "analog-2025": analog25,
  goose,
  "rfic-2025": rfic25,
  kakapo,
  "digital-2026": digital26,
  "rfic-2026": rfic26,
};

const chipThumbnails = {
  eagle: eagleThumbnail,
  puffin: puffinThumbnail,
  sparrow: sparrowThumbnail,
  kiwi: kiwiThumbnail,
  "analog-2025": analog25Thumbnail,
  goose: gooseThumbnail,
  "rfic-2025": rfic25Thumbnail,
  kakapo: kakapoThumbnail,
  "digital-2026": digital26Thumbnail,
  "rfic-2026": rfic26Thumbnail,
};

const categoryOrder = { Digital: 0, Analog: 1, RFIC: 2 };

export const chips = chipData
  .map((chip) => ({
    ...chip,
    year: Number(chip.date.match(/\d{4}/)?.[0]),
    image: chipImages[chip.id],
    thumbnail: chipThumbnails[chip.id],
  }))
  .sort(
    (a, b) =>
      b.year - a.year || categoryOrder[a.category] - categoryOrder[b.category]
  );

export const chipCategories = ["All", "Digital", "Analog", "RFIC"];
