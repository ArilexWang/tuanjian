import axios from 'axios'

let hostname = 'http://118.25.6.157:1226'

var instance = axios.create({
    headers: {'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'}
    
})

export const get_case_by_condition = params => { 
    console.log(`${hostname}/GroupBuilding/get_all_cases`)
    return instance.get(`${hostname}/GroupBuilding/get_all_cases`);
};

export const getAllVillas = params => {return instance.get('http://118.25.6.157:8686/homeparty/manage/getAllVillas');};
