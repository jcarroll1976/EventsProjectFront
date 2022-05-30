import axios from "axios";
import { ApiResponse, Event, UserFavorites, UserPreference } from "../models/eventModels";
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

let newApiLink = baseUrl+"&postal_code="+postalCode;

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

export function fetchEventById(id:number):Promise<Event>{
    return axios.get("https://api.seatgeek.com/2/events/"+id+"?client_id="+clientID)
    .then(response=>response.data)
}

export function postUserPref(userData: UserPreference):Promise<UserPreference>{
    return axios.post("https://us-central1-final-project-event-app.cloudfunctions.net/api/preferences", userData)
    .then(response=>response.data)
}

export function getUserPref(userId: string):Promise<UserPreference>{
    return axios.get("https://us-central1-final-project-event-app.cloudfunctions.net/api/preferences/"+userId)
    .then(response=>response.data)
}

export function getUserFavorite(id: string): Promise<UserFavorites[]>{
    return axios.get("https://us-central1-final-project-event-app.cloudfunctions.net/api/preferences/"+id)
}

//first favorite added
export function postUserFavorite(userFavorite: UserFavorites):Promise<UserFavorites>{
    return axios.post("https://us-central1-final-project-event-app.cloudfunctions.net/api/favorites/", userFavorite)
    .then(response=>response.data)
}

//put call- add more to a users favorite list
export function putUserFavorite(id: string, event: Event):Promise<UserFavorites>{
    return axios.put("https://us-central1-final-project-event-app.cloudfunctions.net/api/favorites/"+id, event)
    .then(response=>response.data)
}



//Add Delete call for remove Favorites 
//Strech-Goal--Incrementing page number with a next button