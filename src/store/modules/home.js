import api from '../../service/api1.js'
import * as types from '../types'

const state = {
    carousels: [],
    styleInfo: [],
    styleBanner: [],
    expertLists: [],
    bottomCarousels: []
}

const actions = {
    getTopCarousel({ commit }, params) {
        api.topCarousel().then(res => {
            commit(types.CAROUSELS, res)
        })
    },
    getExpertStyle({ commit }, params) {
        api.expertStyle().then(res => {
            commit(types.STYLE_INFO, res)
        })
    },
    getExpertStyleBanner({ commit }, params) {
        api.expertStyleBanner().then(res => {
            commit(types.STYLE_BANNER, res)
        })
    },
    getExpertList({ commit }, params) {
        api.expertList().then(res => {
            commit(types.EXPERT_LISTS, res)
        })
    },
    getBottomCarousel({ commit }, params) {
        api.bottomCarousel().then(res => {
            commit(types.BOTTOM_CAROUSELS, res)
        })
    }
}

const getters = {
    getTopCarousel: state => state.carousels,
    getExpertStyle: state => state.styleInfo,
    getExpertStyleBanner: state => state.styleBanner,
    getExpertList: state => state.expertLists,
    getBottomCarousel: state => state.bottomCarousels
}

const mutations = {
    [types.CAROUSELS](state, res) {
        state.carousels = res.rows
    },
    [types.STYLE_INFO](state, res) {
        state.styleInfo = res.rows
    },
    [types.STYLE_BANNER](state, res) {
        state.styleBanner = res.rows
    },
    [types.EXPERT_LISTS](state, res) {
        state.expertLists = res.rows
    },
    [types.BOTTOM_CAROUSELS](state, res) {
        state.bottomCarousels = res.rows
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}