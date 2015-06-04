/**
 * Pure, dependency-free helpers for the viewer. These contain no DOM access so
 * they are trivially unit-testable and reusable.
 */
import type { FileRecord, Snapshot, TreeNode } from "./types.js";
/** Formats a byte count as a human-readable string (e.g. "1.5 KB"). */
export declare function formatBytes(bytes: number): string;
/** Returns the first `n` characters of a hex digest for compact display. */
export declare function shortDigest(digest: string, n?: number): string;
/** Formats an ISO timestamp into a locale string, tolerating bad input. */
