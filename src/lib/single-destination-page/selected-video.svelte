<script lang="ts">
	export let youtubeId: string;
	export let title: string;
	export let subtitle: string;
</script>

<div class="container">
	<h1 class="title">{title}</h1>
	<h2 class="subtitle">{subtitle}</h2>
	<div class="video">
		<iframe
			{title}
			class="youtube"
			src={`https://www.youtube.com/embed/${youtubeId}`}
			allowFullScreen
		/>
	</div>
</div>

<style lang="scss">
	.container {
		background-color: $color-background;
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

	.title,
	.subtitle {
		text-align: center;
		margin: 0;
		padding: 1rem;
		font-style: oblique;
		color: rgb(128, 128, 128);
	}
</style>
