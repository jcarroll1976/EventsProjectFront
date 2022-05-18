import axios from "axios";
import { ApiResponse, Event } from "../models/eventModels";

const clientID = process.env.REACT_APP_MYCLIENTID;
//const clientSecret = process.env.MYCLIENTSECRET;

export function fetchAllEvents():Promise<Event[]>{
    return axios.get(`https://api.seatgeek.com/2/events?client_id=${clientID}`)
    .then(response=>response.data.events);
}