<script>
  import Tabs from "../components/Tabs.svelte";

  const tabs = [
    {
      title: "EIA No Mitigation Measures",
      imgUrl: "images/noise_existing.png",
      imgDesc: "Noise Existing",
    },
    {
      title: "With Mitigation Measures",
      imgUrl: "images/noise_option2.png",
      imgDesc: "Noise Option 2",
    },
  ];
</script>

<Tabs {tabs} />
