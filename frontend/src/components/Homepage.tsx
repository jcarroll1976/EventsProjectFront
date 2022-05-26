import { useEffect, useState, useContext } from "react";
import { ApiResponse, Event, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";
import {signOut} from '../firebaseconfig'

export default function Homepage(){
    const [allEventsList, setAllEventsList] = useState<Event[]>([]);

    let userData = {
        postal_code: "90210",
        event: ["concert"],
        genre: ["rap", "country"],
        sport: ["basketball"],
    }

    useEffect(()=>{
        fetchRecommendedEvents(userData).then(data=>{
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
                {<UserPreferenceForm onSubmit={displayRecommendedEvents}/>}

                {allEventsList.map((data, i)=>
                    <SingleEvent key={i} event={data}/>
                )}
               
            </main>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}


