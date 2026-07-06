---
name: Note Pin Utility
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is centered on **Utilitarian Minimalism**. It prioritizes cognitive ease and task efficiency over decorative flair. The aesthetic is "Instrumental"—the UI should feel like a high-precision tool that recedes into the background, allowing the user's content to remain the primary focus.

**Target Audience:** Professionals, researchers, and power users who require high-density information management and rapid data entry.
**Emotional Response:** Calm, focused, dependable, and efficient.
**Design Movement:** A hybrid of Swiss International Style and modern Software-as-a-Service (SaaS) utility. It utilizes generous whitespace to define structure rather than heavy ornamentation, ensuring a "directly usable web workflow" feel.

## Colors
This design system employs a restricted, functional palette to minimize visual noise. 

- **Primary Action:** A focused Indigo (#2563EB) is used exclusively for primary calls to action, active states, and critical interactive elements.
- **Surface & Background:** The application background uses a very light gray (#F8FAFC) to reduce eye strain compared to pure white, while interactive containers (cards, inputs) use pure white (#FFFFFF) to create a subtle layered effect.
- **Typography & Borders:** High-contrast slate tones are used for text to ensure WCAG AA accessibility. Borders use a soft gray (#E2E8F0) to define structure without creating "visual cages" around content.

## Typography
The typography system uses **Inter**, a typeface designed specifically for computer screens and high-density interfaces. 

- **Scale:** A tight typographic scale ensures that large amounts of data can be displayed without feeling cramped. 
- **Weights:** Use `600` (Semi-Bold) for headers to create clear vertical rhythm, and `400` (Regular) for all body text to maintain legibility in long-form notes.
- **Functional Labels:** Small labels (e.g., metadata, timestamps) should use `label-sm` with uppercase styling to differentiate them from actionable body text.

## Layout & Spacing
The layout follows a **4px baseline grid** to ensure mathematical consistency across all components.

- **Grid System:** A 12-column fluid grid is used for desktop views. For utility-heavy views (like note lists), use a "Sidebar-Detail" pattern where the sidebar is fixed at 320px and the detail pane expands.
- **Density:** This design system favors "Compact" density. Gutters are kept at 16px to maximize data visibility while maintaining enough "breathing room" to prevent visual overwhelm.
- **Mobile:** On mobile, margins reduce to 16px, and all multi-column layouts collapse into a single-column vertical stack.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Subtle Shadows** rather than heavy gradients.

- **Level 0 (Background):** #F8FAFC. Used for the main app canvas.
- **Level 1 (Surface):** #FFFFFF. Used for cards, list items, and input fields. Includes a 1px solid border (#E2E8F0).
- **Level 2 (Overlay/Menu):** #FFFFFF. Used for dropdowns and modals. These elements receive a "Soft Ambient Shadow": `0px 4px 12px rgba(0, 0, 0, 0.05)`.
- **Focus State:** Interactive elements (buttons, inputs) use a 2px outer ring in the Primary Color (#2563EB) with 2px of offset when focused via keyboard.

## Shapes
The shape language is "Soft-Square." By using a **0.25rem (4px)** base radius, the UI maintains a professional, structured appearance that feels modern but not overly "bubbly" or consumer-focused. Large containers like modals may use `rounded-lg` (8px) to provide a slightly softer entry point for complex interactions.

## Components
- **Buttons:** Primary buttons use a solid primary color background with white text. Secondary buttons use a white background with a 1px border (#E2E8F0) and slate text. Padding is 8px (vertical) x 16px (horizontal).
- **Inputs:** Form fields are 40px in height with a 1px border. The label sits above the field in `label-md`. The focus state changes the border color to the primary blue.
- **Compact Lists:** List items are 48px high. They use a subtle hover state (`#F1F5F9`) and a bottom border of 1px. Icons within lists are scaled to 16px or 20px.
- **Chips:** Used for tags or categories. They feature a light gray background (#F1F5F9) and `label-sm` text. They do not have borders unless active.
- **Status Indicators:** Use small 8px circles. Green (#10B981) for "Pinned/Active," Yellow (#F59E0B) for "Draft," and Gray (#94A3B8) for "Archived."
- **Checkboxes:** Square with a 2px border radius. When checked, they fill with the primary color and show a white checkmark.