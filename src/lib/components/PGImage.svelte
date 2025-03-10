<script lang="ts">
	import { enhance } from '$app/forms';
	import ShineBorder from './ui/ShineBorder.svelte';
</script>

<div class="mx-auto">
	<div class="flex h-min justify-center px-6 py-12">
		<!-- Row -->
		<div class="flex w-full lg:w-11/12 xl:w-3/4">
			<!-- Col -->
			<div class="hidden h-auto w-full rounded-l-lg drop-shadow-2xl lg:block lg:w-5/12">
				<img
					src="/images/banners/floor.jpg"
					alt="Flooring Banner"
					class="h-min w-full rounded-l-lg object-cover"
				/>
			</div>
			<!-- Col -->
			<div
				class="glass w-full items-center rounded-lg p-5 drop-shadow-2xl lg:w-7/12 lg:rounded-l-none"
			>
				<h3 class="py-4 text-center text-2xl text-white">
					<strong>Schedule a Flooring Consultation</strong>
				</h3>
				<form id="floor" class="mb-4 rounded px-8 pb-8 pt-6" method="POST" use:enhance>
					<div class="mb-4 md:flex md:justify-between">
						<div class="mb-4 md:mb-0 md:mr-2">
							<label class="mb-2 block text-sm font-bold text-white" for="firstName">
								First Name
							</label>
							<input
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-white shadow focus:outline-none dark:text-black"
								id="firstName"
								name="first_name"
								type="text"
								placeholder="First Name"
							/>
						</div>
						<div class="md:ml-2">
							<label class="mb-2 block text-sm font-bold text-white dark:text-white" for="lastName">
								Last Name
							</label>
							<input
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-black shadow focus:outline-none"
								id="lastName"
								name="last_name"
								type="text"
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div class="mb-4">
						<label class="mb-2 block text-sm font-bold text-white" for="email"> Email </label>
						<input
							class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-black shadow focus:outline-none"
							id="email"
							name="email"
							type="email"
							placeholder="Email"
						/>
					</div>
					<div class="mb-4 md:flex md:justify-between">
						<div class="mb-4 md:mb-0 md:mr-2">
							<label class="mb-2 block text-sm font-bold text-white dark:text-white" for="number">
								Phone Number
							</label>
							<input
								class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-black shadow focus:outline-none"
								id="number"
								name="number"
								type="tel"
								placeholder="05xxxxxxxxxx"
							/>
							<p class="text-xs italic text-red-500">Error Response.</p>
						</div>
						<div class="md:ml-2">
							<label class="mb-2 block text-sm font-bold text-white dark:text-white" for="address">
								Address
							</label>
							<input
								class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight shadow focus:outline-none dark:text-black"
								id="address"
								name="address"
								type="text"
								placeholder="Jeddah,...."
							/>
						</div>
					</div>
					<div class="mb-6 text-center">
						<ShineBorder
							class="focus:shadow-outline pointer-events-none w-full bg-black text-center text-2xl font-bold capitalize text-white hover:bg-white hover:text-black focus:outline-none"
							color="blue"
						>
							<button class="pointer-events-auto w-full" type="submit" form="floor">
								Schedule
							</button>
						</ShineBorder>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
