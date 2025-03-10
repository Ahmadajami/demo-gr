<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
	<div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
		<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
			{m.OurTeam()}
		</h2>
		<p class="text-xl font-light text-white">
			{m.Team_desc()}
		</p>
	</div>
	<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
		<div class="text-center text-gray-500 dark:text-gray-400">
			<img
				alt="Tayeb Avatar"
				class="mx-auto mb-4 h-36 w-36 rounded-full"
				src="https://eu.ui-avatars.com/api/?name=Tayeb+Daaboul&size=250"
			/>

			<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<a href="/">Tayeb Daaboul</a>
			</h3>
			<p>CEO/Founder</p>
		</div>
		<div class="text-center text-gray-500 dark:text-gray-400">
			<img
				alt="Tayeb Avatar"
				class="mx-auto mb-4 h-36 w-36 rounded-full"
				src="https://eu.ui-avatars.com/api/?name=Areej+Muhammadl&size=250"
			/>

			<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<a href="/">Areej Muhammad</a>
			</h3>
			<p>COO</p>
		</div>
	</div>
</div>
