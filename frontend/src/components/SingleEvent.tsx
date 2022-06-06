import { eventNames } from "process";
import { Link } from "react-router-dom";
import { Event, Performer, Venue, Taxonomies, UserFavorites } from "../models/eventModels"
import "./SingleEvent.css";
import { useEffect, useState, useContext } from "react";
import { getUserFavorite } from "../service/EventApiService";
import { User } from "firebase/auth";
import AuthContext from '../context/AuthContext';


interface Props{
    event: Event;
}


export default function SingleEvent({event}:Props){
    const [favoritesList, setFavoritesList] = useState<Event[]>([])
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        getUserFavorite(user!.uid).then(data=>{
            setFavoritesList(data.favoriteEvents);
        })
    }, []);

    //Checking user favorites DB
    function favoriteExists(selectedEvent: Event):boolean|undefined {
        if(favoritesList.some((event)=>event.id===selectedEvent.id)){
            return true;
        }else{
            return false;
        }
    }

    return(
        <div className="SingleEvent_Container">
            <div className="SingleEvent_TitleContainer">
            {favoriteExists(event)===true && <span className="SingleEvent_heart">&hearts;</span>}
            <h2 className="SingleEvent_Title">{event.title}</h2>
            </div>
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
