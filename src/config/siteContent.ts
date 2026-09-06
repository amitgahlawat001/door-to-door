/**
 * Single source of truth for company facts shown across the site.
 *
 * TODO(owner): every value in this file is carried over from the previous site
 * or is a placeholder. Replace with the real business details before launch.
 * Nothing here is invented — if a claim cannot be verified, leave it out.
 */

export const company = {
  name: "Start Door To Door",
  shortName: "Door to Door",
  tagline: "Moving what matters.",
  // TODO(owner): confirm postal address
  address: "100 Liberty Street, New York, NY",
  // TODO(owner): confirm phone number
  phone: "999 673 984",
  phoneHref: "tel:999673984",
  // TODO(owner): replace with the real support inbox
  email: "support@yourdomain.com",
  serviceArea: "New York City",
  social: {
    facebook: "https://facebook.com/",
    x: "https://x.com/",
    linkedin: "https://linkedin.com/",
  },
};

/**
 * Trust strip. These are qualitative facts already stated by the business
 * (fleet mix, service catalogue, languages supported, service area).
 *
 * TODO(owner): once real operating numbers exist (shipments delivered,
 * on-time percentage, cities served, years active), add them here as
 * `{ value: "12,400", labelKey: "trust.shipments" }` and they will render
 * as oversized figures in the same strip.
 */
export const trustFacts = [
  { valueKey: "trust.fleetValue", labelKey: "trust.fleetLabel" },
  { valueKey: "trust.servicesValue", labelKey: "trust.servicesLabel" },
  { valueKey: "trust.areaValue", labelKey: "trust.areaLabel" },
  { valueKey: "trust.languagesValue", labelKey: "trust.languagesLabel" },
];
