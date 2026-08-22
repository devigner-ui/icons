/*
 * SVG markup to a tree, because React Native cannot take markup.
 *
 * The web packages hand the drawing to the platform as a string (innerHTML in
 * Vue, {@html} in Svelte) and the browser parses it. React Native has no
 * parser: every shape has to be a react-native-svg component with real props,
 * so the shapes have to be known at build time.
 *
 * This is a tokenizer, not an XML implementation. It is safe because its input
 * is not arbitrary XML: it is markup React rendered from the icon components,
 * so there are no comments, no CDATA, no entities, no text nodes and no
 * unquoted attributes. Everything it does not expect, it throws on rather than
 * guessing, and roundTrips() below rebuilds the markup from the tree and
 * compares, which is what proves the parse across all 8,568 drawings.
 */
import assert from "node:assert/strict";

/* Open tag with attributes, self-closing or not, or a close tag. */
const TOKEN =
  /<([a-zA-Z]+)((?:\s+[\w:-]+="[^"]*")*)\s*(\/?)>|<\/([a-zA-Z]+)>/g;
const ATTR = /([\w:-]+)="([^"]*)"/g;

/**
 * Children of an `<svg>`, as `{ tag, attrs, children }`. Attribute names keep
 * their SVG spelling and their order, so the tree can be serialised back
 * byte-for-byte.
 */
export function parseSvgChildren(markup) {
  const root = { tag: null, children: [] };
  const stack = [root];
  let cursor = 0;

  for (const match of markup.matchAll(TOKEN)) {
    /* Anything between two tags would be a text node, which no icon has. */
    const between = markup.slice(cursor, match.index);
    assert.equal(
      between.trim(),
      "",
      `unexpected text content: ${JSON.stringify(between)}`,
    );
    cursor = match.index + match[0].length;

    const [, tag, rawAttrs, selfClosing, closing] = match;

    if (closing) {
      const open = stack.pop();
      assert.ok(open, `</${closing}> closes nothing`);
      assert.equal(open.tag, closing, `</${closing}> closes <${open.tag}>`);
      continue;
    }

    const attrs = {};
    for (const [, key, value] of rawAttrs.matchAll(ATTR)) attrs[key] = value;

    const node = { tag, attrs, children: [] };
    stack[stack.length - 1].children.push(node);
    if (!selfClosing) stack.push(node);
  }

  assert.equal(markup.slice(cursor).trim(), "", "trailing content");
  assert.equal(stack.length, 1, `${stack.length - 1} unclosed element(s)`);
  return root.children;
}

/** The inverse, used only to prove the parse. Matches React's output form. */
export function serialise(nodes) {
  return nodes
    .map((node) => {
      const attrs = Object.entries(node.attrs)
        .map(([k, v]) => ` ${k}="${v}"`)
        .join("");
      return `<${node.tag}${attrs}>${serialise(node.children)}</${node.tag}>`;
    })
    .join("");
}

export function roundTrips(markup) {
  return serialise(parseSvgChildren(markup)) === markup;
}

/*
 * React Native props are camelCase. The rendered markup is SVG, so the names
 * arrive hyphenated and have to be converted, the inverse of the mapping the
 * website once needed in the other direction, and the same class of bug: a
 * prop react-native-svg does not recognise is a prop it silently ignores, so
 * `fill-rule` left alone drops even-odd holes exactly as `fillRule` did in the
 * markup. Converted by rule rather than by table, so a new attribute in the
 * artwork cannot be one this forgot.
 */
export function toRnProps(attrs) {
  const out = {};
  for (const [key, value] of Object.entries(attrs)) {
    out[key.replace(/-([a-z])/g, (_m, c) => c.toUpperCase())] = value;
  }
  return out;
}

/** The whole tree, ready to be written into a module. */
export function toRnTree(nodes) {
  return nodes.map((node) => ({
    tag: node.tag,
    props: toRnProps(node.attrs),
    ...(node.children.length ? { children: toRnTree(node.children) } : {}),
  }));
}
