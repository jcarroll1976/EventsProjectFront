import { eventNames } from "process";
import { Link } from "react-router-dom";
import { Event, Performer, Venue, Taxonomies, UserFavorites } from "../models/eventModels"
import "./SingleEvent.css";



interface Props{
    event: Event;
}


export default function SingleEvent({event}:Props){

    return(
        <div className="SingleEvent_Container">
            <h2 className="SingleEvent_Title">{event.title}</h2>
            {(event.taxonomies && event.taxonomies.length >= 0) && <p className="SingleEvent_Type">Event Type: {event.taxonomies[0].name}</p>}
            {(event.performers && event.performers.length >= 0) && <img className="SingleEvent_Img" src={event.performers[0].image}/>}
            {((event.performers && event.performers.length > 1) && <p className="SingleEvent_Performer">Performers: {event.performers[0].name} and More! Click below to see all performers!</p>)||
            ((event.performers && event.performers.length === 1) && <p className="SingleEvent_Performer">Performer: {event.performers[0].name}</p>)}
            <Link to={`/Details/${event.id}`}>
                <button className="SingleEvent_DetailsBtn">Click here for more details!</button>
            </Link>
            <div></div>
            
        </div>
    )
}
