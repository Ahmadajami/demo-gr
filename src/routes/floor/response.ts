export const response_html = `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.tailwindcss.com"></script>
		<style>
			* {
				transition: all 0.5s cubic-bezier(0.15, 0.85, 0.45, 1);
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				color: white;
				font-family: 'Poppins', serif;
			}
			html {
				scroll-behavior: smooth;
			}

			body {
				background-color: rgba(0, 0, 0, 0.3);
				font-family: 'Poppins', serif;
				background-image: linear-gradient(
						45deg,
						rgba(0, 0, 0, 0.3) 24%,
						rgba(0, 0, 0, 0.4) 25%,
						rgba(0, 0, 0, 0.4) 26%,
						rgba(0, 0, 0, 0.3) 26%,
						rgba(0, 0, 0, 0.3) 74%,
						rgba(0, 0, 0, 0.4) 75%,
						rgba(0, 0, 0, 0.4) 76%,
						rgba(0, 0, 0, 0.3) 76%
					),
					linear-gradient(
						-45deg,
						rgba(0, 0, 0, 0.3) 24%,
						rgba(0, 0, 0, 0.4) 25%,
						rgba(0, 0, 0, 0.4) 26%,
						rgba(0, 0, 0, 0.3) 26%,
						rgba(0, 0, 0, 0.3) 74%,
						rgba(0, 0, 0, 0.4) 75%,
						rgba(0, 0, 0, 0.4) 76%,
						rgba(0, 0, 0, 0.3) 76%
					);
				background-size: 100px 100px;
			}
			.glass {
				background: rgba(255, 255, 255, 0);
				border-radius: 0px;
				box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(5px);
				-webkit-backdrop-filter: blur(5px);
			}
			.max-wscreen {
				max-width: 100vw;
			}
			/* width */
			::-webkit-scrollbar {
				width: 10px;
			}

			/* Track */
			::-webkit-scrollbar-track {
				background: #000000;
			}

			/* Handle */
			::-webkit-scrollbar-thumb {
				background: #003a55;
				border-radius: 8px;
			}

			/* Handle on hover */
			::-webkit-scrollbar-thumb:hover {
				background: #555;
			}

			.marking {
				color: white;
				font-weight: bold;
				background-color: rgba(0, 116, 249, 0.449);
			}
			.animate {
				animation: animate 1s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.5s backwards;
			}

			@keyframes animate {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
		</style>
		<title>Document</title>
	</head>
	<body>
		<div class="h-screen">
			<section class="flex items-center justify-center">
				<h1 class="bg-red-500">WE Will Call You</h1>
				<h1>Thanks For Your Response</h1>
			</section>
		</div>
		<div class="h-screen">
			<section class="flex items-center justify-center">
				<h1 class="bg-red-500">WE Will Call You</h1>
				<h1>Thanks For Your Response</h1>
			</section>
		</div>
		<div class="h-screen">
			<section class="flex items-center justify-center">
				<h1 class="bg-red-500">WE Will Call You</h1>
				<h1>Thanks For Your Response</h1>
			</section>
		</div>
		<div class="h-screen">
			<section class="flex items-center justify-center">
				<h1 class="bg-red-500">WE Will Call You</h1>
				<h1>Thanks For Your Response</h1>
			</section>
		</div>
		<div class="h-screen">
			<section class="flex items-center justify-center">
				<h1 class="bg-red-500">WE Will Call You</h1>
				<h1>Thanks For Your Response</h1>
			</section>
		</div>
	</body>
</html>
`;
