import type * as React from "react";

/**
 * `<image-slot>` — a plain block-level custom element with no runtime
 * behavior of its own. It exists purely as the literal tag name
 * styles/design-reference.css's mobile hairline-table rules look for via
 * `:has(image-slot)` (design-reference's own placeholder tag for photos).
 * Using it lets a card's flush photo opt out of that rule's padding
 * override instead of the rule wrongly firing because our real markup used
 * a plain `<div>`. See app/portefolio/page.tsx.
 */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
