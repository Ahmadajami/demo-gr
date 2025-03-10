<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';
	import Button from './Button.svelte';
	let repeat = 1;

	let endState: any = {
		text: 'typed',
		caret: 'hidden'
	};
	interface ResinFlooringOption {
		title: string;
		description: string;
		icon: string;
	}

	const resinFlooringOptions: ResinFlooringOption[] = [
		{
			icon: 'noto:hammer-and-wrench',
			title: 'Resin Floor Solutions: Design, Manufacture, & Install',
			description:
				'Specializing in high-quality resin flooring systems. From concept to completion, we handle design, manufacturing, and professional installation for residential, commercial, and industrial spaces.'
		},
		{
			icon: 'noto-v1:artist-palette',
			title: 'Custom Resin Flooring: Tailored to Your Needs',
			description:
				'Create unique and durable flooring with our custom resin solutions. We offer a wide range of colors, finishes, and textures to match your exact specifications and aesthetic vision.  Manufacturing and installation services provided.'
		},
		{
			icon: 'diamond-icon',
			title: 'Durable & Beautiful: Resin Floors by grresin',
			description:
				'grresin manufactures and installs premium resin flooring known for its exceptional durability, stunning appearance, and low maintenance. Perfect for any environment.'
		},
		{
			icon: 'noto:factory',
			title: 'Epoxy & Polyurethane Flooring: Factory Direct',
			description:
				'Get top-quality epoxy and polyurethane flooring directly from our factory. We offer competitive pricing and expert installation services for residential, commercial, and industrial applications.'
		},
		{
			icon: 'noto:man-mechanic',
			title: 'The Resin Flooring Experts: Manufacturing & Installation',
			description:
				'With years of experience, we are the leading experts in resin flooring. We manufacture our own products and provide professional installation for a flawless finish every time.'
		},
		{
			icon: 'noto:light-bulb',
			title: 'Innovative Resin Floor Systems: Made to Last',
			description:
				'We develop and manufacture innovative resin flooring systems engineered for superior performance and longevity. Serving both residential and commercial clients with expert installation.'
		},
		{
			icon: 'noto:sparkles',
			title: 'Transform Your Space: Custom Resin Flooring Solutions',
			description:
				'Transform any space with our beautiful and functional resin flooring.  We offer custom design, in-house manufacturing, and skilled installation to bring your vision to life.'
		},
		{
			icon: 'noto:flexed-biceps',
			title: 'High-Performance Resin Floors: Manufactured & Installed',
			description:
				'Need a high-performance flooring solution? We manufacture and install a range of specialized resin floors designed to withstand heavy traffic, chemicals, and extreme conditions.'
		},
		{
			title: 'Sustainable Resin Flooring: Eco-Friendly Solutions',
			description:
				'Committed to environmentally responsible practices, we offer a range of sustainable resin flooring options made with eco-friendly materials and processes. Manufacturing and installation provided.',
			icon: 'eco'
		}
	];
</script>

<div class=" mt-4 flex flex-col items-center justify-center">
	<div>
		<div class="container">
			<div class="space-y-4 md:space-y-10">
				<div class="space-y-4 text-center">
					<h2 class="text-2xl">
						<TypeWriter texts={['Our Features']} {repeat} {endState} />
					</h2>
					<p>There's too many amazing features to list, but here are a few of our favorites.</p>
				</div>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
					{#each resinFlooringOptions as item}
						<div class=" glass mx-3 flex flex-col space-y-4 p-4 text-center shadow-2xl md:p-10">
							<h3 class="text-xl"><strong>{item.title}</strong></h3>
							<Button icon={item.icon} />
							<p class="flex-1">
								{item.description}
							</p>
							<a
								href="/"
								class=" my-2 block border border-black bg-transparent px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-white hover:text-black"
							>
								Read More
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
