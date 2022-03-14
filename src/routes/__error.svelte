<script context="module" lang="ts">
	export function load({ status }) {
		return {
			props: {
				status,
			},
		};
	}
</script>

<script lang="ts">
	import Header from "$lib/landmarks/Header.svelte";
	import Footer from "$lib/landmarks/Footer.svelte";
	import FourHundredFour from "$lib/pages/404.svelte";
	import FiveHundred from "$lib/pages/500.svelte";
	export let status: number;
</script>

<Header />

{#if status == 404}
	<FourHundredFour />
{:else}
	<FiveHundred />
{/if}

<Footer />
