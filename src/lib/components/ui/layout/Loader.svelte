<div class="overlay">
	<div class="overlay__inner">
		<div class="overlay__content">
			<div class="flex flex-col items-center justify-center">
				<span class="loader"></span>
				<span class="my-3">Anylizing Data ..</span>
			</div>
		</div>
	</div>
</div>

<style>
	.overlay {
		left: 0;
		top: 0;
		z-index: 3;
		width: 100%;
		height: 100%;
		position: fixed;
		background: #22222239;
		backdrop-filter: blur(10px);
	}

	.overlay__inner {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.overlay__content {
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.loader {
		width: 48px;
		height: 48px;
		display: inline-block;
		position: relative;
	}
	.loader::after,
	.loader::before {
		content: '';
		width: 48px;
		height: 48px;
		border: 2px solid #fff;
		position: absolute;
		left: 0;
		top: 0;
		box-sizing: border-box;
		animation: rotation 2s ease-in-out infinite;
	}
	.loader::after {
		border-color: #000000;
		animation-delay: 1s;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
