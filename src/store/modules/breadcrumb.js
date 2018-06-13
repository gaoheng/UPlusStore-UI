const state = {
  breadcrumbs: []
}

const actions = {
  set ({ commit }, breadcrumbs) {
    commit('set', breadcrumbs)
  }
}

const mutations = {
  set (state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
