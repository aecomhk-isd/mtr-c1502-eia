<script>
  import { fade } from "svelte/transition";
  export let show;

  function switchContent(index) {
    show = index;
  }
</script>

<main>
  <div class="nav">
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
        class="content-img"
        src="images/noise_existing.png"
        alt="Noise Existing"
      />
    {/if}
    {#if show == 2}
      <img
        transition:fade
        class="content-img"
        src="images/noise_option2.png"
        alt="Noise Option 2"
      />
    {/if}
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

  .nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1em;
    grid-auto-rows: minmax(100px, auto);
  }

  .nav-btn {
    margin: 1em 0 0 0;
    padding: 1em 2em;
    border-radius: 1em 1em 0 0;
    box-shadow: 3px 3px 8px #444140;
  }

  .nav-btn.active {
    background-color: #f376a3;
    border: 0;
  }

  .content {
    width: 100%;
    height: calc(100vh - 150px);
    position: relative;
    overflow: hidden;
  }

  .content-img {
    min-width: 100%;
    min-height: 100%;
    height: auto;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
</style>
