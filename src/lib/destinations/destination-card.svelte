<script lang="ts">
	import type { destination } from '../../utils/types';

	export let destination: destination;
	let { countrySlug, slug, title, subtitle, image, blurDataURL } = destination;

	const imagePath = `/images/posters/${image}`;
</script>

<a href={`/destinations/${countrySlug}-${slug}`}>
	<div class="card">
		<div class="image">
			<img src={imagePath} alt={title} />
			<div class="overlay" />
		</div>
		<div class="text">
			<div class="title">
				<h1>{title}</h1>
			</div>
			<div class="subtitle">
				<p>{subtitle}</p>
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	.card {
		margin: 0;
		padding: 0;
		transition: all 0.5s ease-out;
		&:hover {
			transform: scale(0.97);
		}
	}

	.image {
		position: relative;
		border-radius: 10px;
		img {
			display: block;
			width: 100%;
			border-radius: 10px 10px 0 0;
		}
	}
	.text {
		margin: 0;
		padding: 0;
		color: white;
		background-color: rgba(128, 128, 128, 0.4);
		border-radius: 0 0 10px 10px;
	}

	.title {
		padding-bottom: 0.5rem;
		height: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid white;
		h1 {
			padding: 0 0.5rem;
			text-align: center;
			margin: 0;
			font-size: 1.5rem;
			font-weight: 400;
			@media (max-width: 330px) {
				font-size: 1.2rem;
			}
		}
	}

	.subtitle {
		height: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			text-align: center;
			padding: 0 0.5rem;
			margin: 0;
			font-weight: 300;
			font-size: 1.3rem;
			@media (max-width: 330px) {
				font-size: 1rem;
			}
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
		border-radius: 10px 10px 0 0;
		transition: all ease-out 0.5s;
		&:hover {
			background-color: rgba(128, 128, 128, 0.5);
		}
	}
</style>
