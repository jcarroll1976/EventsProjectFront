import { useEffect, useState } from "react";
import { ApiResponse, Event } from "../models/eventModels";
import { fetchAllEvents } from "../service/EventApiService";

export default function Homepage(){
    const [allEventsList, setAllEventsList] = useState<Event[]>([]);

    useEffect(()=>{
        fetchAllEvents().then(data=>{
            setAllEventsList(data);
            console.log(allEventsList);
        })
    }, []);

    return(
        <div>

        </div>
    )
}