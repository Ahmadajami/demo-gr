<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n.js';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { fade } from 'svelte/transition';
	import SearchBar from '../home/SearchBar.svelte';
	import { goto, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages';

	// Reactive state
	let menuOpen = $state(false);
	let ariaExpanded = $derived(menuOpen.toString() as 'true' | 'false');
	onNavigate(() => {
		menuOpen = false;
	});
	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	// Class utilities
	const mobileMenuClass =
		'rounded-sm px-3 py-1.5 text-white outline-offset-0 transition-all hover:bg-gray/20 focus:bg-gray-50 focus:text-black focus:outline-black';
	const desktopSecondaryClass =
		' rounded-sm px-3 py-1.5 text-white outline-offset-0 transition-all hover:bg-white/20';
	const primaryButtonClass =
		' rounded-sm bg-white px-3 py-1.5 text-black outline-offset-0 transition-all hover:bg-white/20 hover:text-white focus:bg-white/30 focus:text-white focus:outline-black';
</script>

<header class="relative bg-gradient-to-b from-black/80 to-transparent">
	<div class=" flex items-center">
		<div
			class="mx-auto flex w-full max-w-screen-2xl items-center justify-between bg-black px-1 py-1 text-white md:bg-transparent md:text-white lg:px-16"
		>
			<!-- Logo -->
			<div class="flex items-center p-2">
				<a href="/">
					<img
						src="https://grresin.com/wp-content/uploads/2020/10/gr-01-4.png"
						alt="Graffiti Resin Logo"
						class="h-[90px]"
						width="120"
						height="90"
					/>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden h-full rounded-sm text-black md:block">
				<div class="flex items-center gap-3 pt-4">
					<div class=" self-start">
						<SearchBar />
					</div>
					<a class={desktopSecondaryClass} href="/">{m.Home()}</a>
					<a class={primaryButtonClass} href="/floor">{m.Flooring()}</a>
					<a class={desktopSecondaryClass} href="/about">{m.About()}</a>
					<div class="flex w-min flex-col text-black md:flex-row">
						{#each availableLanguageTags as lang}
							<div
								class:choosed={lang === languageTag()}
								aria-current={lang === languageTag() ? 'page' : undefined}
								class=" w-10 bg-white text-center text-black drop-shadow-2xl hover:bg-black hover:text-white"
							>
								<a
									href={i18n.route(page.url.pathname)}
									hreflang={lang}
									aria-current={lang === languageTag() ? 'page' : undefined}
								>
									{lang}
								</a>
							</div>
							&nbsp;
						{/each}
					</div>
				</div>
			</nav>

			<!-- Mobile Menu Button -->

			<button
				class="flex gap-2 md:hidden"
				aria-expanded={ariaExpanded}
				aria-controls="mobile-menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<div>Menu</div>
				<div class="p-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						fill="currentColor"
						viewBox="0 0 256 256"
					>
						<path
							d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<div class="bg-black text-white md:hidden" in:fade>
			<div class="border-r8-gray-6 border-b">
				<div class="mx-auto max-w-screen-2xl px-6 pb-4">
					<nav id="mobile-menu" class="flex flex-col gap-3 py-4">
						<a class={mobileMenuClass} href="/">{m.Home()}</a>
						<a class={mobileMenuClass} href="/floor">{m.Flooring()}</a>
						<a class={mobileMenuClass} href="/about">{m.About()}</a>
						<div class="flex w-min flex-row text-black">
							{#each availableLanguageTags as lang}
								<div
									class:choosed={lang === languageTag()}
									aria-current={lang === languageTag() ? 'page' : undefined}
									class=" w-10 bg-white text-center text-black drop-shadow-2xl hover:bg-black hover:text-white"
								>
									<a
										href={i18n.route(page.url.pathname)}
										hreflang={lang}
										aria-current={lang === languageTag() ? 'page' : undefined}
									>
										{lang}
									</a>
								</div>
								&nbsp;
							{/each}
						</div>
					</nav>
				</div>
			</div>
		</div>
	{/if}
</header>

<style>
	.choosed {
		transform: translate3d(0, 0, -1000px);
		background-color: black;
		color: white;
		box-shadow: inset;
	}
	.kk {
		transform: translate3d(0, 0, 100px);
	}
</style>
