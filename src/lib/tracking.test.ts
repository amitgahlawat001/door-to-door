import {
  MILESTONES,
  isValidTrackingId,
  lookupShipment,
  milestoneIndex,
  normalizeId,
} from "./tracking";

test("accepts real-looking ids and rejects junk", () => {
  expect(isValidTrackingId("DTD-123456789")).toBe(true);
  expect(isValidTrackingId(" dtd123456789 ")).toBe(true);
  expect(isValidTrackingId("SW 123456")).toBe(true);
  expect(isValidTrackingId("")).toBe(false);
  expect(isValidTrackingId("12345")).toBe(false);
  expect(isValidTrackingId("DTD-12345")).toBe(false);
  expect(isValidTrackingId("hello world")).toBe(false);
});

test("normalizes before lookup", () => {
  expect(normalizeId("  dtd-123456789 ")).toBe("DTD-123456789");
});

test("every milestone maps to an index, exceptions do not", () => {
  MILESTONES.forEach((status, i) => expect(milestoneIndex(status)).toBe(i));
  expect(milestoneIndex("EXCEPTION")).toBe(-1);
});

test("lookup reports each failure mode", async () => {
  expect(await lookupShipment("nope")).toEqual({
    ok: false,
    error: "INVALID_FORMAT",
  });
  expect(await lookupShipment("DTD-123456780")).toEqual({
    ok: false,
    error: "NOT_FOUND",
  });

  const found = await lookupShipment("dtd-123456789");
  expect(found.ok).toBe(true);
  if (found.ok) {
    expect(found.shipment.id).toBe("DTD-123456789");
    expect(milestoneIndex(found.shipment.status)).toBeGreaterThan(-1);
  }
});
