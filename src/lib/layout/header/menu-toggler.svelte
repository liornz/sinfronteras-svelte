<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { interpolateString } from 'd3-interpolate';

	export let isMenuOpen = false;
	const topDRange = ['M 2 2.5 L 20 2.5', 'M 3 16.5 L 17 2.5'];
	const opacityRange = [1, 0];
	const bottomDRange = ['M 2 16.5 L 20 16.5', 'M 3 2.5 L 17 16.5'];

	let topD = tweened(topDRange[0], {
		duration: 200,
		easing: cubicOut,
		interpolate: interpolateString
	});
	let opacity = tweened(opacityRange[0], { duration: 200, easing: cubicOut });
	let bottomD = tweened(bottomDRange[0], {
		duration: 200,
		easing: cubicOut,
		interpolate: interpolateString
	});

	$: {
		topD.set(isMenuOpen ? topDRange[1] : topDRange[0]);
		opacity.set(isMenuOpen ? opacityRange[1] : opacityRange[0]);
		bottomD.set(isMenuOpen ? bottomDRange[1] : bottomDRange[0]);
	}


</script>

<button aria-label="toggle menu" on:click>
	<svg viewBox="0 0 22 22">
		<!-- top -->
		<path d={$topD} />
		<!-- mid -->
		<path d="M 2 9.5 L 20 9.5" style="opacity:{$opacity};" />
		<!-- bottom -->
		<path d={$bottomD} />
	</svg>
</button>

<style>
	button {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background: transparent;
		outline: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	path {
		stroke: white;
		stroke-linecap: round;
		stroke-width: 3;
		fill: transparent;
	}

	svg {
		width: 32px;
		height: 32px;
	}
</style>
