<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div
	class="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16"
>
	<div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
		<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
			{m.p_head()}
		</h2>
		<p class="mb-4 text-2xl">
			{m.p1_title()}
		</p>
		<p class="text-2xl">
			{m.p2_title()}
		</p>
	</div>
	<div class="mt-8 grid grid-cols-2 gap-4">
		<img class="w-full rounded-lg" src="images/banners/arts.jpg" alt="office content 1" />
		<img
			class="mt-4 w-full rounded-lg lg:mt-10"
			src="images/banners/floor.jpg"
			alt="office content 2"
		/>
	</div>
</div>
