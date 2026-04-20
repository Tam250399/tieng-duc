---
name: project-component-generator
description: Generate React/Next.js components quickly while following the repository structure and conventions. Use when the user asks to create a new component, scaffold UI files, split a large component, or build reusable components with project-consistent naming, folders, props, and exports.
---

# Project Component Generator

## Goal

Create components fast, but keep architecture consistent with the existing project.

## When To Use

Use this skill when the request includes:

- "create component", "tao component", "scaffold component"
- "split component", "tach component"
- "reusable UI", "shared component", "compound component"
- building new page sections, cards, dialogs, forms, or layout blocks

## Workflow

Follow this sequence every time:

1. Inspect nearest existing components in the same feature area.
2. Reuse the current naming and folder style before introducing new patterns.
3. Create the smallest complete component first, then add variants.
4. Keep logic and view separated when complexity increases.
5. Verify imports/exports and lint after edits.

## Project Structure Rules

Prefer existing structure in the target feature. If no local precedent exists, use:

- Feature-specific component: `src/features/<feature>/components/<ComponentName>/`
- Shared component: `src/components/<domain>/<ComponentName>/`
- Optional colocated files when useful:
  - `index.ts` for re-export
  - `<ComponentName>.tsx` for view
  - `<ComponentName>.types.ts` for complex props types
  - `<ComponentName>.styles.(ts|module.css)` if styling is separated
  - `<ComponentName>.test.tsx` for behavior tests

Do not force this fallback if the repository already uses a different layout nearby.

## Naming Conventions

- Component and file names in PascalCase for component files.
- Hooks in `useXxx` format.
- Props interface/type in `<ComponentName>Props`.
- Boolean props should be explicit and minimal; avoid boolean-prop explosion.
- Prefer semantic variant props (e.g. `variant="primary"`) over multiple booleans.

## Implementation Rules

- Keep components focused on one responsibility.
- Move heavy transformation logic outside render path (`useMemo` only when needed).
- Keep props small and intentional; pass data, not implementation details.
- Prefer composition (`children`, slots, subcomponents) when flexibility is required.
- Preserve accessibility defaults (`button` type, labels, aria attributes, keyboard support).
- Reuse existing UI primitives before creating new base primitives.

## Quick Scaffold Template

Use this as a baseline and adapt to local patterns:

```tsx
import type { ReactNode } from "react";

export type ComponentNameProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function ComponentName({
  title,
  description,
  actions,
  className,
}: ComponentNameProps) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      {actions}
    </section>
  );
}
```

## Split Strategy For Large Components

When a component grows too much:

1. Extract presentational parts first (`Header`, `Body`, `Actions`).
2. Keep state in the nearest useful parent.
3. Lift shared state instead of duplicating local state.
4. Introduce context only when prop passing becomes noisy across many levels.

## Output Checklist

Before finishing, ensure:

- Folder and naming match nearby feature conventions.
- Public exports are connected (`index.ts` or barrel used by that area).
- No dead props, unused imports, or hidden side effects in render.
- Keyboard and screen-reader basics are handled.
- Lint/type checks for changed files pass.

## Response Format

When applying this skill, provide:

1. What component was created/refactored.
2. Why the chosen folder path matches project structure.
3. Which reusable pattern was used (simple, composed, or split).
4. Any follow-up suggestion (test, story, or integration step).
