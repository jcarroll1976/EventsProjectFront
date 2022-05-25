import axios from "axios";
import { ApiResponse, Event, UserPreference } from "../models/eventModels";
import * as qs from "qs";


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
let selectedSport = userData.sport || [];
let selectedGenre = userData.genre || [];

let newApiLink = baseUrl+"&per_page=20"+"&postal_code="+postalCode;

for(let i = 0; i < selectedEvent.length; i++){
    newApiLink += "&taxonomies.name="+selectedEvent[i]; 
    };
for(let i = 0; i < selectedSport.length; i++){
    newApiLink += "&taxonomies.name="+selectedSport![i];
    };
newApiLink += "&genres.slug=";
for(let i = 0; i < selectedGenre.length; i++){
    newApiLink += selectedGenre![i] + "," ;
    };

console.log(newApiLink);

    return axios.get(newApiLink)
    .then(response=>response.data.events)
}


//Strech-Goal--Incrementing page number with a next button