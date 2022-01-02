<script lang="ts">
	import type { country } from '../../../utils/types';

	export let country: country;
	let { name, slug, flag, image } = country;

	const imagePath = `/images/countries/${slug}/${image}`;
	const flagPath = `/images/countries/${slug}/${flag}`;
</script>

<a href={`/destinations/${slug}`}>
	<div class="card">
		<div class="image">
			<img src={imagePath} alt={`image representing ${name}`} />
			<div class="overlay" />
		</div>
		<div class="data">
			<h1>{name}</h1>
			<div class="flag">
				<img src={flagPath} alt={`flag of ${name}`} />
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
	.data {
		position: relative;
		padding-bottom: 0.5rem;
		color: white;
		background-color: rgba(128, 128, 128, 0.4);
		border-radius: 0 0 10px 10px;
		height: 75px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		// border-bottom: 2px solid white;
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

	.flag {
		position: absolute;
		top: 0;
		right: 0;
		width: 20%;
		img {
			width: 100%;
			display: block;
		}
	}
</style>
