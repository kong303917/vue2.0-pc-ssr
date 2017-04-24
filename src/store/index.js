import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import list from './modules/list'
import detail from './modules/detail'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        list,
        detail,
        user
    }
})