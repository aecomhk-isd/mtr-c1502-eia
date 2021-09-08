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
  "/lvia-vp5": wrap({
    asyncComponent: () => import("./routes/LVIA-VP5.svelte"),
  }),
  "*": Home,
};
