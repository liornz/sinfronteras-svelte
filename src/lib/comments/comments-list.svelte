<script lang="ts">
	import Spinner from '$lib/ui/spinner.svelte';
	import type { commentData } from 'src/utils/types';
	export let comments: commentData[];
	export let isLoading: boolean;
</script>

{#if isLoading}
<div class="center">
	<Spinner />
</div>
{:else if comments.length > 0}
	<ul class="comments">
		{#each comments as comment, _i (comment._id)}
			<li class="comment">
				<div>
					<p class="name">
						<strong>{comment.name}</strong>
					</p>
					<p class="email">{comment.email}</p>
				</div>
				<p class="text">{comment.message}</p>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	.comments {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		width: 60%;
	}
}

.comment {
  text-align: left;
  list-style: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid #ccc;
  color: rgb(110, 110, 110);
}

.name {
  margin: 0;
}

.email {
  margin: 0;
  font-style: italic;
}
</style>
