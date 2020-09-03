import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        sideMenuCollapsed: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.isUserLoggedIn = !!token;
        },
        setUser(state, user) {
            state.user = user;
        },
        collapseSideMenu(state) {
            state.sideMenuCollapsed = !state.sideMenuCollapsed;
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
        setUser({ commit }, user) {
            commit('setUser', user)
        },
        collapseSideMenu({ commit }) {
            commit('collapseSideMenu')
        }
    }
});
