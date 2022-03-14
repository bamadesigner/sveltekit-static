<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from "$lib/landmarks/Header.svelte";
	import Footer from "$lib/landmarks/Footer.svelte";
	import FiveHundred from "$lib/pages/500.svelte";
</script>

<Header />
<FiveHundred />
<Footer />
