<script>
  import { fade } from "svelte/transition";

  export let tabs = [];
  export let show = 0;

  function switchContent(index) {
    show = index;
  }
</script>

<main class="text-center">
  <div class={"nav-" + tabs.length}>
    {#each tabs as item, i}
      <button
        class="nav-btn"
        class:active={show == i}
        on:click={() => switchContent(i)}>{item.title}</button
      >
    {/each}
  </div>
  <div class="content">
    {#each tabs as item, i (item.title)}
      {#if show == i}
        <img
          transition:fade
          class="content-img center"
          src={item.imgUrl}
          alt={item.imgDesc}
        />
        {#if $$slots.content}
          <slot name="content">{item.content}</slot>
        {/if}
      {/if}
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .content {
    width: 100%;
    height: calc(100vh - 150px);
    position: relative;
    overflow: hidden;
  }
</style>
