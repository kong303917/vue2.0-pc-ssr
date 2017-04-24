import api from '../../service/api1.js'
import * as types from '../types'

const state = {
    isLogin: false, // 用户是否登录
    userInfo: {},   // 用户信息
    loginSuccessToUrl: '',     // 用户登录成功后要跳转的链接
    loginFailedToUrl: ''      // 用户登录失败后要跳转的链接
}

const actions = {
    changeLoginStatus({ commit }, params) {
        commit(types.CHANGE_LOGIN_STATUS, params)
    },
    updateUserInfo({ commit }, params) {
        commit(types.UPDATE_USER_INFO, params)
    },
    getUserInfo({ commit }, params) {
        api.getUserInfo().then(res => {
            commit(types.GET_USER_INFO, res)
        })
    }
}

const getters = {
    changeLoginStatus: state => state.isLogin,
    updateUserInfo: state => state.userInfo,
    getUserInfo: state => state.userInfo
}

const mutations = {
    // 改变登录状态
    [types.CHANGE_LOGIN_STATUS](state, payload) {
        state.isLogin = payload.loginState
    },

    // 更新用户信息
    [types.UPDATE_USER_INFO](state, payload) {
        state.userInfo = payload.userInfo
    },

    [types.GET_USER_INFO](state, res) {
        state.userInfo = res.rows
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}