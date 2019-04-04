import axios from 'axios'
import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

let hostname = 'http://118.25.6.157:1226'

var instance = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }

})

export const get_all_cases = params => {
    console.log(`${hostname}/GroupBuilding/get_all_cases`)
    return this.$http.get('http://118.25.6.157:1226/GroupBuilding/get_all_cases');
};

export const getAllVillas = params => { return instance.get('http://118.25.6.157:8686/homeparty/manage/getAllVillas'); };

export const Hostname = hostname