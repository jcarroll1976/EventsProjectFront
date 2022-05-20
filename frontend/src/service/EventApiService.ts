import axios from "axios";
import { ApiResponse, Event } from "../models/eventModels";

const clientID = process.env.REACT_APP_MYCLIENTID;
//const clientSecret = process.env.MYCLIENTSECRET;

export function fetchAllEvents():Promise<Event[]>{
    return axios.get(`https://api.seatgeek.com/2/events?client_id=${clientID}`)
    .then(response=>response.data.events);
}

export function fetchRecommendedEvents():Promise<Event[]>{
    //Postal code always
    //optional- concert, sports, comedy, broadway/theater, horse_racing, monster_trucks
    //taxonomies.name=sports&taxonomies.name=concert
    //concert genres
    //sport type
    return axios.get(`https://api.seatgeek.com/2/events?client_id=${clientID}`)
    .then(response=>response.data.events)
}

//Strech-Goal--Incrementing page number with a next button

//Add Taxonomies model in BE 

//BASEurl VARIABLE-- looping to add to the baseURL if certain properties exist in the user pref