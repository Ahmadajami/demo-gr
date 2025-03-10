<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Contact from '$lib/components/ui/home/Contact.svelte';
	import Diamond from '$lib/components/ui/home/Diamond.svelte';
	import Footer from '$lib/components/ui/layout/Footer.svelte';
	import Partners from '$lib/components/ui/home/Partners.svelte';
	import Projects from '$lib/components/ui/home/Projects.svelte';
	import Statics from '$lib/components/ui/home/Statics.svelte';
	import SearchBar from '$lib/components/ui/home/SearchBar.svelte';
	import Contenet from '$lib/components/ui/home/Contenet.svelte';

	import { inview } from 'svelte-inview';
	import type { Options } from 'svelte-inview';
	import OurTeam from '$lib/components/ui/about/OurTeam.svelte';
	import { languageTag } from '$lib/paraglide/runtime';

	let isInView: boolean = $state(false);
	let isInViewProjects: boolean = $state(false);
	let isInViewContent2: boolean = $state(false);

	let isInViewContent: boolean = $state(false);

	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: false
	};
	const text = m.company_name();
	const words = text.split(' ');
	const t1 = words[0];
	const t2 = words[1];
	const stats_title = m.stats_title();
	const tit = stats_title.split('  ');
	const t3 = tit[0];
	const t4 = tit[1];
</script>

<svelte:head>
	<title>Graffiti Resin</title>
	{#if languageTag() === 'en'}
		<meta
			name="description"
			content="GRResin: Premium epoxy resin for artists & flooring solutions in KSA & globally. Join our community, explore creative possibilities, & find expert flooring services."
		/>
		<meta
			name="keywords"
			content="resin art,Saudi Arabia epoxy,Saudi Arabia resin, epoxy, epoxyKSA,flooring KSA, artist community, resin supplies, flooring projects, GRResin, Saudi Arabia resin, international resin, DIY resin"
		/>
	{:else}
		<meta
			name="description"
			content="جرسين: أفضل أنواع راتنجات الإيبوكسي للفنانين ومشاريع الأرضيات في السعودية والعالم. انضم لمجتمعنا، اكتشف إمكانياتك الإبداعية، واحصل على خدمات تركيب أرضيات متخصصة."
		/>
		<meta
			name="keywords"
			content="راتنج إيبوكسي, فن الراتنج, أرضيات إيبوكسي, السعودية, فنانين, مجتمع فني, مشاريع فنية, راتنجات, جرسين, تركيب أرضيات, مواد فنية"
		/>
	{/if}
</svelte:head>

<section>
	<div class="mx-4 my-8 md:my-0">
		<div class=" box-border w-full">
			<div class=" sm:pr-24 md:mx-4">
				<h1
					class=" flex-1 flex-shrink-0 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
				>
					{t1} <span>{t2}</span>.
				</h1>
				<p class=" mt-3 text-balance text-xl text-white md:text-2xl">
					{m.hero_title()}
				</p>
				<br />
				<div class=" block md:hidden">
					<SearchBar />
				</div>
			</div>
		</div>
	</div>
</section>
<br />
<div>
	<section>
		<Diamond cssClass="block mb-20" />
	</section>
</div>

<section
	id="Innovation"
	class=" glass mx-1"
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInViewContent = inView;
	}}
	class:animate={isInViewContent}
>
	<Contenet />
</section>
<section
	id="projects"
	class="  flex-row justify-between md:mt-5 md:flex-row"
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInViewProjects = inView;
	}}
	class:animate={isInViewProjects}
>
	<Projects />
</section>

<section
	id="statics"
	use:inview={options}
	oninview_change={(event) => {
		const { inView, scrollDirection } = event.detail;
		isInView = inView;
	}}
>
	<div class=" mx-auto w-full max-w-7xl p-4 py-16 md:py-24">
		<h1
			class=" font-heading my-5 px-3 text-center text-5xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl lg:text-7xl"
		>
			{t3}<span> {t4}</span> .
		</h1>

		<Statics reloade={isInView} />
	</div>
</section>

<section
	class="glass mx-4"
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInViewContent2 = inView;
	}}
	class:animate={isInViewContent2}
>
	<OurTeam />
</section>

<Partners />
<div class="h-[10vh] md:hidden"></div>
<Contact />

<section class="pt-9">
	<Footer />
</section>

<style>
	#projects {
		position: relative;
		padding: clamp(3em, 6vw, 5em);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
		gap: 2em;
		overflow-x: hidden;
	}
	@media (width>768px) {
		#projects {
			flex-direction: row;
		}
	}
</style>
