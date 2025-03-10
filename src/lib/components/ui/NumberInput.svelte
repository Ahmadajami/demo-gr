<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';
	import { TelInput, normalizedCountries } from 'svelte-tel-input';

	import type { DetailedValue, CountryCode, E164Number } from 'svelte-tel-input/types';
	import { clickOutsideAction } from 'svelte-tel-input/utils';
	let showMenu = $state(false);
	const closeDropdown = (e?: Event) => {
		if (showMenu) {
			e?.preventDefault();
			showMenu = false;
		}
	};
	let clickOutside = $state(false);
	const closeOnClickOutside = () => {
		if (clickOutside) {
			closeDropdown();
		}
	};

	let selectedCountry: CountryCode = $state('SA');

	let value: E164Number | null = $state('');

	let { valid = $bindable<boolean>(false) } = $props();

	let detailedValue: DetailedValue | null = $state(null);
</script>

<div class="flex items-center" use:clickOutsideAction={closeOnClickOutside}>
	<button
		id="dropdown-phone-button"
		data-dropdown-toggle="dropdown-phone"
		class=" inline-flex shrink-0 items-center border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
		type="button"
		onclick={() => {
			showMenu = !showMenu;
		}}
	>
		<span class="flag flag-{selectedCountry.toLowerCase()} mr-3 flex-shrink-0"></span>
		{selectedCountry}
		<Icon icon="mingcute:down-fill" width="24" height="24" style="color: #fff" />
	</button>

	<label for="phone-input" class="sr-only mb-2 text-sm font-medium text-white">Phone number:</label>
	<div class="relative w-full">
		<TelInput
			required={true}
			bind:country={selectedCountry}
			bind:value
			bind:valid
			bind:detailedValue
			on:input={() => {
				showMenu = false;
			}}
			options={{
				format: 'international',
				invalidateOnCountryChange: true
			}}
			form="flooring"
			name="number"
			class=" block w-full  border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 invalid:border-red-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
		/>
	</div>
	<p class="h-2 text-red-500">
		{#if page.form?.validation?.number}
			{page.form.validation.number}
		{/if}
	</p>
</div>
<div
	id="dropdown-phone"
	class:hidden={!showMenu}
	class="  w-full divide-y divide-gray-100 bg-gray-700"
>
	<ul
		class="absolute h-32 w-60 overflow-y-scroll bg-gray-700 py-2 text-sm text-gray-200"
		aria-labelledby="dropdown-phone-button"
	>
		{#each normalizedCountries as currentCountry (currentCountry.id)}
			<li>
				<button
					type="button"
					value={currentCountry.iso2}
					class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
					onclick={() => {
						selectedCountry = currentCountry.iso2;
						showMenu = false;
					}}
				>
					<div
						class="inline-flex w-full items-center"
						aria-selected={currentCountry.iso2 === selectedCountry}
					>
						<span class="flag flag-{currentCountry.iso2.toLowerCase()} mr-3"></span>
						{currentCountry.label}
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>

<!--
<input
	type="text"
	bind:value={searchtext}
	class="bg-black text-white"
	onchange={() => {
		arr = searchCountries(searchtext);
	}}
/>
{#if arr}
	{#each arr as element}
		<div>{element.label}</div>
	{/each}
{/if}
-->
