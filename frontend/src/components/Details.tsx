import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import './Details.css';
import {Event} from "../models/eventModels";
// whenever a user clicks details button link to this page

interface Props {
  event: Event;
}

export default function Details(){
  const location = useLocation();
  const state = location.state as Props;
  const {event} = state;

  return (
    <div className='Details'>
     <h1>Event Details</h1>
     {event.title}
     {/* ADD MORE EVENT DETAILS HERE*/}
     <button>Save</button>
     <button>Share</button>
     <button>Review</button> 
     <Link to={`/`}>Click here to return to menu</Link>
    </div>
  )
}
//be able to link back to the last page
