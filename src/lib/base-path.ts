/**
 * next.config.ts sets `basePath: "/xFinta"` (required for GitHub Pages,
 * which serves this site from a repo subpath, not the domain root).
 *
 * Next.js only auto-prepends `basePath` for `next/link` and `next/router`.
 * It does NOT do this for `next/image` `src`, or for raw `<video>`/
 * `<source>`/`poster` attributes — see
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
 * ("Images" section). Every local (root-relative, e.g. "/media/...") asset
 * path rendered by this app must be run through `withBasePath()` before
 * use, or it 404s once deployed under the /xFinta subpath (it still works
 * in local dev, where basePath-less requests happen to resolve at "/").
 *
 * The value is injected via `env` in next.config.ts (not a hardcoded
 * duplicate here) so there's exactly one place to change it.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ABSOLUTE_URL_PATTERN = /^[a-z][a-z0-9+.-]*:/i;

/**
 * Prepends the configured basePath to a root-relative local asset path.
 * Leaves external URLs (http://, https://, data:, blob:, //cdn...) and
 * already-relative/empty paths untouched.
 */
export function withBasePath(path: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  if (ABSOLUTE_URL_PATTERN.test(path)) return path;
  return `${BASE_PATH}${path}`;
}
