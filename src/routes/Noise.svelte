<script>
  import Tabs from "../components/Tabs.svelte";

  const title = "Rail Noise";
  const tabs = [
    {
      title: "Daytime without Mitigation Measures",
      imgUrl: "images/noise-02.png",
      imgDesc: "Daytime without Mitigation Measures",
    },
    {
      title: "Daytime with Mitigation Measures",
      imgUrl: "images/noise-02-wm.png",
      imgDesc: "Daytime with Mitigation Measures",
    },
    {
      title: "Night-time without Mitigation Measures",
      imgUrl: "images/noise-02-n.png",
      imgDesc: "Night-time without Mitigation Measures",
    },
    {
      title: "Night-time with Mitigation Measures",
      imgUrl: "images/noise-02-n-wm.png",
      imgDesc: "Night-time with Mitigation Measures",
    },
  ];
</script>

<Tabs {tabs} {title} />
