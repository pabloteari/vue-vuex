import { createStore, createLogger } from "vuex";

import module1 from "./module1";
import mutations from "./module1/mutations";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    module1,
  },
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
