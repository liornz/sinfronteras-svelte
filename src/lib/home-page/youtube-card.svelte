<script>
	import YoutubePreview from './youtube-preview.svelte';
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
	export let imagePath = '';
	export let imageAlt = '';
	export let youtubeId = '';
	let videoIsPlaying = false;
	function toggleVideo() {
		videoIsPlaying = !videoIsPlaying;
	}
</script>

<div class="container">
	<img src={imagePath} alt={imageAlt} />
	<div class="overlay" on:click={toggleVideo}>
		<span class="icon"><FaPlay /></span>
	</div>
</div>
{#if videoIsPlaying}
	<YoutubePreview {youtubeId} on:click={toggleVideo} />
{/if}

<style lang="scss">
	.container {
		position: relative;
		img {
      width: 100%;
			border-radius: 10px;
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5;
		cursor: pointer;
		transition: all ease-out 0.5s;
		border-radius: 10px;
		&:hover {
			background-color: rgba(128, 128, 128, 0.4);
		}
	}

	.icon {
		width: 3rem;
		color: white;
	}
</style>
