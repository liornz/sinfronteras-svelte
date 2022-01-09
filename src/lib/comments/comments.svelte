<script lang="ts">
	import notification from '$lib/stores/notification/notification';
	import NewComment from './new-comment.svelte';
	import CommentsList from './comments-list.svelte';
	import type { userInput } from '../../utils/validate-user-input';
	import type { commentData } from 'src/utils/types';
	import { onMount } from 'svelte';

	export let country: string;
	export let destination: string;

	let comments: commentData[] = [];
	let isLoading: boolean = false;

	onMount(() => {
		getComments();
	});

	const addComment = async (event: CustomEvent<userInput>) => {
		notification.set({
			status: 'pending',
			title: 'Saving...',
			message: 'Saving your comment...'
		});
		try {
			const response = await fetch(`/api/comments/post-comment/${country}-${destination}`, {
				method: 'POST',
				body: JSON.stringify(event.detail),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (response.ok) {
				const data = await response.json();
				notification.set({
					status: 'success',
					title: 'Success!',
					message: data.message || 'Your comment was successfully saved.'
				});
				getComments();
			} else {
				const data = await response.json();
				throw new Error(data.message || 'Something went wrong!');
			}
		} catch (error) {
			if (error instanceof Error) {
				notification.set({
					status: 'error',
					title: 'Error!',
					message: error.message || 'Error saving comment!'
				});
			}
		}
	};
	const getComments = async () => {
		isLoading = true;
		try {
			const response = await fetch(`/api/comments/get-comments/${country}-${destination}`);
			if (response.ok) {
				const data = await response.json();
				comments = data.comments;
				isLoading = false;
			} else {
				const data = await response.json();
				throw new Error(data.message || 'Error getting comment list!');
			}
		} catch (error) {
			isLoading = false;
			if (error instanceof Error) {
				notification.set({
					title: 'Error!',
					message: error.message || 'Error loading comments',
					status: 'error'
				});
			}
		}
	};
</script>

<div class="container">
	<h3 class="title">Share Your Opinions and Thoughts</h3>
	<NewComment on:add-comment={addComment} />
	<CommentsList {comments} {isLoading} />
</div>

<style>
	.title {
		margin: 0;
		color: rgb(110, 110, 110);
		font-weight: bold;
		font-size: 1.5rem;
	}

	.container {
		background-color: #e9ecef;
	}
	.title {
		margin: 0;
		color: rgb(110, 110, 110);
		font-weight: bold;
		text-align: center;
	}
</style>
