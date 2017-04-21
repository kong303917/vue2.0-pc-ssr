import api from '../../service/api1.js'
import * as types from '../types'

const state = {
    tabActiveIndex: 0,
    technicianLists: [],
    Items: [1, 2, 3],
    currentPage: 1,
    totalSize:1
}

const actions = {
    getTechnicianList({ commit }, params) {
        api.technicianList(params.offset, params.limit).then(res => {
            commit(types.TECHNICIAN_LIST, res)
        })
    },
    setCurrentPage({ commit }, params) {
        commit(types.CURRENT_PAGE, params)
    }
}

const getters ={
    getTechnicianList: state => state.technicianLists,
    setCurrentPage: state => state.currentPage
}

const mutations = {
    [types.TECHNICIAN_LIST](state, res) {
        state.technicianLists = res.rows
        state.totalSize = res.totalSize
    },
    [types.CURRENT_PAGE](state, res) {
        state.currentPage = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}