<script lang="ts">
	import notification from '$lib/stores/notification/notification';
	import validateUserInput from '../../utils/validate-user-input';
	import type { userInput } from '../../utils/validate-user-input';
import { afterUpdate } from 'svelte';
	let emailInputElement: HTMLInputElement;
	let nameInputElement: HTMLInputElement;
	let messageInputElement: HTMLTextAreaElement;
	let isValid = true;
	afterUpdate(() => {
		const timer = setTimeout(() => {
			isValid = true;
		}, 3000);
		return () => {
			clearTimeout(timer);
		}
	});
	const sendUserMessageToAPI = async (messageData: userInput) => {
		try {
			console.log('sending post request')
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(messageData),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (response.ok) {
				const data = await response.json();
				notification.set({
					status: 'success',
					title: 'Success!',
					message: data.message || 'Your message was successfully sent.'
				});
			} else {
				const data = await response.json();
				throw new Error(data.message || 'Something went wrong!');
			}
		} catch (error) {
			if (error instanceof Error) {
				notification.set({
					status: 'error',
					title: 'Error!',
					message: error.message || 'Error sending message!'
				});
			}
		}
	};
	function submitMessageHandler() {
		const userInput: userInput = {
			email: emailInputElement.value,
			name: nameInputElement.value,
			message: messageInputElement.value
		};
		const inputIsValid = validateUserInput(userInput);
		if (!inputIsValid) {
			isValid = false;
			return;
		}
		notification.set({
			status: 'pending',
			title: 'Sending...',
			message: 'Sending your message...'
		});
		sendUserMessageToAPI(userInput);
		emailInputElement.value = '';
		nameInputElement.value = '';
		messageInputElement.value = '';
	}
</script>

<div class="container">
	<h1>CONTACT ME</h1>
	<form class="form" on:submit|preventDefault={submitMessageHandler}>
		<div class="row">
			<div class="control">
				<label for="email">Your Email</label>
				<input type="email" id="email" bind:this={emailInputElement} />
			</div>
			<div class="control">
				<label for="name">Your Name</label>
				<input type="text" id="name" bind:this={nameInputElement} />
			</div>
		</div>
		<div class="control">
			<label for="message">Your Message</label>
			<textarea name="message" id="message" rows={5} bind:this={messageInputElement} />
		</div>
		{#if !isValid}
			<p class="error" role="alert">Invalid Inputs!</p>
		{:else}
		<p class="empty-line">___</p>
		{/if}
		<button class="button">SUBMIT</button>
	</form>
</div>

<style lang="scss">
	.container {
		height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			text-align: center;
			color: rgb(110, 110, 110);
		}
	}

	.form {
		margin: 2rem auto;
		width: 50%;
		min-width: 18rem;
		border-radius: 6px;
		background-color: rgb(202, 202, 202);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		padding: 1rem;
	}

	.row {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.control {
		margin-bottom: 0.5rem;
		flex: 1;
		min-width: 10rem;
	}

	.control label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: rgb(110, 110, 110);
		text-align: left;
	}

	.control input,
	.control textarea {
		font: inherit;
		padding: 0.25rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		width: 100%;
		background-color: rgb(223, 223, 223);
	}

	.form .button {
		font: inherit;
		display: block;
		margin: 0 auto;
		background-color: rgb(190, 190, 190);
		font-weight: bold;
		border-radius: 5px;
		color: rgb(114, 114, 114);
		padding: 0.4rem 0.8rem;
		border: 1px solid rgb(88, 88, 88);
		outline: none;
		cursor: pointer;
		&:hover {
			background-color: rgb(180, 180, 180);
		}
	}

	.form p {
		margin: 0.2rem;
	}

	.error {
		text-align: center;
		color: rgb(154, 44, 44);
	}
	.empty-line {
		color: rgb(202, 202, 202);
		text-align: center;
	}
</style>
