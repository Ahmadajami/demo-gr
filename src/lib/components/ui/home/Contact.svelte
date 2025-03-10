<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { toast } from '@zerodevx/svelte-toast';
	import ShineBorder from '../ShineBorder.svelte';

	let form = $state() as HTMLFormElement;
	const shouldReset = $derived(page.status !== 200);
	const suc: boolean = $derived(page.form?.success ?? false);
	const success = (m: string) =>
		toast.push(m, {
			theme: {
				'--toastBackground': 'green',
				'--toastColor': 'white',
				'--toastBarBackground': 'olive'
			}
		});
	let message = $state(m.contact_succsess());

	$effect(() => {
		if (shouldReset) {
			form.reset();
		}
	});
	$effect(() => {
		if (suc) {
			success(message);
		}
	});
</script>

<section id="contact" class="glass m-2">
	<div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
		<h2
			class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
		>
			{m.contact_us()}
		</h2>
		<p class="mb-8 text-center font-light text-white sm:text-xl lg:mb-16">
			{m.contact_us_desc()}
		</p>
		<form method="POST" class="space-y-8" use:enhance bind:this={form}>
			<div>
				<label for="email" class="mb-2 block text-sm font-medium">{m.email_title()}</label>
				<input
					name="email"
					type="email"
					id="email"
					class="    shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<p class="h-1 text-red-500">
				{#if page.form?.validation?.email}
					{m.email_validation()}
				{/if}
			</p>
			<div>
				<label for="subject" class="mb-2 block text-sm font-medium">{m.subject()}</label>
				<input
					type="text"
					name="subject"
					id="subject"
					class=" shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-black shadow-sm"
					placeholder={m.Subject_placeHolder()}
					required
				/>
			</div>
			<p class="h-1 text-red-500">
				{#if page.form?.validation?.subject}
					{m.subject_validation()}
				{/if}
			</p>
			<div class="sm:col-span-2">
				<label for="message" class="mb-2 block text-sm font-medium text-white"
					>{m.your_message()}</label
				>
				<textarea
					id="message"
					name="message"
					rows="6"
					class=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
					placeholder={m.message_placeHolder()}
				></textarea>
			</div>
			<p class="h-1 text-red-500">
				{#if page.form?.validation?.message}
					{m.message_validation()}
				{/if}
			</p>
			<ShineBorder color={'purple'} borderWidth={10} class="min-w-full">
				<button
					type="submit"
					class=" z-10 min-w-full bg-black px-5 py-3 text-center text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-4 sm:w-fit"
					>{m.send_message()}</button
				>
			</ShineBorder>
		</form>
	</div>
</section>
