import axios from "axios";
import type {CsvModel} from "@/type.ts";

const BASE_URL = 'http://127.0.0.1:5000/';

const predict = 'predict';
const getAllTest = "getAllTest"
const getAllTrain = "getAllTrain"
const getScore = "getScore"

const getUrl = (route: string) => {
    return `${BASE_URL}${route}`;
}


export const PredictionService = {
    predict(model: CsvModel) {
        return axios.post(getUrl(predict), { model: model });
    },

    getAllTest(length: number = 300) {
        return axios.get(getUrl(getAllTest), { params: { size: length } });
    },

    getAllTrain(length: number = 300) {
        return axios.get(getUrl(getAllTrain), { params: { size: length } });
    },

    getScore() {
        return axios.get(getUrl(getScore));
    }
}