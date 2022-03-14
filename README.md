# SvelteKit Static Template with TailwindCSS

This repo is a template created from the "out of the box" SvelteKit "skeleton project".

The goal of this template was to preserve my method for creating a static SvelteKit "app" using the [SvelteKit static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

You can learn more about SvelteKit on [the SvelteKit website](https://kit.svelte.dev/).

## Getting started

You do not need to install SvelteKit separately as it is included in this repo.

Here's how to setup your SvelteKit static app:

1. Open the command line on your computer
   - For example: Terminal on the Mac OS.
2. Git clone this repo onto your local computer.
   - Learn [how to git clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
3. Open the repo directory on your local computer inside the command line.
4. Run `nvm use` to make sure you have the correction version of Node.js installed.
   - Learn [how to install Node.js](https://nodejs.dev/learn/how-to-install-nodejs).
5. Run `yarn install` on the command line to download the dependencies.
   - Learn [how to install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

## Developing your app/website

To get started developing your app:

1. Run `yarn run dev` on the command line to start working on your site!

### Using TailwindCSS

When you run `yarn run dev`, two things are happening: Svelte is doing its thing and TailwindCSS is doing its thing.

Per the beauty of Svelte, you will want to keep your CSS isolated inside your Svelte files as much as possible.

You can still use Tailwind techniques inside your Svelte files. Check out [./src/lib/Header.svelte](./src/lib/Header.svelte#L8) for an example.

For "global" CSS, open [/src/lib/css/styles.pcss](./src/lib/css/styles.pcss) to manage your global CSS via "the Tailwind way".

If you are unfamiliar with Tailwind, [visit the Tailwind documentation](https://tailwindcss.com/docs/) for more information.

When you are in development mode and edit your CSS, your app's webpages will automatically update in the browser per the SvelteKit HMR. And when you build your website files, your CSS will be purged of unused CSS and minifed for production.

## Building your static website

This process will create a `build` directory which will house the static files for your website.

To build the directory and files:

1. Return to the command line.
2. Run `yarn run build` in the command line.

### Managing your app config

You are encouraged to check out [SvelteKit's page options](https://kit.svelte.dev/docs/page-options). "router", "hydrate", and "prerender" are important to explore and manage for customizing any Svelte app, especially a static app.

**Possible bug:** If hydrate is false, "hot reloading" will not work in dev.

By default, I have it set to `router: false`, `hydrate: false`, and `prerender: false` to support a truly static HTML experience.

If I needed to add some JavaScript functionality, I would set `hydrate: true`. If I wanted to enable client-side routing, I would set `router: true`.

Setting `prerender: true` allows for a truly static app as it renders all necessary HTML as it builds your files. If you need dynamic rendering for any pages within your app, odds are you need to change your Svelte app to a [non-static adapter](https://kit.svelte.dev/docs/adapters).

## Previewing your static website

Once built, you can preview the built app with `npm run preview`.

**The preview command should _not_ be used to serve your app in production.**

## Deploying your static website

Since your files are static HTML files, you can deploy your website just like any other collection of HTML files.

If you need more information or education on how to deploy HTML files, might I recommend searching for "how to deploy HTML files" in your favorite search engine.

### Setting up error pages

This build will generate 400 and 500 error pages. You will want to setup your hosting to point to the 400/index.html and 500/index.html files to serve up the appropriate error pages when necessary.

For example, I placed the following in my nginx server block:

```
error_page 404 /404/index.html;
error_page 500 502 503 504 /500/index.html;
```

Considering there are lots of methods for hosting, I will recommend your favorite search engine for more information on this topic.
