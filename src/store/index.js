import { createStore } from "vuex";

import coahesModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coahesModule
    }
});

export default store;