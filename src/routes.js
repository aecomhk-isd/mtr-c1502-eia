import Home from "./routes/Home.svelte";
import { wrap } from "svelte-spa-router/wrap";

export default {
  "/bridge": wrap({
    asyncComponent: () => import("./routes/Bridge.svelte"),
    props: {
      show: 1,
    },
  }),
  "/noise": wrap({
    asyncComponent: () => import("./routes/Noise.svelte"),
    props: {
      show: 1,
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
  "*": Home,
};
