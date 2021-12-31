<script lang="ts">
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		setTimeout(() => {
			emailIsValid = true;
		}, 2000);
	});
	let emailIsValid = true;
	let emailInputElement: HTMLInputElement;
	const validateEmail = (email: string) => {
		const pattern =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		const isValidEmail = pattern.test(email);
		if (!isValidEmail) {
			emailIsValid = false;
			emailInputElement.value = '';
			// @ts-ignore
			throw new Error('Invalid Email Input!');
		}
		emailIsValid = true;
	};
	const registrationHandler = () => {
		try {
			validateEmail(emailInputElement.value);
			emailInputElement.value = '';
			// send data to api
		} catch (error) {
			emailInputElement.value = '';
			console.log(error);
		}
	};
</script>

<div class="container">
	<p>
		<strong>SUBSCRIBE TO THE NEWSLETTER</strong>
	</p>
	<p>Join our community to receive useful information and tips</p>
	<form on:submit|preventDefault={registrationHandler}>
		<input type="email" id="user-email" bind:this={emailInputElement} placeholder="Your Email" />
		<button>JOIN</button>
	</form>
	{#if !emailIsValid}
		<p>Please enter a valid email!</p>
	{/if}
</div>

<style lang="scss">
	.container {
		margin-top: 1rem;
		color: white;
		text-align: center;
		@media (min-width: 1000px) {
			text-align: left;
		}
		p {
			color: #c0c8c9;
		}
		input {
			height: 2.5rem;
			padding: 0 0.5rem;
			background-color: #181c1e;
			color: #6b7576;
			border: none;
			border-radius: 5px;
			@media (max-width: 510px) {
				width: 100%;
			}
		}
		button {
			margin: 0 1rem;
			cursor: pointer;
			padding: 0.7rem 1rem;
			background-color: $color-sinfronteras;
			border: none;
			outline: none;
			border-radius: 5px;
			@media (max-width: 510px) {
				width: 100%;
				margin: 0;
			}
			&:active {
				transform: scale(0.95);
			}
		}
	}
</style>
