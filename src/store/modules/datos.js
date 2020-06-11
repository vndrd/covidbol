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
    loadData: async function({commit}){
        const allData = await myFile.data;
         console.log({allData})
        await commit('setNacional',allData.pais)
        await commit('setDepartamentos',allData.departamentos)
        await commit('setTimeseries',allData.evolucion)
        console.log({fromVuex: allData.departamentos})
    }
}
const mutations = {
    setNacional: (state,nacional) => state.nacional = nacional,
    setDepartamentos: (state,departamentos) => state.departamentos = departamentos,
    setTimeseries: (state,timeseries) => state.timeseries = timeseries,
}
export default{
    state,
    getters,
    actions,
    mutations,
}