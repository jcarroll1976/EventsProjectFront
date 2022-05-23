import { eventNames } from "process";
import { Event, Performer, Venue, Taxonomies } from "../models/eventModels"


interface Props{
    event: Event;
}


export default function SingleEvent({event}:Props){

    return(
        <div className="SingleEvent_Container">
            <h2>{event.title}</h2>
            {(event.taxonomies && event.taxonomies.length >= 0) && <p>Event Type: {event.taxonomies[0].name}</p>}
            {(event.performers && event.performers.length >= 0) && <img src={event.performers[0].image}/>}
            {event.performers?.map((info, i)=> <p>Performer: {info.name}</p>)}
            <a href={event.url}>Visit Event Page Here!</a>
            
        </div>
    )
}

//{event.performers.length >= 0 && <img src={event.performers?[0].image}/>}

//event.performers[i].image.length > 0 && {then show just the first image}

//{event.performers?.map((info, i)=> {info[i].length > 0 && <img src= {info[0].image}/>})}

/*function getImageLink(event:any){
    let imageLink = "";
    if(event.performers.length > 0){
        imageLink = event.performers[0].image;
        return console.log(imageLink);
    }
}
console.log(getImageLink);

 {event.performers?.map((info, i)=> 
            <div>
                <img src= {info.image}/>
            </div>
            )}



*/