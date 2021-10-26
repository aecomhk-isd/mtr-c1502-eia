<script>
  import Tabs from "../components/Tabs.svelte";

  const title = "Rail Noise";
  const tabs = [
    {
      title: "Daytime without Mitigation Measures",
      imgUrl: "images/noise-04-day-wom.jpg",
      imgDesc: "Daytime without Mitigation Measures",
    },
    {
      title: "Daytime with Mitigation Measures",
      imgUrl: "images/noise-04-day-wm.jpg",
      imgDesc: "Daytime with Mitigation Measures",
    },
    {
      title: "Night-time without Mitigation Measures",
      imgUrl: "images/noise-04-night-wom.jpg",
      imgDesc: "Night-time without Mitigation Measures",
    },
    {
      title: "Night-time with Mitigation Measures",
      imgUrl: "images/noise-04-night-wm.jpg",
      imgDesc: "Night-time with Mitigation Measures",
    },
  ];
</script>

<Tabs {tabs} {title} />
