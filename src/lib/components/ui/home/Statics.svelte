<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import Util from '$lib/Util';

	const squareMeters: number = 1000000;
	let squareMetersText: string = $state('');
	const completedProjects: number = 50000;
	let completedProjectsText: string = $state('');
	const yearsInBusiness: number = 5;
	let yearsInBusinessText: string = $state('');
	let { reloade = $bindable() }: { reloade: boolean } = $props();
	$effect(() => {
		if (reloade) {
			Util.countUp({
				targetNumber: squareMeters,
				durationMs: 1500,
				callback: (formattedNumber) => {
					squareMetersText = formattedNumber;
				}
			});
			Util.countUp({
				targetNumber: completedProjects,
				durationMs: 1500,
				callback: (formattedNumber) => {
					completedProjectsText = formattedNumber;
				}
			});
			Util.countUp({
				targetNumber: yearsInBusiness,
				durationMs: 1500,
				callback: (formattedNumber) => {
					yearsInBusinessText = formattedNumber;
				}
			});
		} else {
			yearsInBusinessText = '';
			completedProjectsText = '';
			squareMetersText = '';
		}
	});
</script>

<div
	class="glass flex flex-col items-center justify-center gap-10 py-7 lg:flex-row"
	class:animate={reloade}
>
	<div class="space-y-1">
		<span class=" block text-center text-5xl font-bold md:text-8xl">{squareMetersText}+</span>
		<p class="block text-white"><strong>{m.stats1()}</strong></p>
	</div>
	<div class="border-surface-500/50 w-20 border-t lg:h-20 lg:w-1 lg:border-l lg:border-t-0"></div>
	<div class="space-y-1">
		<span class="block text-center text-5xl font-bold md:text-8xl">{completedProjectsText}+</span>
		<p class="block text-white"><strong>{m.stats2()}</strong></p>
	</div>
	<div class="border-surface-500/50 w-20 border-t lg:h-20 lg:w-1 lg:border-l lg:border-t-0"></div>
	<div class="space-y-1">
		{#if languageTag() === 'ar'}
			<span class=" block text-center text-5xl font-bold md:text-8xl">
				{yearsInBusinessText}<span>yr</span>
			</span>
		{:else}
			<span class=" block text-center text-5xl font-bold md:text-8xl">{yearsInBusinessText} yr</span
			>
		{/if}
		<p class="block text-white"><strong>{m.stats3()}</strong></p>
	</div>
</div>

<style>
	.animate {
		animation: animate 1s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.5s backwards;
	}

	@keyframes animate {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
