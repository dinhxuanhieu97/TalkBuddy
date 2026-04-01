\# Design System Document

\## 1. Overview \& Creative North Star: "The Resilient Editor"

In an emergency, the user is likely experiencing a cocktail of adrenaline, anxiety, and frustration. Standard UI templates—with their cluttered grids and aggressive borders—only add to that cognitive load. This design system adopts the \*\*"Resilient Editor"\*\* as its North Star.

We are moving away from "app-like" rigidity toward a high-end editorial experience. This is achieved through \*\*intentional asymmetry\*\*, where key actions are anchored by bold, authoritative typography, and a \*\*tonal layering\*\* system that mimics physical sheets of premium paper and frosted glass. By removing 1px borders and relying on background shifts, the UI feels expansive and calm, providing a sense of "expert guidance" rather than a frantic tool.

\---

\## 2. Colors

The palette is designed to balance the urgency of a "Warning" yellow with the calming stability of deep, charcoal neutrals.

\### Palette Highlights

\- \*\*Primary (`#6c5a00`):\*\* Our signature "High-Vis" yellow. Used for the primary navigation anchor and critical CTAs.

\- \*\*Inverse Surface (`#0c0e10`):\*\* Used exclusively for the "Emergency Tip" or "SOS" sections to create a high-contrast focal point that immediately demands attention.

\- \*\*Tertiary (`#ffd709`):\*\* A supporting color for `primary\_container` like elements.

\- \*\*Surface Tiers:\*\* We utilize a five-tier surface system (`surface-container-lowest` to `highest`) to define hierarchy.

\### The "No-Line" Rule

\*\*Prohibit 1px solid borders for sectioning.\*\* Boundaries must be defined solely through background color shifts. For example, a `surface-container-lowest` card should sit atop a `surface-container-low` background. This creates a "premium-paper" feel where the eye follows the change in tone, not a wireframe line.

\### The "Glass \& Gradient" Rule

To add soul to the UI, floating headers and primary action backgrounds should utilize \*\*Glassmorphism\*\*. Use a semi-transparent `surface` color with a `backdrop-blur` of 20px. When a signature polish is needed, apply a subtle linear gradient from `primary` to `primary\_container` on large-format CTAs.

\---

\## 3. Typography

The system uses a pairing of \*\*Plus Jakarta Sans\*\* for authority and \*\*Inter\*\* for utility.

| Role | Font Family | Token | Case/Weight | Purpose |

| :--- | :--- | :--- | :--- | :--- |

| \*\*Display\*\* | Plus Jakarta Sans | `display-lg` | Bold | Emotional "Check-ins" |

| \*\*Headline\*\* | Plus Jakarta Sans | `headline-md` | Extra Bold | "What do you need?" (Urgency) |

| \*\*Title\*\* | Inter | `title-lg` | Semi-Bold | English Phrase (The Answer) |

| \*\*Body\*\* | Inter | `body-md` | Regular | Translations (The Context) |

| \*\*Label\*\* | Inter | `label-md` | Medium | Pills/Tags (Technical Meta) |

\*\*Editorial Contrast:\*\* The scale is intentionally dramatic. A `display-lg` heading should feel significantly larger than the surrounding text to create a clear "anchor" for the eye.

\---

\## 4. Elevation \& Depth: Tonal Layering

We avoid traditional "Drop Shadows" which can feel dated and muddy. Instead, we use light and material properties.

\### The Layering Principle

Stack tiers to create soft, natural lift.

\* \*\*Base:\*\* `surface`

\* \*\*Sectioning:\*\* `surface-container-low`

\* \*\*Interactive Cards:\*\* `surface-container-lowest` (White)

\### Ambient Shadows

If a card requires a floating state (e.g., an active phrase expansion), use an \*\*extra-diffused shadow\*\*:

\* \*\*Blur:\*\* `xl` (32px+)

\* \*\*Opacity:\*\* 4%-6%

\* \*\*Tint:\*\* Use a tinted version of `on-surface` (dark blue-grey) rather than pure black to keep the UI looking "airy."

\### The "Ghost Border" Fallback

If accessibility requirements demand a container boundary, use a \*\*Ghost Border\*\*. Use the `outline-variant` token at 15% opacity. It should be felt, not seen.

\---

\## 5. Components

\### Cards \& Lists

\* \*\*Rule:\*\* Forbid divider lines. Use `spacing-4` (1.4rem) or `spacing-6` (2rem) to create separation through white space.

\* \*\*Cards:\*\* Use `rounded-md` (1.5rem). The contrast between the `surface-container-lowest` (card) and `surface-container-low` (background) is the only allowed divider.

\### Buttons \& Pills

\* \*\*Primary CTA:\*\* Pill-shaped (`rounded-full`), using the `primary\_container` background with `on\_primary\_fixed` text.

\* \*\*Status Tags (Pills):\*\* Use `label-md` typography. Backgrounds must be low-saturation (e.g., `secondary\_container`) to ensure they don't compete with the primary actions.

\### Search Bar

\* \*\*Styling:\*\* A `surface-container-lowest` pill with a `Ghost Border`. The search icon should use `outline` color to remain subtle.

\### The "Context" Grid

\* \*\*Circular Iconography:\*\* Categories (Airport, Hospital) use colorful, rounded emoji-style icons centered within a `surface-container-lowest` card. When active, the entire card transitions to `primary\_container`.

\---

\## 6. Do's and Don'ts

\### Do

\* \*\*DO\*\* use generous white space. In an emergency, the user needs to breathe.

\* \*\*DO\*\* use "Plus Jakarta Sans" for all questions and "Inter" for all answers.

\* \*\*DO\*\* use `surface\_bright` for the header area to give the app a clean, clinical (but friendly) entry point.

\### Don't

\* \*\*DON'T\*\* use 100% black text. Use `on\_surface` (#2d2f31) to reduce eye strain.

\* \*\*DON'T\*\* use sharp corners. Everything must be `rounded-sm` at a minimum; the user is already on edge, the UI shouldn't be.

\* \*\*DON'T\*\* use more than one "Emergency Tip" box per screen. High contrast is a resource to be spent wisely.

\### Interaction Pattern: The "Soft Expand"

When a phrase is tapped, do not navigate to a new screen. Use a "Soft Expand" where the card grows in height, pushing other cards down, and revealing controls (Speak, Slow, Word-by-word) using a `surface-container-high` background to show it is "inside" the active task.
