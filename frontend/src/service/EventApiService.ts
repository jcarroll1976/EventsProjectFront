import axios from "axios";
import { ApiResponse, Event, UserPreference } from "../models/eventModels";

const clientID = process.env.REACT_APP_MYCLIENTID;
//const clientSecret = process.env.MYCLIENTSECRET;

const baseUrl = `https://api.seatgeek.com/2/events?client_id=${clientID}`;

export function fetchAllEvents():Promise<Event[]>{
    return axios.get(baseUrl)
    .then(response=>response.data.events);
}

export function fetchRecommendedEvents(userData: UserPreference):Promise<Event[]>{
//BASEurl VARIABLE-- looping to add to the baseURL if certain properties exist in the user pref

let postalCode = userData.postal_code;
let selectedEvent = userData.event;
let selectedSport = userData.taxonomies.sport;
let selectedGenre = userData.taxonomies.genre;

let newApiLink = baseUrl;


for(let i = 0; i<= selectedEvent.length; i++){
    newApiLink += "&taxonomies.name="+selectedEvent[i];
}

    //Postal code always
    //optional- concert, sports, comedy, broadway/theater, horse_racing, monster_trucks
    //taxonomies.name=sports&taxonomies.name=concert
    //concert genres
    //sport type
    return axios.get(newApiLink)
    .then(response=>response.data.events)
}

//Strech-Goal--Incrementing page number with a next button

//LOOK INTO PARAMS & STRINGIFY FROM LISA ON SLACK