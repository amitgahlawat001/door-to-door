/**
 * Shipment tracking model + lookup.
 *
 * There is no tracking backend yet, so `lookupShipment` resolves the same
 * demo shipment the previous site showed. Swap the body of `lookupShipment`
 * for a real `fetch` when the API exists — nothing else needs to change.
 */

export type ShipmentStatus =
  | "PICKED_UP"
  | "AT_SORTING"
  | "IN_TRANSIT"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "EXCEPTION";

/** Ordered milestones rendered in the timeline. EXCEPTION is off-track. */
export const MILESTONES: ShipmentStatus[] = [
  "PICKED_UP",
  "AT_SORTING",
  "IN_TRANSIT",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];

export interface ShipmentEvent {
  status: ShipmentStatus;
  hub: string;
  scannedAt: string;
}

export interface Shipment {
  id: string;
  status: ShipmentStatus;
  origin: string;
  destination: string;
  /** ISO date or null when the backend cannot estimate. */
  eta: string | null;
  events: ShipmentEvent[];
}

export type TrackingResult =
  | { ok: true; shipment: Shipment }
  | { ok: false; error: "INVALID_FORMAT" | "NOT_FOUND" | "UNAVAILABLE" };

/** 3–6 letters or digits, a separator, then 6–12 digits. e.g. DTD-123456789 */
const ID_PATTERN = /^[a-z0-9]{2,6}[-\s]?\d{6,12}$/i;

export const normalizeId = (raw: string) => raw.trim().toUpperCase();

export const isValidTrackingId = (raw: string) => ID_PATTERN.test(raw.trim());

/** Index of the shipment's current milestone, or -1 for an exception. */
export const milestoneIndex = (status: ShipmentStatus) =>
  MILESTONES.indexOf(status);

const demoShipment = (id: string): Shipment => ({
  id,
  status: "OUT_FOR_DELIVERY",
  origin: "Ahmedabad Hub",
  destination: "Surat Hub",
  eta: null,
  events: [
    { status: "PICKED_UP", hub: "Ahmedabad Hub", scannedAt: "2025-09-10 08:15 AM" },
    { status: "AT_SORTING", hub: "Vadodara Hub", scannedAt: "2025-09-10 02:30 PM" },
    { status: "OUT_FOR_DELIVERY", hub: "Surat Hub", scannedAt: "2025-09-11 09:00 AM" },
  ],
});

export async function lookupShipment(raw: string): Promise<TrackingResult> {
  const id = normalizeId(raw);
  if (!isValidTrackingId(id)) return { ok: false, error: "INVALID_FORMAT" };

  // TODO(owner): replace with the real tracking API, e.g.
  //   const res = await fetch(`/api/track/${encodeURIComponent(id)}`);
  //   if (res.status === 404) return { ok: false, error: "NOT_FOUND" };
  //   if (!res.ok) return { ok: false, error: "UNAVAILABLE" };
  //   return { ok: true, shipment: await res.json() };
  await new Promise((r) => setTimeout(r, 450));

  // Demo data: any well-formed id resolves, ids ending in 0 model "not found".
  if (id.endsWith("0")) return { ok: false, error: "NOT_FOUND" };
  return { ok: true, shipment: demoShipment(id) };
}
