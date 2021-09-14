<script>
  import Tabs from "../components/Tabs.svelte";

  const title = "Landscape & Visual - Viewpoint 7";
  const tabs = [
    {
      title: "Existing View",
      imgUrl: "images/vp7-existing.jpg",
      imgDesc: "Existing View",
    },
    {
      title: "Day 1 without Mitigation Measures",
      imgUrl: "images/vp7-day1unmit.jpg",
      imgDesc: "Day 1 without Mitigation Measures",
      table: [
        {
          title: "CM6",
          titleBg: "rgb(97, 147, 68)",
          content:
            "Tree without impact from proposed works should be retained as far as possible in accordance with DEVB TC(W) 4/2020 – Tree Preservation.",
        },
      ],
    },
    {
      title: "Day 1 with Mitigation Measures",
      imgUrl: "images/vp7-day1mit.jpg",
      imgDesc: "Day 1 with Mitigation Measures",
      table: [
        {
          title: "CM5",
          titleBg: "rgb(97, 147, 68)",
          content:
            "All hard and soft landscape areas disturbed temporarily during construction should be reinstated on like-to-like basis, to the satisfaction of the relevant Government Departments.",
        },
        {
          title: "CM6",
          titleBg: "rgb(97, 147, 68)",
          content:
            "Tree without impact from proposed works should be retained as far as possible in accordance with DEVB TC(W) 4/2020 – Tree Preservation.",
        },
        {
          title: "OM1",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Aesthetically pleasing design as regard to the form, material and finishes should be incorporated to Entrance, Plant Buildings, Ventilation Shafts and associated engineering facilities so as to blend in the structures to the adjacent landscape and visual context.",
        },
        {
          title: "OM2",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Tree Planting and shrub planting should be incorporated to provide screening to the Station building, viaduct and associated engineering facilities and serves as roadside amenity planting to provide ornamental value and enhance the landscape character of the streets",
        },
        {
          title: "OM4",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Roadside soft landscape should be incorporated to the station buildings and associated engineering facilities. Shade tolerant plants with tall to medium height should be planted to under the viaduct to soften the hard building edges and provide screening.",
        },
        {
          title: "OM6",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Compensatory tree planting should be provided in accordance with DEVB TC(W) 4/2020 – Tree Preservation to compensate for felled trees and maintained until end of the establishment period. Compensatory shrub planting should be provided to compensate for the loss of shrub planting in amenity areas.",
        },
      ],
    },
    {
      title: "Year 10 with Mitigation Measures",
      imgUrl: "images/vp7-year10.jpg",
      imgDesc: "Year 10 with Mitigation Measures",
      table: [
        {
          title: "CM5",
          titleBg: "rgb(97, 147, 68)",
          content:
            "All hard and soft landscape areas disturbed temporarily during construction should be reinstated on like-to-like basis, to the satisfaction of the relevant Government Departments.",
        },
        {
          title: "CM6",
          titleBg: "rgb(97, 147, 68)",
          content:
            "Tree without impact from proposed works should be retained as far as possible in accordance with DEVB TC(W) 4/2020 – Tree Preservation.",
        },
        {
          title: "OM1",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Aesthetically pleasing design as regard to the form, material and finishes should be incorporated to Entrance, Plant Buildings, Ventilation Shafts and associated engineering facilities so as to blend in the structures to the adjacent landscape and visual context.",
        },
        {
          title: "OM2",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Tree Planting and shrub planting should be incorporated to provide screening to the Station building, viaduct and associated engineering facilities and serves as roadside amenity planting to provide ornamental value and enhance the landscape character of the streets",
        },
        {
          title: "OM4",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Roadside soft landscape should be incorporated to the station buildings and associated engineering facilities. Shade tolerant plants with tall to medium height should be planted to under the viaduct to soften the hard building edges and provide screening.",
        },
        {
          title: "OM6",
          titleBg: "rgb(211, 141, 236)",
          content:
            "Compensatory tree planting should be provided in accordance with DEVB TC(W) 4/2020 – Tree Preservation to compensate for felled trees and maintained until end of the establishment period. Compensatory shrub planting should be provided to compensate for the loss of shrub planting in amenity areas.",
        },
      ],
    },
  ];
</script>

<Tabs {tabs} {title} />
