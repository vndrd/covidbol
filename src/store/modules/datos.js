import myFile from '@/assets/datos.json'
const state = {
    nacional: {

    },
    departamentos: []
}
const getters = {
    getNacional: (state) => state.nacional,
    getDepartamentos: (state) => state.departamentos,
}
const actions = {
    loadData: function({commit}){
        const allData = myFile.data;
        commit('setNacional',allData.pais)
    }
}
const mutations = {
    setNacional: (state,nacional) => state.nacional = nacional,
    setDepartamentos: (state,departamentos) => state.departamentos = departamentos
}
export default{
    state,
    getters,
    actions,
    mutations,
}