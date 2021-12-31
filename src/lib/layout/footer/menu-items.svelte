<script lang="ts">
	import { page } from '$app/stores';
</script>

	<ul>
		<li>
			<a href="/destinations" class:active={$page.path === '/destinations'}> DESTINATIONS </a>
		</li>
		<li>
			<a href="/shop" class:active={$page.path === '/shop'}> SHOP </a>
		</li>
		<li>
			<a href="/contact" class:active={$page.path === '/contact'}> CONTACT </a>
		</li>
	</ul>

<style lang="scss">
	ul {
		margin-top: 1rem;
		padding: 0;
		display: flex;
		flex-direction: column;
		color: white;
		align-items: center;
		@media (min-width: 1000px) {
			align-items: flex-start;
		}
		li {
			list-style: none;
			margin: auto;
			width: fit-content;
			padding: 0.5rem 0;
			a {
				margin: 0.5rem;
				text-decoration: underline solid transparent;
				transition: text-decoration 0.3s ease-out;
				&:hover {
					text-decoration: underline solid $color-sinfronteras;
				}
			}
		}
	}
</style>
