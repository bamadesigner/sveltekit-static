<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import FourHundredFour from "$lib/404.svelte";
</script>

<Header />
<FourHundredFour />
<Footer />
