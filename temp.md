// social media - chatting app

# so, we will create our project structure: manual way [x]
~~mkdir client~~
**npm init -y**

#### then..
npm install next@12.1.0 (around 14-16 packages)
#### then..
react && react-dom = npm install react@17.0.2 react-dom@17.0.2

# current node_modules we have
> @next — Installs the upcoming or pre-release version of a Next.js package & ++.

> next — A React framework for building full-stack web applications with SSR, SSG, and modern tooling & ++.

caniuse-lite — A lightweight subset of the caniuse database providing essential browser support data.

js-tokens — A tiny regex-based JavaScript tokenizer that never fails. (Helper package)

loose-envify — A fast replacer for process.env expressions, used to optimize builds. (Helper package)

nanoid — A tiny, secure, URL-friendly unique ID generator.

object-assign — A shim for Object.assign in environments where it’s not available. (Helper package)

picocolors — A minimal and fast library for formatting terminal output with colors.

postcss — A tool for transforming CSS with JavaScript plugins.

scheduler — A React package that manages task priorities and rendering scheduling. (Helper package)

source-map-js — A library for parsing and using JavaScript source maps.

styled-jsx — Scoped CSS-in-JS support for React components in Next.js.

> react — A library for building declarative user interfaces.

> react-dom — Provides DOM-specific methods to render and update React components in the browser.

# Avoid/ Prevent npm’s auto-upgrade weirdness
the ^17.0.2 → Allows updates that do not change the major version (≥17.0.2 <18.0.0).
the ~17.0.2 → Allows only patch updates within the same minor (≥17.0.2 <17.1.0).
the >=17.0.2 <18.0.0 → Allows any version in a custom range.
the * → Matches any version (latest always).
the latest → Always installs the npm-tagged latest release (can jump majors).
the next → Installs the npm-tagged “next” pre-release (often beta/RC).
the 17.x → Allows any minor or patch within major 17 (≥17.0.0 <18.0.0).
the 17.0.2 → Pins to the exact version, no upgrades allowed.

# lets create our structure (as we not used create-next-app scafFolding)
---
```html
<p>Lets first check the localhost<p>
```
# Folders
mkdir pages
> then have the entry point (just like react apps, index.html->index.js->app.js), so in nextJs it will be pages/index.js

// so only pages/index.js is required but yet points to note:

// The minimum required files for Next.js can be:

pages/index.js
pages/_app.js (only if you use global CSS)
pages/_document.js (if you need to customize the HTML structure eg.font is linked via a <link> tag in head.)

// Testing : 
🚀 Working setup