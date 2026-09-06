# Tracking Feature Specification

## Primary flow
1. User opens tracking UI.
2. Enters tracking number.
3. Client validates format.
4. Request is sent to tracking API.
5. UI shows shipment status.
6. Timeline/map animates to current milestone.
7. ETA and destination are displayed when available.

## Status model
Recommended:
- `PICKED_UP`
- `AT_SORTING`
- `IN_TRANSIT`
- `OUT_FOR_DELIVERY`
- `DELIVERED`
- `EXCEPTION`

Map:
- do not pretend GPS precision exists if the backend only provides facility-level data
- use named hubs / cities where exact coordinates are unavailable

## UI
- dominant tracking input
- recent status
- origin / destination
- milestone timeline
- ETA
- support CTA

## Empty / error states
- invalid tracking ID
- shipment not found
- delayed / exception
- API unavailable
- no ETA available

## Animation
- active milestone highlights
- route path draws toward current node
- package marker moves using GSAP
- use reduced-motion fallback
