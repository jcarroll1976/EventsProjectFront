import { Event, Performers, Venue, Taxonomies } from "../models/eventModels"


interface Props{
    event: Event;
}

export default function SingleEvent({event}:Props){

    return(
        <div className="SingleEvent_Container">
            <h2>{event.title}</h2>
            {event.performers.map((info, i)=> <img src= {info.image}/>)}
            <a>{event.url}</a>
            {event.performers.map((info, i)=> <p>{info.name}</p>)}
            {event.venue.display_location}
        </div>
    )
}