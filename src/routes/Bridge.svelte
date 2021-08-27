<script>
  import { fade } from "svelte/transition";
  export let show;

  function switchContent(index) {
    show = index;
  }
</script>

<main class="text-center">
  <div class="nav-4">
    <button
      class="nav-btn"
      class:active={show == 1}
      on:click={() => switchContent(1)}>Existing View</button
    >
    <button
      class="nav-btn"
      class:active={show == 2}
      on:click={() => switchContent(2)}
      >Day 1 without Mitigation Measures
    </button>
    <button
      class="nav-btn"
      class:active={show == 3}
      on:click={() => switchContent(3)}
      >Day 1 with Mitigation Measures
    </button>
    <button
      class="nav-btn"
      class:active={show == 4}
      on:click={() => switchContent(4)}
      >Year 10 with Mitigation Measures
    </button>
  </div>
  <div class="content">
    {#if show == 1}
      <img
        transition:fade
        class="content-img center"
        src="images/blue-eyed-cat-peeking.jpg"
        alt="blue eyed cat peeking"
      />
    {/if}
    {#if show == 2}
      <img
        transition:fade
        class="content-img center"
        src="images/cute-curious-cat.jpg"
        alt="cute curious cat"
      />
    {/if}
    {#if show == 3}
      <img
        transition:fade
        class="content-img center"
        src="images/lion-laying-on-rock.jpg"
        alt="lion laying on rock"
      />
    {/if}
    {#if show == 4}
      <img
        transition:fade
        class="content-img center"
        src="images/cat-with-big-ears.jpg"
        alt="cat with big ears"
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

  .content {
    width: 100%;
    height: calc(100vh - 150px);
    position: relative;
    overflow: hidden;
  }
</style>
