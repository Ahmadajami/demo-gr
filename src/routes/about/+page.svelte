<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages';
	import Features from '$lib/components/ui/about/Features.svelte';
	import Footer from '$lib/components/ui/layout/Footer.svelte';
	import { inview } from 'svelte-inview';
	import type { Options } from 'svelte-inview';

	let isInViewContent = $state(false);

	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};
</script>

<svelte:head>
	<title>{m.About()}</title>
	{#if languageTag() === 'en'}
		<meta
			name="description"
			content="Learn about GRResin: Our mission, values, and commitment to providing high-quality epoxy resin and flooring solutions. Discover our passion for supporting artists and creating beautiful spaces."
		/>
		<meta
			name="keywords"
			content="GRResin, about us, company mission, epoxy resin, flooring, artists, company values, team, our story"
		/>
	{:else}
		<meta
			name="description"
			content="تعرف على جرسين: مهمتنا وقيمنا والتزامنا بتقديم ريسين إيبوكسي وحلول أرضيات عالية الجودة. اكتشف شغفنا بدعم الفنانين وإنشاء مساحات جميلة."
		/>
		<meta
			name="keywords"
			content="جرسين, من نحن, مهمة الشركة, ريسين إيبوكسي, أرضيات, فنانين, قيم الشركة, فريق العمل, قصتنا"
		/>
	{/if}
</svelte:head>

<div class="flex flex-col gap-y-8">
	<h1 class="mt-4 self-center text-pretty text-center text-5xl tracking-wide">About The Company</h1>
	<hr class="mx-auto my-4 h-2 w-48 border-0 bg-gray-100 md:my-10 dark:bg-gray-700" />

	<section
		id="features"
		class=" items-center justify-center"
		use:inview={options}
		oninview_change={(event) => {
			const { inView } = event.detail;
			isInViewContent = inView;
		}}
		class:animate={isInViewContent}
	>
		<Features />
	</section>

	<section>
		<Footer />
	</section>
</div>

<style>
</style>
