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
        class="content-img"
        src="images/blue-eyed-cat-peeking.jpg"
        alt="blue eyed cat peeking"
      />
    {/if}
    {#if show == 2}
      <img
        transition:fade
        class="content-img"
        src="images/cute-curious-cat.jpg"
        alt="cute curious cat"
      />
    {/if}
    {#if show == 3}
      <img
        transition:fade
        class="content-img"
        src="images/lion-laying-on-rock.jpg"
        alt="lion laying on rock"
      />
    {/if}
    {#if show == 4}
      <img
        transition:fade
        class="content-img"
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

  .nav {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
