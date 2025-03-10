<script lang="ts">
	import '../app.css';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import { page } from '$app/state';
	import Appbar from '$lib/components/ui/layout/Appbar.svelte';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	let {
		data,
		children
	}: {
		data: LayoutData;
		children: Snippet;
	} = $props();
</script>

<ParaglideJS {i18n}>
	<Appbar />
	{#key data.url}
		<main
			class="scroll-smooth"
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300, delay: 300 }}
		>
			{@render children()}
		</main>
	{/key}
	<SvelteToast />
</ParaglideJS>
