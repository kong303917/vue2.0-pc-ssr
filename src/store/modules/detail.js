import api from '../../service/api1.js'
import * as types from '../types'

const state = {
    expertInfo: {},
    expertAttribute: '',
    researchList: []
}

const actions = {
    getExpertDetail({ commit }, params) {
        api.getExpertDetail(params).then(res => {
            commit(types.EXPERT_DETAIL, res)
        })
    },
    getExpertAttribute({ commit }, params) {
        api.getExpertAttribute(params).then(res => {
            commit(types.EXPERT_ATTRIBUTE, res)
        })
    },
    getExpertResearch({ commit }, params) {
        api.getExpertResearch(params).then(res => {
            commit(types.EXPERT_RESEARCH, res)
        })
    }
}

const getters = {
    getExpertDetail: state => state.expertInfo,
    getExpertAttribute: state => state.expertAttribute,
    getExpertResearch: state => state.researchList
}

const mutations = {
    [types.EXPERT_DETAIL](state, res) {
        state.expertInfo = res.rows
    },
    [types.EXPERT_ATTRIBUTE](state, res) {
        state.expertAttribute = res.desc
    },
    [types.EXPERT_RESEARCH](state, res) {
        state.researchList = res.rows
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}