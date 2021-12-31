<script>
	import ExtendedLogo from './extended-logo.svelte';
	import MenuItems from './menu-items.svelte';
	import SocialMedia from './social-media.svelte';
	import NewsletterRegistration from './newsletter-registration.svelte';
</script>

<div class="container">
	<ExtendedLogo />
	<MenuItems />
	<SocialMedia />
	<NewsletterRegistration />
</div>

<style lang="scss">
	.container {
		padding: 3rem 1rem;
		display: flex;
		background-color: black;
		flex-direction: column;
		align-items: center;
		@media (min-width: 1000px) {
			padding: 3rem 5rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}
	}
</style>
