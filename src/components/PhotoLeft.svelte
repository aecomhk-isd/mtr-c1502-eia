<script>
    import SvelteMarkdown from 'svelte-markdown'

    export let photoUrl = '';
    export let photoDesc = '';
    export let contentMd = '';

</script>

<main>
    <div class="w-1/2">
      <div class="img-wrapper">
        <img
          class="content-img x-center"
          src="{photoUrl}"
          alt="{photoDesc}"
        />
      </div>
    </div>
    <div class="w-1/2 p-2">
      <SvelteMarkdown source={contentMd} />
    </div>
  </main>
  
  <style>
    main {
      display: flex;
      flex-direction: row;
    }
  
    .img-wrapper {
      position: relative;
      overflow: hidden;
    }
  </style>
  