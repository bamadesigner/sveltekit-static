<script lang="ts">
	import '$lib/css/dist.css';
</script>

<a id="skip-to-main" href="#main" class="sr-only">Skip to main content</a>

<slot />

<style type="text/postcss">
	#skip-to-main:focus,
	#skip-to-main:hover {
		@apply bg-blue-800;
		font-size: 1.2rem;
		line-height: normal;
		color: #fff;
		width: auto;
		height: auto;
		left: 0;
		top: 0;
		clip: unset;
		padding: 1rem;
		margin: 0;
		overflow: auto;
		white-space: normal;
		border: 0;
		z-index: 1000;
	}
</style>
