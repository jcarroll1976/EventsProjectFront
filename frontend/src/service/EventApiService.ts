import axios from "axios";
import { ApiResponse } from "../models/eventModels";

const clientID = process.env.MYCLIENTID;
const clientSecret = process.env.MYCLIENTSECRET;

export function fetchAllEvents():Promise<ApiResponse>{
    return axios.get(`https://api.seatgeek.com/2/events?client_id=${clientID}&client_secret=${clientSecret}`)
    .then(response=>response.data);
}