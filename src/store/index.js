import { createStore } from "vuex";

import calculationsModule from "./modules/calculations/index.js";
import commentsModule from "./modules/comments/index.js";

const store = createStore({
  modules: {
    calculations: calculationsModule,
    comments: commentsModule,
  },
});

export default store;
