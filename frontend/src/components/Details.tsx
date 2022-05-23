import React from 'react'
import { useEffect, useState } from "react";
import { ApiResponse, Event,} from "../models/eventModels";
import { fetchAllEvents, } from "../service/EventApiService";
import './Details.css';
// whenever a user clicks details button link to this page

export default function Details() {
  const [allEventsList, setAllEventsList] = useState<Event[]>([]);
  

  useEffect(()=>{
    fetchAllEvents().then(data=>{
        setAllEventsList(data);
    })
}, []);

  return (
    <div className='Details'>
     <h1>Event Details</h1>
     {allEventsList.map((data, i) =>
     <><p key={i}>{data.title}</p>
     <img key={i} src={data.performers[0].image}></img>
     <p key={i}>In {data.venue.name} at {data.venue.address} {data.venue.state}, {data.venue.country} </p>
     <button>Save</button>
     <button>Share</button>
     <button>Review</button> 
     
     </>)} 
    </div>
  )
}
//be able to link back to the last page
