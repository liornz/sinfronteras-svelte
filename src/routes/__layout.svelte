<!-- <script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const placeholdersPromise = fetch('/api/image-placeholders.json', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images: ['images/logo/logo_sinfronteras-417x150.png'],
      }),
    });
 
    const placeholdersResponse = await placeholdersPromise;
 
    if (placeholdersResponse.ok) {
      return {
        props: { ...(await placeholdersResponse.json()) },
      };
    }
 
    return {};
  }
</script> -->
<script>
	import '../app.scss';
	import Header from '$lib/layout/header/header.svelte';
	import Footer from '$lib/layout/footer/footer.svelte';
	import Notofication from '$lib/layout/notofication.svelte';
</script>

<Header />
<main class="main">
	<slot />
</main>
<Footer />
<Notofication />

<style>
	.main {
		margin-top: 5rem;
	}
</style>
