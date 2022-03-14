<script context="module" lang="ts">
	export const prerender = true;
	export const router = false;

	// When false, hot reloading does not work in dev
	// export const hydrate = false;
</script>

<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
	<title>Best website ever</title>
</svelte:head>

<Header />

<main id="main" class="flex justify-center w-full mx-auto px-8 py-12">
	<div
		class="inline-flex flex-col gap-4 justify-center text-center mx-auto border border-gray-200 px-24 py-16 bg-gray-50 rounded-md"
	>
		<div class="flex flex-col gap-2">
			<h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl m-0">Welcome to SvelteKit</h1>
			<p class="text-lg text-gray-600">
				Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation.
			</p>
		</div>
	</div>
</main>

<Footer />
