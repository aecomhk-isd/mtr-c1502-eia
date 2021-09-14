import Home from "./routes/Home.svelte";
import { wrap } from "svelte-spa-router/wrap";

export default {
  "/bridge": wrap({
    asyncComponent: () => import("./routes/Bridge.svelte"),
    props: {
      show: 0,
    },
  }),
  "/noise": wrap({
    asyncComponent: () => import("./routes/Noise.svelte"),
    props: {
      show: 0,
    },
  }),
  "/ardeid-night": wrap({
    asyncComponent: () => import("./routes/ArdeidNight.svelte"),
  }),
  "/ardeid-day": wrap({
    asyncComponent: () => import("./routes/ArdeidDay.svelte"),
  }),
  "/fruit-bat-tmp": wrap({
    asyncComponent: () => import("./routes/FruitBatTMP.svelte"),
  }),
  "/fruit-bat-ptr": wrap({
    asyncComponent: () => import("./routes/FruitBatPTR.svelte"),
  }),
  "/lvia-vp1": wrap({
    asyncComponent: () => import("./routes/LVIA-VP1.svelte"),
  }),
  "/lvia-vp2": wrap({
    asyncComponent: () => import("./routes/LVIA-VP2.svelte"),
  }),
  "/lvia-vp3": wrap({
    asyncComponent: () => import("./routes/LVIA-VP3.svelte"),
  }),
  "/lvia-vp4": wrap({
    asyncComponent: () => import("./routes/LVIA-VP4.svelte"),
  }),
  "/lvia-vp5": wrap({
    asyncComponent: () => import("./routes/LVIA-VP5.svelte"),
  }),
  "/lvia-vp6": wrap({
    asyncComponent: () => import("./routes/LVIA-VP6.svelte"),
  }),
  "/lvia-vp7": wrap({
    asyncComponent: () => import("./routes/LVIA-VP7.svelte"),
  }),
  "/lvia-vp8": wrap({
    asyncComponent: () => import("./routes/LVIA-VP8.svelte"),
  }),
  "/lvia-vp9": wrap({
    asyncComponent: () => import("./routes/LVIA-VP9.svelte"),
  }),
  "*": Home,
};
