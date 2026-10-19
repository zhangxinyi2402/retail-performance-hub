# Retail Performance Hub

Configurable Retail Performance Management Tool for boutique retail.

一次录入，自动完成计算、分析与汇报。

“Enter data once. Turn it into insight, review and presentation everywhere.”

## Current scope — Phase 1.5

**Information Architecture & Workbench Refinement** builds on the Phase 1 visual foundation. The project remains a static, mock-data frontend, ready for Design Review. It does not implement Phase 2.

The visual system remains **Editorial Luxury BI**: warm white, charcoal, restrained champagne, Cormorant Garamond display type, Inter UI type, thin borders, small corners and quiet motion. Google Fonts is optional; Georgia and Arial/Helvetica are the fallbacks.

## Three-layer information architecture

1. **Overview Workbench / 经营总览工作台** — one compact, scrollable view of the month.
2. **Detail Analysis / 专题分析** — Sales, Product, Customer & Traffic, Staff, Competitor, Monthly Review.
3. **Admin Configuration / 后台配置** — one central workbench with Modules, Data, Brand, Rules and Report tabs.

The frontend sidebar has seven analysis destinations plus Admin. High Value is part of Sales; the store funnel lives in Customer & Traffic. Presentation is a top-right action rather than a sidebar category.

## Open locally

Open `index.html` directly in a modern browser, or serve this directory with any static file server. For example, if Python is installed:

```sh
python -m http.server 8080
```

Visit `http://localhost:8080/`, or go directly to `/dashboard/index.html`. This command is an optional static preview utility, not a product backend. No npm, build, dependencies, framework, chart library or `node_modules` is required.

All internal page, script and CSS paths are relative and suitable for a GitHub Pages subdirectory or Netlify. No routing rewrite is necessary. Admin tab anchors such as `admin/index.html#brand` are directly addressable.

## Files and responsibilities

```text
retail-performance-hub/
├── index.html                   Product entry, bilingual
├── admin/
│   ├── index.html               Central configuration workbench
│   ├── monthly-data.html        Legacy guide → index.html#data
│   ├── builder.html             Legacy guide → index.html#modules
│   └── settings.html            Legacy guide → index.html#brand
├── dashboard/
│   ├── index.html               Overview Workbench, nine modules
│   ├── sales.html               Sales, comparisons, high value, staff contribution
│   ├── product.html             Series / Material / Function / Gender
│   ├── customer.html            Customer, traffic, demographics, store funnel
│   ├── staff.html               Ranking, eight metrics, strengths/opportunities
│   ├── competitor.html          Metric tabs, ranks, three-brand mock trend
│   ├── monthly-review.html      Campaign, project, training, next-month focus
│   └── presentation.html        Nine simplified presentation screens
├── css/
│   ├── tokens.css               Shared colors, type, spacing, radii, layout tokens
│   ├── base.css                 Typography, reset and accessibility foundations
│   ├── components.css           Shared controls, sidebar/header, tables and bars
│   ├── admin.css                Module workbench, previews, library, WHAT/HOW dialog
│   └── dashboard.css            Overview grid, analysis pages and presentation
├── js/
│   ├── mock-data.js             Single sample data and display-configuration source
│   ├── i18n.js                  One zh/en UI dictionary and language-aware links
│   ├── theme.js                 In-memory Brand + Collection CSS variable themes
│   ├── navigation.js            Mobile menu, tab keys and presentation navigation
│   └── app.js                   Shared page renderers and temporary UI state
├── assets/
│   ├── logos/.gitkeep           Reserved brand assets
│   └── images/.gitkeep          Reserved imagery
├── README.md
└── .gitignore
```

HTML files are semantic shells. Deferred classic scripts render from the shared data layer. There is no duplicated language-specific HTML, inline click handler, or authored inline style. JavaScript writes visualization dimensions and CSS custom properties at runtime.

## Overview and detail

The Overview has nine modules with a 12-column desktop layout:

- Executive Summary spans the row; Sales is dominant, Target is emphasized, Units and Average Ticket are secondary.
- Sales Trend spans eight columns and High Value four.
- Product Mix, Customer and Traffic each span four.
- Staff spans eight columns and Competitor four.
- Monthly Highlight spans the row.

Module cards use 24px gaps and padding, subtle borders and 4px radii. Layout becomes two columns on tablet and one column at mobile widths. Detail analysis uses larger spacing. Each Overview module is a keyboard-accessible link to the relevant detail, and every detail provides Back to Overview.

Charts use HTML/CSS/SVG only. Material, Function and Gender now contain clearly illustrative mock distributions rather than an empty placeholder. Customer average tickets and regions, Sales MoM and competitor trend lines are additional demo-only samples.

## Central Admin Configuration

**Modules** is the default tab. Nine rows represent the Overview. Move Up / Down updates the order in the DOM and in the same-page preview. Hide / Show controls preview visibility; all-hidden and first/last boundaries are handled. Reset Layout restores the default structure. State is preserved when switching tabs or languages in the current document.

The eight building blocks are KPI Card, Trend, Distribution, Ranking, Funnel, Content, Table and Custom. Each opens a native modal dialog that separates:

