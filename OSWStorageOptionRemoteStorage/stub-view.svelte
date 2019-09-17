<script>
import Module from './main.svelte';

const mod = {};
</script>

<Module
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>
