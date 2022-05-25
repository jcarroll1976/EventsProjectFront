import axios from "axios";
import { ApiResponse, Event } from "../models/eventModels";
import {auth} from '../firebaseconfig';
const clientID = process.env.REACT_APP_MYCLIENTID;
//const clientSecret = process.env.MYCLIENTSECRET;

export function fetchAllEvents():Promise<Event[]>{
    return axios.get(`https://api.seatgeek.com/2/events?client_id=${clientID}`) 
    .then(response=>response.data.events);
}


//local API
//what will this return? add it to the promise type.
// pass in as route param: UserID or UID
  export async function fetchEvents(userID: string):Promise<any> {
    return axios.get(`http://localhost:5001/final-project-event-app/us-central1/api/events/${userID}`)
  }


 