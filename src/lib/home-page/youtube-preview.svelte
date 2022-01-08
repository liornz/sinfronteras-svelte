<script lang="ts">
	export let youtubeId = '';
</script>

<div class="backdrop" on:click>
	<div class="video">
		<iframe
			title="self presentation video"
			class="youtube"
			src={`https://www.youtube.com/embed/${youtubeId}`}
			allowFullScreen
		/>
	</div>
</div>

<style lang="scss">
	.backdrop {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 100;
	}
	.video {
		width: 90vw;
		max-width: 60rem;
		margin: auto;
	}

	.youtube {
		width: 100%;
		height: calc(60rem * 9 / 16);
		border: 1px solid #ccc;
		box-shadow: 2px 2px 5px 5px #ccc;
		@media (max-width: 728px) {
			height: calc(90vw * 9 / 16);
		}
	}
</style>
