import { useEffect, useState } from "react";
import { ApiResponse, Event } from "../models/eventModels";
import { fetchAllEvents } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";

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
            <main>
                {allEventsList.map((data, i)=>
                    <SingleEvent key={i} event={data}/>
                )}
                <UserPreferenceForm/>
            </main>
        </div>
    )
}