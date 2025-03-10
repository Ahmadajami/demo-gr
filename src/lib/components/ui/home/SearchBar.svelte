<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { createPostsIndex, searchPostsIndex, type Result } from '$lib/search';
	import Icon from '@iconify/svelte';

	import { fade } from 'svelte/transition';

	let searchTerm = $state('');
	let open = $state(false);
	const platform = browser && window.navigator.platform;
	let search: 'load' | 'ready' | 'idle' = $state('load');
	let err: string | undefined = $state(undefined);
	let input: HTMLInputElement = $state() as HTMLInputElement;

	let results: Result[] = $derived(
		(search as unknown) === 'ready' ? searchPostsIndex(searchTerm) : []
	);
	onNavigate(() => {
		open = false;
	});
	async function initilize() {
		search = 'load';
		const posts = await fetch('/search.json').then((res) => res.json());
		createPostsIndex(posts);
	}
	$effect(() => {
		if (open) {
			initilize()
				.then(() => {
					search = 'ready';
				})
				.catch((e) => {
					err = 'Somthig Happend';
				});
		}
	});
	$effect(() => {
		if (open) {
			if (search === 'ready') {
				input.focus();
			}
		} else {
			searchTerm = '';
		}
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.ctrlKey || e.metaKey) {
			if (e.key === 'k' || e.key === 'K') {
				e.preventDefault();

				if (search === 'idle' && !open) initilize();

				if (search === 'ready') {
					open = !open;
				}
			}
		}
	}}
/>

<div class="h-1">
	<button
		class="open-search"
		onclick={() => {
			open = !open;
		}}
	>
		<p class="hidden text-gray-500 md:block dark:text-gray-400">
			{m.search_press()}
			<kbd
				class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
				>{platform === 'MacIntel' ? '⌘' : 'Ctrl'}</kbd
			>
			+
			<kbd
				class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"
				>K</kbd
			>
		</p>

		<div class=" glass flex w-[70vw] flex-row py-3 md:hidden">
			{m.search_desc()}
			<div>
				<Icon icon="ic:baseline-search" width="24" height="24" style="color: #fff" />
			</div>
		</div>
	</button>
	{#if err === undefined}
		{#if open}
			{#if search === 'load'}
				<div
					in:fade={{ duration: 200 }}
					class="overlay"
					aria-hidden="true"
					onclick={() => {
						open = false;
					}}
				></div>
				<div class="search">
					<div class="flex items-center justify-center">
						<div class="loader"></div>
					</div>
				</div>
			{/if}
			{#if search === 'ready'}
				<div
					in:fade={{ duration: 200 }}
					class="overlay"
					aria-hidden="true"
					onclick={() => {
						open = false;
					}}
				></div>
				<div class="search">
					<input
						bind:value={searchTerm}
						placeholder="Search"
						autocomplete="off"
						spellcheck="false"
						type="search"
						bind:this={input}
					/>

					<div class="results">
						{#if results}
							<ul>
								{#each results as result}
									<li>
										<a href="/{result.slug}">
											{@html result.title}
										</a>
										<p>{@html result.content}</p>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/if}
		{/if}
	{:else}
		<h1>Somthig is Wrong with Search</h1>
	{/if}
</div>

<style>
	.loader {
		width: 60px;
		aspect-ratio: 1;
		display: flex;
		animation: l11-0 2s infinite linear;
	}
	.loader::before,
	.loader::after {
		content: '';
		flex: 1;
		clip-path: polygon(100% 0, 100% 100%, 0 50%);
		animation:
			l11-1 1s infinite linear alternate,
			l11-2 2s infinite linear -0.5s;
	}
	.loader::after {
		--s: -1, -1;
	}
	@keyframes l11-0 {
		0%,
		49.99% {
			transform: scaleX(1) rotate(0deg);
		}
		50%,
		100% {
			transform: scaleX(-1) rotate(-90deg);
		}
	}
	@keyframes l11-1 {
		0%,
		5% {
			transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
		}
		33% {
			transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
		}
		66% {
			transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
		}
		95%,
		100% {
			transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
		}
	}
	@keyframes l11-2 {
		0%,
		49.99% {
			background: #000000;
		}
		50%,
		100% {
			background: #ffffff;
		}
	}
	.overlay {
		position: fixed;
		inset: 0px;
		background-color: hsl(0 0% 0% / 80%);
		backdrop-filter: blur(4px);
		z-index: 30;
	}

	.search {
		width: 90vw;
		max-width: 600px;
		position: fixed;
		left: 50%;
		top: 20%;
		translate: -50% -0%;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 20px hsl(0 0% 0% / 40%);
		overflow: hidden;
		z-index: 40;

		input {
			width: 100%;
			padding: 1.5rem;
			color: hsl(220 10% 98%);
			background-color: hsl(220 10% 20%);
			font: inherit;
			border: none;
			outline: none;
		}
	}

	.results {
		max-height: 48vh;
		padding: 1.5rem;
		background-color: hsl(220 10% 14%);
		overflow-y: auto;
		scrollbar-width: thin;
		z-index: 40;

		ul {
			display: grid;
			gap: 1rem;
			padding: 0px;
			margin: 0px;
			list-style: none;

			li:not(:last-child) {
				padding-block: 0.5rem;
				border-bottom: 1px solid hsl(220 10% 20%);
			}
		}
		a {
			display: block;
			font-size: 1.5rem;
			color: hsl(220 10% 80%);
			text-decoration: none;
			transition: color 0.3s ease;

			&:hover {
				color: aqua;
			}
		}
	}
</style>
