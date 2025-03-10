<script lang="ts">
	let goto: boolean = $state(false);

	let img_arr = [
		'images/banners/floor.jpg',
		'images/banners/arts.jpg',
		'images/banners/ShoppingBanner.jpg',
		'images/banners/SaleBanner.jpg',
		'images/banners/aboutus.jpg',
		'images/banners/ownfloor.jpg',
		'images/banners/logo.jpg',
		'images/banners/OurprojectsBanner.jpg',
		'images/banners/OurPrpductsBanner.jpg',
		'images/banners/ShoppingBanner.jpg'
	];
	let text_arr = [
		'Flooring',
		'Arts',
		'Shop',
		'Sales',
		'About US',
		'Make Your Own',
		' Grresien',
		'Previous Projects',
		'Products',
		'Become a Partner'
	];
	let hrefs_arr = ['/floor', '/', 'https://shop.grresin.com/', '/', '/', '/', '/', '/', '/', '/'];
	let { cssClass }: { cssClass: string } = $props();
</script>

<!--Desktop View-->
<div class={cssClass}>
	<div class="  flex flex-row items-center justify-center overflow-x-hidden md:overflow-x-visible">
		<article class="gallery">
			{#each img_arr as item, i}
				<div class="gallery-item">
					<div class="image-wrapper">
						<a href={hrefs_arr[i]}>
							<img class="img-gallary" src={item} alt={text_arr[i]} />
							<div class="overlay-text text-black shadow-2xl drop-shadow-2xl">{text_arr[i]}</div>
						</a>
					</div>
				</div>
			{/each}
		</article>
	</div>
</div>

<style>
	.gallery {
		--size: 80px;
		display: grid;
		grid-template-columns: repeat(6, var(--size));
		grid-auto-rows: var(--size);
		margin-top: 30%;
		margin-bottom: 50%;
		margin-left: 30%;
		margin-right: 10%;
		transform: rotate(90deg);
		place-items: start center;
		gap: 10px;
	}

	.gallery:has(:hover) .gallery-item:not(:hover) .img-gallary, /* Target the image specifically */
.gallery:has(:focus) .gallery-item:not(:focus) .img-gallary {
		filter: brightness(0.5) contrast(0.5);
	}

	@media (min-width: 768px) {
		.gallery {
			--size: 150px;
			transform: rotate(0deg);
			margin-top: 0;
			margin-right: 0;
			margin-bottom: 100px;
			margin-left: 0;
		}
	}

	.gallery-item {
		display: inline-block;
		position: relative;
		width: calc(var(--size) * 2);
		height: calc(var(--size) * 2);
		margin-right: 0px;
		margin-left: 0px;
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

		transition:
			clip-path 0.25s,
			filter 0.75s;
		grid-column: auto / span 2;
	}

	.gallery-item:nth-child(5n - 1) {
		grid-column: 2 / span 2;
	}

	.gallery-item:focus {
		outline: 1px dashed;
		outline-offset: -5px;
		pointer-events: none;
	}

	.image-wrapper {
		position: relative;

		width: 100%;
		height: 100%;
	}

	.img-gallary {
		object-fit: fill;
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);
		background-color: black;
	}

	@media (min-width: 768px) {
		.img-gallary {
			transform: rotate(0);
		}
	}

	.overlay-text {
		position: absolute;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-90deg);
		color: white;
		background: rgba(128, 128, 128, 0.437);

		padding: 10px 15px;
		border-radius: 5px;
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
		font-size: 10px;
		font-weight: bold;
		text-align: center;
		pointer-events: none;

		@media (min-width: 768px) {
			font-size: 16px;
			transform: translate(-50%, -50%) rotate(0deg);
		}
	}

	.gallery-item:hover .overlay-text,
	.gallery-item:focus .overlay-text {
		opacity: 1;
	}
</style>
