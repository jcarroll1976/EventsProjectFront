import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import './Details.css';
import { fetchEventById } from '../service/EventApiService';
import { Event } from '../models/eventModels';
// whenever a user clicks details button link to this page



export default function Details(){
  const id = Number(useParams().id);
  const [eventById, setEventById] = useState<Event|null>(null);

  useEffect(()=>{
    fetchEventById(id).then(data=>{
        setEventById(data);
    })
}, []);

  //const foundEvent = data.find((event) => event.id === id)
  return (
    <div className='Details'>

    <h1>{eventById?.title}</h1>
    <img src={eventById?.performers![0].image}></img>
    <p>This event is a {eventById?.type} event the venue is in {eventById?.venue?.name} and have a max capacity of {eventById?.venue?.capacity}. The event will be at {eventById?.venue?.address} {eventById?.venue?.city} {eventById?.venue?.country}.{eventById?.performers?.map((info, i)=> <p> Performers included at event: {info.name}</p>)} </p>
     <div/>
     <button>Save</button>
     <button>Share</button>
     <button>Review</button>
     <div/>
     <a href={eventById?.url}>
     <button>Get your tickets with Seat Geek here!</button> 
     </a>
     <div/>
     <Link to={`/`}>
       <button>Back to the main menu</button>
     </Link>
    </div>
  )
}
//be able to link back to the last page
