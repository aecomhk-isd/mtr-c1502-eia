<script>
  import { fade } from "svelte/transition";
  export let show;

  function switchContent(index) {
    show = index;
  }
</script>

<main class="text-center">
  <div class="nav-2">
    <button
      class="nav-btn"
      class:active={show == 1}
      on:click={() => switchContent(1)}>EIA No Mitigation Measures</button
    >
    <button
      class="nav-btn"
      class:active={show == 2}
      on:click={() => switchContent(2)}
      >With Mitigation Measures
    </button>
  </div>
  <div class="content">
    {#if show == 1}
      <img
        transition:fade
        class="content-img center"
        src="images/noise_existing.png"
        alt="Noise Existing"
      />
    {/if}
    {#if show == 2}
      <img
        transition:fade
        class="content-img center"
        src="images/noise_option2.png"
        alt="Noise Option 2"
      />
    {/if}
  </div>
</main>

<style>
  .content {
    width: 100%;
    height: calc(100vh - 150px);
    position: relative;
    overflow: hidden;
  }
</style>
