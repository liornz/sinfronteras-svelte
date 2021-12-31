<script>
	import victorAlaluf from '$lib/assets/images/logo/victoralaluf.png';
	import FaFacebookSquare from 'svelte-icons/fa/FaFacebookSquare.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaYoutubeSquare from 'svelte-icons/fa/FaYoutubeSquare.svelte';
</script>

<div class="container">
	<a id="facebook" class="item" href="https://www.facebook.com/victor.alaluf">
		<span class="icon" style="color: #4267B2;"><FaFacebookSquare /></span>
		<p class="social_text">FACEBOOK</p>
	</a>
	<a id="instagram" class="item" href="https://www.instagram.com/alalufvictor.sinfronteras/">
		<span class="icon" style="color: #833AB4;"><FaInstagram /></span>
		<p class="social_text">INSTAGRAM</p>
	</a>
	<a id="youtube" class="item" href="https://www.youtube.com/channel/UCWeBug5IyKmZq81ulHUKwkg">
		<span class="icon" style="color: #FF0000;"><FaYoutubeSquare /></span>
		<p class="social_text">YOUTUBE</p>
	</a>
	<a
		id="victoralaluf"
		class="item"
		href="https://victoralaluf.com"
		target="_blank"
		rel="noreferrer"
	>
		<div class="image">
			<img 
				src={victorAlaluf} 
				alt="Victor Alaluf Art Logo" 
				width={25} 
				height={25} 
				loading="lazy"
				decoding="async" 
				/>
		</div>

		<p class="social_text">VICTOR ALALUF</p>
	</a>
</div>

<style lang="scss">
	.container {
		position: relative;
		display: flex;
		align-items: center;
		color: white;
		@media (min-width: 1000px) {
			margin-top: 1.1rem;
			flex-direction: column;
			align-items: flex-start;
		}
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0.5rem;
		@media (min-width: 1000px) {
			margin: 0.5rem 0;

		}
		p {
			margin: 0 1rem;
			text-decoration: underline solid transparent;
			transition: text-decoration 0.3s ease-out;
			&:hover {
				text-decoration: underline solid white;
			}
		}
	}

	.social_text {
		display: none;
		@media (min-width: 1000px) {
			display: block;
		}
	}

	.image {
		margin: 0;
		height: 25px;
		@media (min-width: 1000px) {
			margin: 0;
		}
	}
	.icon {
		width: 1.5rem;
	}
</style>
