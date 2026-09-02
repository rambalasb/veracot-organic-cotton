# GENCOTT - Organic Tree Cotton Fill - website

A static, dependency-free website for a **grower and processor of organic tree cotton fill** - filling
fibre picked by hand from standing groves, de-seeded and cleaned on the company's own line, and sold
direct to manufacturers as **80 kg pressed bales or 20 kg bags**. That is the entire product range: one
fibre, no grades.

The site is a **sales site, not a brochure or a blog**. Three pages, each with a job:

| File | Job |
| --- | --- |
| `index.html` | Convert. Hero carrying the buying facts (seed and shell, lead time, tonnage, acreage), then `#offer` - the six things buyers ask first - the photographed six-step process as proof (`#process`), end uses, why it works, what the fibre cannot do, why buy direct, how to order. A call to action every second section. |
| `products.html` | Close. Specification (`#spec`), quantities and container loads (`#packing`), commercial terms (`#terms`), the comparison against polyester and foam (`#compare`), how to specify it (`#specifying`), handling warnings (`#handling`), and the mill with the season by stage (`#cleaning`, `#season`). |
| `contact.html` | Capture. Sales desks by function, quote-request form, visiting information. |

There is no separate process, traceability, grove-and-mill or fibre page. Earlier versions had them;
that material now lives at the anchors above.

## Rules the copy follows

- **Keep it dense.** Paragraphs run to about twenty words. Facts belong in tables, cards and checklists
  rather than prose, and the commercial facts appear above the fold rather than at the end of a long read.
- **The fibre cannot be spun.** It fills a volume; it does not make a thread. The hero says so, and
  `index.html` carries a whole section on what the fibre cannot do. Do not soften it - a wrong enquiry
  costs more than a lost one.
- **No location below country level.** No town, district, plot, port, airport or distance, and no
  trade-fair listings. Contact gives office hours and says the address travels with the quote.
- **Promise nothing that has to be produced later.** The site offers no test report, no certificate, no
  document pack, no sample and no minimum order. What it offers is the fibre, the specification as stated
  typical values, price and terms, and an open invitation to inspect the mill in season. Do not reintroduce
  a promise of paperwork unless the company can actually issue it with every consignment.
- **Candour is the differentiator, so make it work.** "What this fibre cannot do" and the note on claims
  are written as short cards answering a buyer's objection - not as confessions buried at the bottom.

`GENCOTT` is a fictional company invented for this site. The addresses, phone numbers, acreage,
capacities and email addresses are illustrative placeholders (`*.example` domains, `000 0000` numbers) -
replace them before any real use.

## Why the species matters to the content

Tree cotton is a woody perennial: the chain starts at a **grove**, not a field, and the trees stand for
decades rather than being ploughed in and resown. That drives several things which would be wrong on a
generic cotton site:

- Records are a continuous multi-season history rather than a per-crop declaration, and the contracted
  area never goes through a bare-soil phase.
- The fibre is short, smooth and without crimp, so **it cannot be spun on any system**. Everything the
  site sells is filling: mattresses, pillows, cushions, soft toys, quilt batting, upholstery padding.
- It is light for its volume, springy, breathable and re-cardable, which is what a filling line buys.
  It is also dusty and readily flammable untreated, which the Handling section states plainly.
- Cleaning outturn is about 25% by weight; the rest is seed and husk. That arithmetic is what justifies
  selling cleaned fill rather than raw bolls, and it sits under the process photographs.

## Assets

- `css/styles.css` - the whole design system: tokens, light/dark themes, layout, components
- `js/site.js` - mobile nav, theme toggle (persisted to `localStorage`), reveal-on-scroll, form handler, footer year
- `img/photos/` - photography, with a README of its own listing every file, its real pixel size and where
  it is used. Declared `width`/`height` in the HTML must match those numbers.

No build step, no framework, no external requests beyond the Google Fonts stylesheet. The favicon is an
inline SVG data URI.

### Colour

The palette is a pale "cotton" green-white (`--cotton`, `--cotton-deep`) used for the hero, page heroes
and closing bands, over a white page background. Sections alternate white and `--bg-alt` down each page;
if you add, move or remove a section, check that the `alt` classes still alternate. The light theme is
the **default for everyone**, including visitors whose OS is set to dark - dark is opt-in through the
header toggle.

## Run it

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly from the filesystem also works.

## Before going live

1. **The form has no backend.** `js/site.js` intercepts submit and shows a notice. Point it at your own
   endpoint, a form service, or swap it for a `mailto:` action.
2. **Replace every placeholder contact detail.** `sales@gencott.example`, `export@gencott.example`,
   `studio@gencott.example`, `groves@gencott.example`,
   `accounts@gencott.example`, `visits@gencott.example` and the `+91 712 000 000x` numbers are all
   invented. The site gives no address by design - add one to `contact.html` only if you want it public.
3. **Replace the commercial figures.** Acreage, family and headcount numbers, cleaning capacity, outturn,
   bale counts, lead times, container loads, payment terms and every bulk-density, seed-and-shell and
   moisture figure are plausible placeholders, not real data. The hero and the `#offer` block lead with
   them, so check those first. There is no minimum order quantity anywhere on the site - do not add one
   back without deciding the policy first.
4. **Remove or reword the footer disclaimer** ("Demonstration site…") once this represents a real
   company. It is there so the pages cannot be mistaken for a live supplier.
5. **The word "organic" appears on every page with nothing behind it on the site.** No scheme backs it,
   no testing is claimed, and no document supports it. Before going live, check that an unqualified
   organic claim is lawful in each market you sell into - in several of them it is not, unless you can
   produce evidence on request.
6. **The specification numbers are the only measured claims left.** Bulk density, fibre length, seed and
   shell, dust and moisture on `products.html#spec`, plus the "Under 1.5%" figure in the home page hero.
   Nothing on the site says how they are arrived at, so be ready to answer that question by email.
