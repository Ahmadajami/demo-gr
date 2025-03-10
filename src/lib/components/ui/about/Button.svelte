<script lang="ts">
	import Icon from '@iconify/svelte';
	import DiamondIcon from './DiamondIcon.svelte';
	import EcoIcon from './EcoIcon.svelte';
	let { icon, style = 'transform: rotate(-45deg);' }: { icon: string; style?: string } = $props();
</script>

{#if icon === 'diamond-icon'}
	<button class=" glowing-button mx-3 self-center" disabled>
		<DiamondIcon />
	</button>
{:else if icon == 'eco'}
	<button class="glowing-button mx-3 self-center" disabled>
		<EcoIcon />
	</button>
{:else}
	<button class="glowing-button mx-3 self-center" disabled>
		<Icon fill="true" {style} {icon} width="90%" height="90%" />
	</button>
{/if}

<style>
	.glowing-button {
		--darkGray: #333;
		--litRed: rgb(48, 117, 254);
		--glowRed: rgb(48, 117, 254);

		font: inherit;
		color: currentColor;
		background-color: transparent;
		border: 0.2em solid var(--darkGray);

		transition: all 0.25s ease-in;
		transform: rotate(45deg);
		background-repeat: no-repeat;
		background-image: linear-gradient(90deg, var(--glowRed) 0, transparent 1em, transparent 100%),
			linear-gradient(0deg, var(--glowRed) 0, transparent 1em, transparent 100%),
			linear-gradient(270deg, var(--glowRed) 0, transparent 1em, transparent 100%),
			linear-gradient(180deg, var(--glowRed) 0, transparent 1em, transparent 100%);
		background-position:
			-1em 0,
			0 1em,
			1em 0,
			0 -1em;
		width: 5em;
		height: 5em;
		font-size: 100%;
		white-space: nowrap;
	}

	.glowing-button:focus,
	.glowing-button:hover {
		border: 0.2em solid var(--litRed);
		box-shadow:
			0 0 1.2em var(--litRed),
			inset 0 0 1.2em var(--litRed);
		outline: none;
	}

	.glowing-button:focus,
	.glowing-button,
	.glowing-button:hover,
	.glowing-button {
		border-bottom-color: var(--darkGray);
		background-position:
			-1em 0,
			0 1em,
			1em 0,
			0 0;
	}

	.glowing-button:has,
	.glowing-button:focus,
	.glowing-button:has,
	.glowing-button:hover {
		border-top-color: var(--darkGray);
		background-position:
			-1em 0,
			0 0,
			1em 0,
			0 -1em;
	}

	@media (min-width: 36em) {
		.glowing-button:focus,
		.glowing-button,
		.glowing-button:hover,
		.glowing-button {
			border-right-color: var(--darkGray);
			background-position:
				0 0,
				0 1em,
				1em 0,
				0 -1em;
		}

		.glowing-button:has,
		.glowing-button:focus,
		.glowing-button:has,
		.glowing-button:hover {
			border-left-color: var(--darkGray);
			background-position:
				-1em 0,
				0 1em,
				0 0,
				0 -1em;
		}
	}
</style>
