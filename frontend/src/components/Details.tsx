import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import './Details.css';


// whenever a user clicks details button link to this page

interface Props{
  event: Event;
}

export default function Details({event}:Props){
  const id = Number(useParams().id);
  const foundEvent = data.find((event) => event.id === id)
  return (
    <div className='Details'>
     
      <p></p>
     
     <button>Save</button>
     <button>Share</button>
     <button>Review</button> 
     <Link to={`/`}>Click here to return to menu</Link>
    </div>
  )
}
//be able to link back to the last page
