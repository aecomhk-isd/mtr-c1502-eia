<script>
  import Tabs from "../components/Tabs.svelte";

  const title = "Rail Noise";
  const tabs = [
    {
      title: "Daytime without Mitigation Measures",
      imgUrl: "images/noise-04-day-wom.png",
      imgDesc: "Daytime without Mitigation Measures",
    },
    {
      title: "Daytime with Mitigation Measures",
      imgUrl: "images/noise-04-day-wm.png",
      imgDesc: "Daytime with Mitigation Measures",
    },
    {
      title: "Night-time without Mitigation Measures",
      imgUrl: "images/noise-04-night-wom.png",
      imgDesc: "Night-time without Mitigation Measures",
    },
    {
      title: "Night-time with Mitigation Measures",
      imgUrl: "images/noise-04-night-wm.png",
      imgDesc: "Night-time with Mitigation Measures",
    },
  ];
</script>

<Tabs {tabs} {title} />
