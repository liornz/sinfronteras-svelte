<script>
	import YouTube from 'svelte-youtube';
	export let youtubeId = '';
	const options = {
		height: '390',
		width: '640',
		//  see https://developers.google.com/youtube/player_parameters
		playerVars: {
			autoplay: 1
		}
	};

	/**
* @param {{ detail: { target: { playVideo: () => void; }; }; }} event
*/
	function onReady(event) {
		// access to player in all event handlers via event.target
    event.detail.target.playVideo();
	}
</script>

<div class="video">
	<YouTube videoId={youtubeId} {options} on:ready={onReady} />
</div>
<div class="backdrop" on:click />

<style lang="scss">
	.video {
		position: fixed;
		top: 30vh;
		left: 25%;
		height: 51vw;
		width: 90vw;
		/* max-width: 640px; */
		z-index: 1000;
		@media (min-width: 992px) {
			top: 22vh;
			left: 28vw;
			height: 34vw;
			width: 60vw;
		}
	}
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 100;
	}
</style>
