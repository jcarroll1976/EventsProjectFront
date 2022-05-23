import { eventNames } from "process";
import { Event, Performer, Venue, Taxonomies } from "../models/eventModels"


interface Props{
    event: Event;
}


export default function SingleEvent({event}:Props){

    return(
        <div className="SingleEvent_Container">
            <h2>{event.title}</h2>

            {event.performers?.map((info, i)=> 
            <div>
                <img src= {info.image}/>
            </div>
            )}
            
            <a>{event.url}</a>
            {event.performers?.map((info, i)=> <p>{info.name}</p>)}
        </div>
    )
}

//)
//event.performers[i].image

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




*/