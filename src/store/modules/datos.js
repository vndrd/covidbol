import myFile from '@/assets/datos.json'
const state = {
    nacional: {},
    departamentos: [],
    timeseries: [],
}
const getters = {
    getNacional: (state) => state.nacional,
    getDepartamentos: (state) => state.departamentos,
    getTimeseries: (state) => state.timeseries,
}
const actions = {
    loadData: function({commit}){
        const allData = myFile.data;
        // console.log({allData})
        commit('setNacional',allData.pais)
        commit('setDepartamentos',allData.departamentos)
        commit('setTimeseries',allData.evolucion)
        // console.log({fromVuex: allData.departamentos})
    }
}
const mutations = {
    setNacional: (state,time) => state.time = time,
    setDepartamentos: (state,departamentos) => state.departamentos = departamentos,
    setTimeseries: (state,timeseries) => state.timeseries = timeseries,
}
export default{
    state,
    getters,
    actions,
    mutations,
}