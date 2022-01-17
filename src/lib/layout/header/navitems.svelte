<script>
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<ul>
	<li on:click={() => dispatch('close')}>
		<a href="/destinations" class:active={$page.path === '/destinations'}>
			DESTINATIONS
			<div class="underline" />
		</a>
	</li>
	<li on:click={() => dispatch('close')}>
		<a href="/shop" class:active={$page.path === '/shop'}>
			SHOP
			<div class="underline" />
		</a>
	</li>
	<li on:click={() => dispatch('close')}>
		<a href="/contact" class:active={$page.path === '/contact'}>
			CONTACT
			<div class="underline" />
		</a>
	</li>
</ul>

<style lang="scss">
	.active {
		color: $color-sinfronteras;
	}
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		margin: 0;
		padding: 0;
		background-color: black;
		position: absolute;
		width: 100%;
		z-index: 1;
		@media (min-width: 600px) {
			position: relative;
			margin: 0 0;
			flex-direction: row;
			justify-content: flex-end;
			justify-items: center;
		}
		li {
			list-style: none;
			margin: auto;
			width: fit-content;
			padding: 0.5rem 0;
			@media (min-width: 600px) {
				margin: 0;
				padding: 1rem;
			}
			a {
				text-decoration: none;
				color: rgb(221, 221, 221);
				font-size: 0.9rem;
				letter-spacing: 0.1rem;
				font-weight: 700;
				&:hover .underline {
					height: 4px;
					width: 100%;
				}
				.underline {
					height: 4px;
					width: 0%;
					margin: 0 auto;
					background-color: $color-sinfronteras;
					transition: width 0.3s ease-out;
				}
			}
		}
	}
</style>
