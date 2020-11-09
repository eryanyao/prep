<script>
	import requests from "../data/requests";
	import {onMount} from "svelte";

	let helloWorld = undefined;

	onMount(async () => {
		requests.helloWorld()
				.then(data => helloWorld = data)
				.catch(e => console.error(e));

	});

</script>

<style>

	h1 {
		text-align: center;
		margin: 0 auto;
		font-size: 2.8em;
		font-weight: 700;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>{helloWorld}</h1>



