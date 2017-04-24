import api from '../../service/api1.js'
import * as types from '../types'

const state = {
    reportContent: {},
    reportExpert: {}
}

const actions = {
    detailedResearchReport({ commit }, params) {
        api.detailedResearchReport().then(res => {
            commit(types.DETAILED_RESEARCH_REPORT, res)
        })
    },
    getExpertReport({ commit }, params) {
        api.getExpertDetail().then(res => {
            commit(types.GET_EXPERT_REPORT, res)
        })
    }
}

const getters = {
    detailedResearchReport: state => state.reportContent,
    getExpertReport: state => state.reportExpert
}

const mutations = {
    [types.DETAILED_RESEARCH_REPORT](state, res) {
        state.reportContent = res.rows
    },
    [types.GET_EXPERT_REPORT](state, res) {
        state.reportExpert = res.rows
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}