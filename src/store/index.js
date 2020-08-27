import Vue from 'vue'
import Vuex from 'vuex'

import { HomePageModule } from './HomePageStore/modules'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        HomePageModule
    }

})