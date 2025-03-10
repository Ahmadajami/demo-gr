<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { inview, type Options } from 'svelte-inview';

	let isInViewPartner: boolean = $state(false);
	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};
</script>

<section
	id="#partners"
	class="my-8 block"
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInViewPartner = inView;
	}}
	class:animate={isInViewPartner}
>
	<div class=" h-56 bg-transparent text-center md:m-8 md:h-full">
		<h1
			class=" font-heading my-3 flex-1 flex-shrink-0 text-5xl font-bold tracking-tight drop-shadow-md md:text-6xl lg:text-7xl"
		>
			{m.partnar_title()}
		</h1>
		<img
			class="block h-full w-full"
			src=" https://grresin.com/wp-content/uploads/2023/10/%D8%B4%D8%B1%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%AD-01-1-2048x765.png"
			alt="Partners"
		/>
	</div>
</section>
