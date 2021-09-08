<script>
  import Tabs from "../components/Tabs.svelte"

  const tabs = [
    {
      title: "Existing View",
      imgUrl: "images/blue-eyed-cat-peeking.jpg",
      imgDesc: "blue eyed cat peeking",
    },
    {
      title: "Day 1 without Mitigation Measures",
      imgUrl: "images/cute-curious-cat.jpg",
      imgDesc: "blue eyed cat peeking",
    },
    {
      title: "Day 1 with Mitigation Measures",
      imgUrl: "images/lion-laying-on-rock.jpg",
      imgDesc: "blue eyed cat peeking",
    },
    {
      title: "Year 10 with Mitigation Measures",
      imgUrl: "images/cat-with-big-ears.jpg",
      imgDesc: "cat with big ears",
    },
  ];
</script>

<Tabs {tabs} />
