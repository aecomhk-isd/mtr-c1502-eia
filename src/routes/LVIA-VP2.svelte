<script>
  import Tabs from "../components/Tabs.svelte";

  const title = "Landscape & Visual - Viewpoint 2";
  const tabs = [
    {
      title: "Existing View",
      imgUrl: "images/vp2-existing.jpg",
      imgDesc: "Existing View",
    },
    {
      title: "Day 1 without Mitigation Measures",
      imgUrl: "images/vp2-day1unmit.jpg",
      imgDesc: "Day 1 without Mitigation Measures",
    },
    {
      title: "Day 1 with Mitigation Measures",
      imgUrl: "images/vp2-day1mit.jpg",
      imgDesc: "Day 1 with Mitigation Measures",
      table: [
        {
          title: "OM1",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Aesthetically pleasing design as regard to the form, material and finishes should be incorporated to Entrance, Plant Buildings, Ventilation Shafts and associated engineering facilities so as to blend in the structures to the adjacent landscape and visual context.",
        },
      ],
    },
    {
      title: "Year 10 with Mitigation Measures",
      imgUrl: "images/vp2-year10.jpg",
      imgDesc: "Year 10 with Mitigation Measures",
      table: [
        {
          title: "OM1",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Aesthetically pleasing design as regard to the form, material and finishes should be incorporated to Entrance, Plant Buildings, Ventilation Shafts and associated engineering facilities so as to blend in the structures to the adjacent landscape and visual context.",
        },
      ],
    },
  ];
</script>

<Tabs {tabs} {title} />
