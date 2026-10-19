/**
 * DOM rendering for the grovewatch viewer. Everything is built with the native
 * DOM API — no frameworks, no dependencies. All user-controlled strings go
 * through textContent, never innerHTML, so the viewer is XSS-safe by default.
 */
import type { Snapshot } from "./types.js";
/** Renders the whole snapshot into the given container, replacing its content. */
export declare function render(container: HTMLElement, snap: Snapshot): void;
/** Renders an error banner into the container. */
export declare function renderError(container: HTMLElement, message: string): void;
