// Rehype plugin: prefix root-relative links & assets in Markdown with the
// site's base path, so in-content links like [layers](/layers) resolve
// correctly when the site is served from a sub-path (GitHub Pages project
// page at /food-forests/). Self-contained — no external tree-walker dep.

export function rehypeBaseUrl({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  if (!prefix) return () => {};

  const rewrite = (node) => {
    if (node.type === 'element' && node.properties) {
      for (const attr of ['href', 'src']) {
        const val = node.properties[attr];
        if (
          typeof val === 'string' &&
          val.startsWith('/') &&
          !val.startsWith('//') &&
          !val.startsWith(`${prefix}/`)
        ) {
          node.properties[attr] = prefix + val;
        }
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(rewrite);
  };

  return (tree) => rewrite(tree);
}