- **WHAT** — data content (for example Series Sales).
- **HOW** — building block, range, color theme and comparison.

These are UI-only demo controls. Closing the dialog does not map data, create a module or change the displayed business metrics. The dialog supports keyboard focus containment, Escape and close controls.

The preview reuses the actual Overview renderers. It is scrollable so the module library remains within reach. These temporary choices apply to this preview only; navigating to a separate frontend page uses the default mock layout. No configuration is saved or transmitted.

**Data** shows the five read-only source statuses, records, update timestamps and Data Health. **Brand** combines brand metadata, themes and preview. **Rules** shows sample thresholds and price bands with the explicit Phase 2 rule-engine notice. **Report** shows a default sequence, report language selector and Editorial style; these controls do not change Presentation in this phase.

The old Builder, Settings and Monthly Data URLs remain as bilingual guide pages linking to their centralized tabs. There is one active module-management system.

## Brand + Collection Theme

`mock-data.js` defines `brandTheme` and `collectionTheme`. `theme.js` applies:

- `brandPrimary` → `--brand-primary`
- `brandDark` → `--color-dark`
- `brandLight` → `--color-light`
- Each collection → `--collection-<stable-id>`

Default collections: Fifty Fathoms `#17364D`, Villeret `#B39A6B`, Women `#9B7771`, Other `#8B8982`. Products reference stable collection IDs, not a positional color array. Product Mix in Overview, Product Detail, Presentation and both admin previews uses these same tokens; no series hex colors are hardcoded in product chart renderers. Missing collection colors fall back to the brand accent.

Brand and collection inputs update the theme and Product Mix Preview immediately. Those colors also appear in the Modules preview when switching tabs. Reset Theme restores all defaults. Changes survive an in-page language/tab switch, but not reload or navigation to a separate document. Add Collection shows a translated demo notice and creates no data. Brand metadata remains read-only Mock Data.

User-selected colors are unrestricted; custom combinations may reduce text contrast. Default chart colors are intended for the warm-white product charts.

## Bilingual UI

`js/i18n.js` exposes one `translations.zh` / `translations.en` dictionary. All main navigation, page titles, metrics, tabs, labels, statuses, tooltips, dialogs, notices and presentation controls use the translation helper or `data-i18n` marker. Narrative mock content is stored with zh/en variants in `mock-data.js`. Brand names, initials, currency codes and the terms WHAT / HOW / Editorial remain proper labels.

The lightweight **中 / EN** control switches immediately and updates the HTML `lang` attribute and document title. Active tab, theme inputs, module order/visibility and the current presentation screen survive the switch. English is passed in relative links as `?lang=en`, so drill-down/back navigation keeps the selected language. No LocalStorage or other language persistence is used; a URL with no language parameter defaults to Chinese.

## Presentation

Nine simplified screens remain: Executive, Sales, High Value, Product, Customer, Funnel, Staff, Competitor and Campaign. Use the previous/next buttons or ArrowLeft/ArrowRight. First/last buttons disable at the boundaries. Esc or Exit returns to Overview with the selected UI language. The screen counter is announced with a live region. The UI language can change without losing the current screen. On mobile or short screens, a screen may scroll vertically to keep content readable.

## Mock data and scope limits

The original Blancpain / Shenzhen MixC / December 2023 values are retained: sales 8,857,000; units 37; average ticket 239,378; target 110.7%; high-value units 15 and share 40.5%; traffic 509 visitors / 271 groups; the three competitors and Christmas campaign. All additions are explicitly demo-only sample values in the same data source.

The supplied series totals do not reconcile with headline sales. Funnel counts/rates and Data Health statuses are independent illustrative snapshots. JLC is missing in the input-status demo while the benchmark demo includes all three supplied competitors. No reconciliation or real calculation is claimed. The campaign artwork is a CSS editorial placeholder.

**Still not implemented:** Excel import/parsing, real sales entry, business calculations, a high-value rule engine, dynamic price bands, business-data persistence or LocalStorage, database, API, backend, AI, login, permissions, PDF/PPT export, real dynamic module creation, drag-and-drop libraries or multi-user collaboration.

## Verification

Browser checks cover both languages at 1440, 1280, 1024, 834 and 390px, including all 13 HTML pages, all five Admin tabs and all nine Presentation screens. Additional checks cover mobile modal layout. No horizontal page overflow, missing local link targets, JavaScript runtime errors or console errors were detected in that run.

Verified interactions include module ordering/visibility/reset, all eight library dialogs, WHAT/HOW controls, Brand and Collection input/reset, color continuity across tabs/language changes, reload defaults, Product and Competitor tabs, language-aware drill-down/back, mobile sidebar, and presentation buttons/keys/boundaries/Escape. Screenshots were inspected for Chinese/English Overview, Admin Modules and Brand, mobile Overview and the mobile configuration panel.

## Design Review priorities / next phase

Review Overview density and hierarchy; seven-destination navigation and drill-down; Modules order/visibility and preview; WHAT/HOW configuration; collection colors; bilingual and presentation reading flow. Phase 2 data ingestion, validation and rule logic remain future work pending approval.

**Phase 1.5 stops here, awaiting Design Review.**
