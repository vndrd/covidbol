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
    timeseries: (state) => {
        let objectToArray = (arr,agrupados) => {
            Object.keys(agrupados).forEach(function (key) {
                arr.push({fecha: key,datos :agrupados[key]});
            });
            return arr
        }
        let res = state.timeseries.reduce((acc, curr) => {
            if(!acc[curr.fecha]) 
                acc[curr.fecha] = []; //If this type wasn't previously stored
            acc[curr.fecha].push(curr);
            return acc;
        },[])
        return objectToArray([] , res);
    }
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