<script>
  import { blur } from "svelte/transition";

  export let tabs = [];
  export let title = "";
  export let show = 0;

  function switchContent(index) {
    show = index;
  }
</script>

<main class="text-center">
  {#if title != ""}
    <h2>{title}</h2>
  {/if}
  <div class={"nav-" + tabs.length}>
    {#each tabs as item, i}
      <button
        class="nav-btn"
        class:active={show == i}
        on:click={() => switchContent(i)}>{item.title}</button
      >
    {/each}
  </div>
  <div class:content={title != ""} class:content-no-title={title == ""}>
    {#each tabs as item, i (item.title)}
      {#if show == i}
        <div class="content-div" transition:blur={{ amount: 20 }}>
          <img
            class="content-img center"
            src={item.imgUrl}
            alt={item.imgDesc}
          />
          {#if item.table}
            <table class="bottom-table">
              {#each item.table as rowItem, i (rowItem.title)}
                <tr>
                  <td style="background-color: {rowItem.titleBg}; width: 8em;"
                    >{rowItem.title}</td
                  >
                  <td>{rowItem.content}</td>
                </tr>
              {/each}
            </table>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</main>

<style>
  .content {
    width: 100%;
    height: calc(100vh - 200px);
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .content-no-title {
    width: 100%;
    height: calc(100vh - 150px);
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .bottom-table {
    text-align: left;
    font-size: 0.8em;
    background-color: whitesmoke;
    margin-bottom: -5px;
    width: 100%;
    color: black;
    padding: 2em;
    border-collapse: collapse;
  }
  td {
    padding: 1em;
  }
</style>
