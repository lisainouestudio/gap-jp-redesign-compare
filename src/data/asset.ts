/** Prefix public asset paths with Vite base (GitHub Pages subpath-safe). */
export function asset(path: string) {
  const cleaned = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${cleaned}`;
}
