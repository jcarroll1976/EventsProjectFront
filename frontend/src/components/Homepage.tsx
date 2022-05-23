import { useEffect, useState } from "react";
import { ApiResponse, Event, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents } from "../service/EventApiService";
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

    function displayRecommendedEvents(userPref: UserPreference): void{
        fetchRecommendedEvents(userPref).then(data =>{
            setAllEventsList(data);
        });
    };

    return(
        <div>
            <main>
                {/*<UserPreferenceForm onSubmit={displayRecommendedEvents}/>*/}

                {allEventsList.map((data, i)=>
                    <SingleEvent key={i} event={data}/>
                )}
            </main>
        </div>
    )
}