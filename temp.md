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

# let's basic setup
pages/_document.js (have the bootstrap css framework within head)
Note: while external bootstrap css using cdn link, the camelcase of the cross-origin keyword will be used(crossOrigin).

// just like react server (uses react-router-dom), next server uses the /pages/ directory followed by that page name which is the url itself, get served to express server (and node runtime (node server)) runs that pages as routes.

Note: Latest Next.js automatically includes the <meta charset="UTF-8" /> and <meta name="viewport" content="width=device-width, initial-scale=1" /> tags, so you can remove them from <head>

# create components directory(mkdir)
Have Layout (Header,Footer,index) for using the consistent layout within app.

Have Layout (Header,Footer,index) for using the same layout within app. (mkdir 'components' within frontend root dir).

Within Layout comp, the header will have Responsive Navbar.

Link component(of nextJS) for links(<a>) && href get relocate from, <a> to Link.

Create static pages viz. About, Register, Login

Summary of /page = any page(page/comp) created within '/page' get treated as route, (comp's have to be used within that).

# nextJS -> About to perform a full refresh
Error: ReferenceError: Frontend_root_dir is not defined

Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.

# if we not use NextJS SSR: issue
You’re not really using Next.js’s key power — dynamic rendering per request.

SEO may be weaker if data is client-fetched (because bots may not wait for hydration).

User sees a blank page until JS loads (slower first paint).

# Render mode in nextJS
Now PPR came in nextJS, previous are:
| Render Mode      | How It Works in Next.js                                              | 
| ---------------- | -------------------------------------------------------------------- | ----------------------------------- |
| **SSR**          | Uses `getServerSideProps` to fetch and render data on each request   | 
| **SSG / ISR**    | Uses `getStaticProps`/`getStaticPaths` at build or revalidation time | 
| **CSR** (likely) | Pages fetch data client-side (e.g., via `useEffect`) after loading   |
