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
  "*": Home,
};
