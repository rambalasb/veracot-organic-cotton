# GENCOTT - Organic Tree Cotton - website

A static, dependency-free website for a **grower and ginner of organic tree cotton** - *Gossypium
arboreum*, the perennial woody cotton of the Indian subcontinent, grown as standing groves rather than
as an annual row crop. GENCOTT contracts the crop, gins it on its own roller line, and sells
**roller-ginned lint in 170 kg bales**. That is the entire product range: three grades of one fibre.

The site names **no location at all** below country level - no town, district, plot, port, airport or
distance, and no trade-fair listings. The Contact page gives office hours and says the address and
directions are sent with the quote. There is also **no offer of samples or trial quantities** anywhere.
All of this is deliberate; keep it in mind when adding copy.

That constraint is load-bearing across the whole site. There is no spinning mill, no loom shed and no
cut-and-sew floor - no yarn, no fabric, no finished goods, and no packing under a buyer's name. If you
change the business model, `products.html` (the "Cotton is all we sell" callout), the home page intro
and the Buyer FAQ all need to change together.

`GENCOTT` is a fictional company invented for this site. The addresses, phone numbers, acreage,
capacities, certifications and email addresses are illustrative placeholders (`*.example` domains,
`000 0000` numbers) - replace them before any real use.

## Why the species matters to the content

The whole site leans on one agronomic fact: tree cotton is a perennial, and upland cotton
(*G. hirsutum*) is not. That drives several things that would be wrong on a generic organic cotton site:

- The chain starts at a **grove**, not a field, and organic records are a continuous multi-season
  history rather than a per-crop declaration.
- Ginning is **roller ginning**, which suits short staple; saw ginning would break the fibre. This is
  the single most-repeated technical point on the site and the main reason to buy from a gin at all.
- Fibre properties are short staple (15–20 mm), coarse (high micronaire), highly absorbent - so the
  site steers buyers toward coarse-count spinning, towelling, khadi, denim weft and surgical cotton,
  and says plainly that Ne 24s is about the practical count ceiling.
- There are **no commercial GM tree cotton varieties**, so a GM screen functions as a species-identity
  test rather than a seed-choice test.
- Certification is something the company *holds* (GOTS, OCS at the gin; NPOP/NOP at farm level), not
  something it issues. It explicitly does **not** hold OEKO-TEX, because that belongs on finished
  textiles.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home - hero with season figures, who we are, the three grades, fibre comparison table, grove-to-despatch diagram, why buy from us, four-step ordering process |
| `products.html` | The one product - full specification table, the three grades, packing and quantities, documents and seasonal testing, commercial terms. Opens with the "Cotton is all we sell" callout |
| `tree-cotton.html` | The fibre - botany, tree cotton vs upland comparison, grove cultivation, how to specify it, why the GM screen matters |
| `manufacturing.html` | Grove & gin - season figures by stage, how the crop is grown, why roller ginning, the testing programme, certifications held, growers and workers |
| `traceability.html` | Certification - the two levels of certificate (farm and gin), seasonal testing, the documents that ship with every consignment, volume reconciliation, and what certification does *not* prove |
| `faq.html` | Buyer FAQ - quantities in bales and MT, price and terms, certification and claims, fibre limits, logistics and gin visits |
| `contact.html` | Sales desks by function, quote-request form (grade + tonnage), gin and office addresses, visiting information |

Note: `manufacturing.html` and `traceability.html` keep their original filenames from an earlier
version of this site; their nav labels are now "Grove & Gin" and "Certification". Rename the files if
you want the URLs to match.

## Assets

- `css/styles.css` - the whole design system: tokens, light/dark themes, layout, components
- `js/site.js` - mobile nav, theme toggle (persisted to `localStorage`), reveal-on-scroll, form handler, footer year

No build step, no framework, no external requests. The favicon is an inline SVG data URI and the
grove-to-despatch diagram is inline SVG that inherits the theme's CSS custom properties.

### Colour

The palette is a pale "cotton" green-white (`--cotton`, `--cotton-deep`) used for the hero, page heroes
and closing bands, over a white page background. The light theme is the **default for everyone**,
including visitors whose OS is set to dark - dark is opt-in through the header toggle. To follow the
system preference again, restore a `@media (prefers-color-scheme: dark)` block in `css/styles.css`
mirroring `:root[data-theme="dark"]`, and restore the `systemDark()` check in `js/site.js`.

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
   `studio@gencott.example`, `compliance@gencott.example`, `groves@gencott.example`,
   `accounts@gencott.example`, `visits@gencott.example` and the `+91 712 000 000x` numbers are all
   invented. The site gives no address by design - add one to `contact.html` only if you want it public.
3. **Replace the commercial figures.** Acreage, family and headcount numbers, ginning capacity, outturn,
   bale counts, MOQs, lead times, and every staple/micronaire/trash figure including the three grade
   definitions are plausible placeholders, not real data. Nothing here should be quoted to a customer
   until it has been checked against your own HVI records.
4. **Remove or reword the footer disclaimer** ("Demonstration site…") once this represents a real
   company. It is there so the pages can't be mistaken for a live supplier.
5. **Do not publish certification claims you cannot evidence.** GOTS, OCS, NPOP/NOP, Fairtrade and
   SMETA are named on `manufacturing.html` as things this fictional company holds; listing them without
   valid scope certificates would be a misrepresentation.
6. Add real photography - a standing grove, hand-picking, the grading table, the roller gin line, a
   pressed bale - where the hero and section blocks currently rely on colour and type alone.
