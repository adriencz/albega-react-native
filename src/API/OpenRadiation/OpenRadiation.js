import axios from "axios"

const API_KEY = 'bde8ebc61cb089b8cc997dd7a0d0a434'

export const getAllMeasurements = () => {
    return axios.get(`https://request.openradiation.net/measurements?apiKey=${API_KEY}&maxNumber=500`)
        .then(res => res.data)
        .catch(err => console.log(err))
}