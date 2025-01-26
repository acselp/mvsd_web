import axios from "axios";

const BASE_URL = 'http://127.0.0.1:5000/';

const predictRFC = "randomForrest"
const predictDTC = "decisionTree"

const getUrl = (route: string) => {
    return `${BASE_URL}${route}`;
}


export const PredictionService = {
    getRFCPrediction() {
        return axios.post(getUrl(predictRFC), { model: { Hello: 'Hekki' } });
    },

    getDTCPrediction() {
        return axios.post(getUrl(predictDTC), { model: { Hello: 'Hekki' } });
    },
}