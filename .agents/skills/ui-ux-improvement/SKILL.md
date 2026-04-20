---
name: ui-ux-improvement
description: Improve UI/UX quality for web interfaces with practical fixes for layout, visual hierarchy, accessibility, feedback states, and responsive behavior. Use when the user asks to improve UI, UX, accessibility, readability, mobile experience, conversion flow, or overall design quality.
metadata:
  author: project
  version: "1.0.0"
---

# UI/UX Improvement

Apply this skill when the user wants to make an interface cleaner, easier to use, and more accessible.

## Quick Workflow

1. Identify the target page/component and user goal.
2. Audit current issues in 6 areas:
   - Clarity and visual hierarchy
   - Spacing and layout consistency
   - Typography and readability
   - Color contrast and accessibility
   - Interaction and feedback states
   - Responsive behavior (mobile first)
3. Propose the smallest high-impact changes first.
4. Implement changes in code (not only suggestions) unless user requests review-only.
5. Verify with lints/tests and summarize impact.

## Standards Checklist

- Keep primary actions visually dominant and predictable.
- Ensure text contrast is readable (target WCAG AA minimum).
- Use clear heading structure and concise copy.
- Keep tap/click targets comfortable on mobile.
- Provide hover/focus/active/disabled/loading/error states.
- Avoid layout shift when content loads.
- Keep spacing scale consistent across sections/components.
- Preserve keyboard accessibility and visible focus ring.

## Output Format

When reporting improvements, use:

1. Problem: what hurts usability now
2. Change: what was updated in code
3. Impact: why this improves user experience
4. Optional next step: further polish if needed

## Default Priorities

1. Accessibility and readability
2. Mobile responsiveness
3. Navigation and task completion clarity
4. Visual polish and micro-interactions

## Notes

- Prefer incremental changes over large redesigns.
- Reuse existing design tokens/components before creating new ones.
- Keep UI behavior consistent with nearby screens.
