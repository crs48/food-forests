// Base-path-safe URL helper.
//
// The site is served from a sub-path on GitHub Pages
// (https://crs48.github.io/food-forests/), so every internal link and asset
// path must include that base. import.meta.env.BASE_URL is "/food-forests/"
// in production and "/" in dev — always build links through href() rather
// than hardcoding a leading "/".

const BASE = import.meta.env.BASE_URL; // e.g. "/food-forests/" or "/"

/** Build an internal href that respects the configured base path. */
export function href(path = '/'): string {
  const base = BASE.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  const joined = `${base}/${clean}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return joined === '' ? '/' : joined;
}

/** True when `path` matches the current pathname (for nav active state). */
export function isActive(current: string, path: string): boolean {
  const target = href(path);
  const now = current.replace(/\/$/, '') || '/';
  if (target === href('/')) return now === target;
  return now === target || now.startsWith(`${target}/`);
}

/** Absolute URL for canonical/OG tags. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const rel = href(path);
  return site ? new URL(rel, site).toString() : rel;
}
