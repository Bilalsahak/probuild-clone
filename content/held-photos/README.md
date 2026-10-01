# Held-back photos (NOT deployed)

These files were part of the original production site (and the approved redesign
preview), but they are **not published** by this branch because their origin
could not be confirmed. They are kept here, unchanged, so nothing is lost.

Files in `content/` are never copied to the website; only `public/` is deployed.

| File | Why it is held back (from the legal audit, rows 4/15/16 — visual review only) |
|------|------|
| `front/front.webp` | Former homepage hero. Looks professionally staged/edited (staged bathroom, no job-site context). Could be stock, a client's, another company's, or AI-generated. The old alt text called it "Commercial Construction Build Out". |
| `siding/siding.webp` | Looks professionally staged/edited (furnished deck, blue siding). |
| `tile/tile.webp` | Looks professionally staged/edited. |
| `tile/tile5.webp` | Pool-deck paving with palm trees; does not look like Seattle. Origin unconfirmed. |
| `laminate/laminate1.webp` | Looks professionally staged/edited (styled kitchen). |
| `paint/paint.webp` | Looks professionally staged/edited (furnished deck, no paint work visible). |
| `fencing/fencing7.webp` | Shows a wood deck/railing at night, not a fence. Decking is not one of the listed services; L&I says to advertise only services you are registered to provide. |

## To re-publish a photo

1. Record who took it, when, where (city/state), for which company, and written
   permission (owner + customer if identifiable).
2. Move the file to `public/images/services/<trade>/`.
3. Add an entry (with honest alt text and caption) to `src/content/photos.ts`.
