<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	let imgContainer: HTMLDivElement;

	function stopImageRotation(intervalId: NodeJS.Timeout) {
		if (intervalId) {
			clearInterval(intervalId);
		}
	}

	$effect(() => {
		if (!imgContainer) return;
		const intervalId = setInterval(() => {
			let last = imgContainer!.firstElementChild;
			last!.remove();
			imgContainer!.appendChild(last!);
		}, 2000);
		return () => {
			stopImageRotation(intervalId);
		};
	});
</script>

<div class="glass mx-2 px-3 py-4 sm:pr-24 md:pr-0">
	<h1
		class=" font-heading flex-1 flex-shrink-0 px-3 text-5xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl lg:text-7xl"
	>
		{m.projects()}
	</h1>
	<p class="mt-4 max-w-2xl text-balance text-xl text-white drop-shadow-md md:text-2xl">
		{m.project_desc1()},<br />
		{m.project_desc2()}.
	</p>
</div>
<div id="img-container" bind:this={imgContainer}>
	<div class="box">
		<img src="images/flooring/1.jpg" alt="s" />
	</div>
	<div class="box">
		<img src="images/flooring/2.jpg" alt="ssad" />
	</div>
	<div class="box">
		<img src="images/flooring/3.jpg" alt="s" />
	</div>
	<div class="box">
		<img src="images/flooring/4.jpg" alt="s" />
	</div>
</div>

<style>
	#img-container {
		margin-left: 8em;
		height: 280px;
		width: 280px;
		perspective: 500px;
		transform-style: preserve-3d;
	}
	.box {
		height: 280px;
		width: 280px;
		position: absolute;
		top: 50%;
		border: 1px solid #bbb;
		border-radius: 1.5em;
		box-shadow: 0 0 8px hsla(0deg, 0%, 0%, 75%);
		transition: 800ms ease-in-out;
		overflow: hidden;
	}
	.box img {
		width: 100%;
		height: 100%;
	}
	.box:first-of-type {
		left: 15%;
		opacity: 0;
		z-index: 5;
		transform: translate(-50%, -50%) rotateY(-10deg);
	}
	.box:nth-of-type(2) {
		left: 20%;
		opacity: 1;
		z-index: 5;
		transform: translate(-50%, -50%) rotateY(-10deg);
	}
	.box:nth-of-type(3) {
		left: 25%;
		opacity: 0.75;
		z-index: 10;
		transform: translate(-50%, -50%) rotateY(-10deg) translateZ(-40px);
	}
	.box:nth-of-type(4) {
		left: 30%;
		opacity: 0.5;
		z-index: 5;
		transform: translate(-50%, -50%) rotateY(-10deg) translateZ(-100px);
		color: #eee;
	}
</style>
