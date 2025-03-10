<script lang="ts">
	import { enhance } from '$app/forms';
	import Footer from '$lib/components/ui/layout/Footer.svelte';
	import NumberInput from '$lib/components/ui/NumberInput.svelte';
	import ShineBorder from '$lib/components/ui/ShineBorder.svelte';
	import { toast } from '@zerodevx/svelte-toast';
	import type { PageProps } from './$types';
	import Loader from '$lib/components/ui/layout/Loader.svelte';
	import { languageTag } from '$lib/paraglide/runtime';
	let loading = $state(false);
	let valid = $state(false);
	let { form, data }: PageProps = $props();
	const success = (m: string) =>
		toast.push(m, {
			theme: {
				'--toastBackground': 'green',
				'--toastColor': 'white',
				'--toastBarBackground': 'olive'
			}
		});
	const fail = (m: string) =>
		toast.push(m, {
			theme: {
				'--toastBackground': 'red',
				'--toastColor': 'white',
				'--toastBarBackground': 'pink'
			}
		});
	let formhtml = $state() as HTMLFormElement;
	let inputclass =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

	if (form) {
		if (form?.success) {
			success(form.message);
		} else {
			fail(form?.message!);
		}
	}
</script>

<svelte:head>
	<title>Oreder Your Flooor</title>
	{#if languageTag() === 'en'}
		<meta
			name="description"
			content="GRResin: Expert flooring creation and installation services. Transform your spaces with durable and beautiful epoxy resin flooring. Explore our range of flooring options and get a free quote."
		/>
		<meta
			name="keywords"
			content="epoxy flooring, resin flooring, floor installation, flooring services, custom flooring, decorative flooring, GRResin, floor design, floor creation, commercial flooring, residential flooring"
		/>
	{:else}
		<meta
			name="description"
			content="جرسين: خدمات إنشاء وتركيب أرضيات متخصصة. حول مساحاتك بأرضيات راتنج إيبوكسي متينة وجميلة. استكشف مجموعتنا من خيارات الأرضيات واحصل على عرض سعر مجاني."
		/>
		<meta
			name="keywords"
			content="أرضيات إيبوكسي, أرضيات ريسن, تركيب أرضيات, خدمات أرضيات, أرضيات مخصصة, أرضيات ديكورية, جررسين, تصميم أرضيات, إنشاء أرضيات, أرضيات تجارية, أرضيات سكنية"
		/>
	{/if}
</svelte:head>
{#if loading}
	<Loader />
{/if}

<img
	class="absolute -z-10 h-full w-full md:m-0 md:hidden"
	src="/images/banners/floor.jpg"
	alt="Flooring Images Terrazo"
/>
<div class="cover">
	<div class="wrapper glass my-2 p-5">
		<div class="bg">
			<img
				class="side-image drop-shadow-2xl"
				src="/images/banners/floor.jpg"
				alt="Flooring Images Terrazo"
			/>
		</div>
		<form
			method="POST"
			class="r-form"
			id="flooring"
			bind:this={formhtml}
			use:enhance={() => {
				loading = true;
				return ({ update }) => {
					update({ invalidateAll: false }).finally(async () => {
						loading = false;
					});
				};
			}}
		>
			<h2 class="heading mt-0 drop-shadow-2xl">Flooring Consultation</h2>

			<div class="mb-5">
				<label for="email" class="mb-2 block text-lg font-bold text-white">Your email</label>
				<input
					type="email"
					name="email"
					class={inputclass}
					placeholder="name@exmple.com"
					required
				/>
			</div>

			<div class="mb-5">
				<label for="location" class=" mb-2 block text-lg font-bold text-white">Your Location</label>
				<input type="text" name="location" class={inputclass} placeholder="Jeddah,...." required />
			</div>
			<div class="mb-5">
				<label for="phone-input" class=" mb-2 block text-lg font-bold text-white">Your Number</label
				>
				<NumberInput bind:valid />
			</div>

			<div class="mb-5">
				<label for="description" class="mb-2 block text-lg font-bold text-white"
					>Project Description:</label
				>

				<textarea
					class={inputclass}
					id="description"
					name="description"
					placeholder="Descrive Your Floor"
					required
				></textarea>
			</div>
			<div class="flex flex-row items-center justify-center text-center">
				<ShineBorder borderRadius={0} color="blue" class="  bg-black text-2xl">
					<button class="z-10 h-full w-full" type="submit" disabled={!valid}>Get a Quote</button>
				</ShineBorder>
			</div>
		</form>
	</div>
</div>
<section>
	<Footer />
</section>

<style>
	.cover {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper {
		width: 900px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		position: relative;

		border-radius: 10px;
	}
	.bg {
		width: 50%;
		height: 100%;

		background-size: cover;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		position: relative;
	}
	.bg::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.r-form {
		min-width: 350px !important;
		width: 50%;
		height: 100%;
		padding: 30px 20px;
	}
	.heading {
		font-size: 40px;

		text-transform: capitalize;
		margin-bottom: 60px;
		text-align: center;
	}

	@media screen and (max-width: 750px) {
		.wrapper {
			width: 450px;
		}
		.bg {
			display: none;
		}
		form {
			display: 100%;
		}
	}
	.side-image {
		background-size: cover;
		width: 100%;
		height: 100%;
	}
</style>
