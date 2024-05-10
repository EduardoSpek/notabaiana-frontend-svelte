<script>
	import { onMount } from 'svelte';
	import '../global.css';
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import '@fontsource/poppins';
	import Topo from '$lib/Topo.svelte';

function checkAndInitWidgets() {
    if (typeof twttr !== 'undefined' && twttr.widgets && typeof twttr.widgets.load === 'function') {
      twttr.widgets.load();
    }
    
  }

  onMount(() => {
    checkAndInitWidgets();
  });
</script>

<Topo />
<main class="main">
	<slot />
</main>
