<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from "$lib/landmarks/Header.svelte";
	import Footer from "$lib/landmarks/Footer.svelte";
	import FourHundredFour from "$lib/pages/404.svelte";
</script>

<Header />
<FourHundredFour />
<Footer />
