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

    const [showPrefForm, setShowPrefForm] = useState(false);
    
    return(
        <div>
            <main>

            { showPrefForm ?
            <div>
            <UserPreferenceForm onSubmit={displayRecommendedEvents}/>
            <button onClick= {() => setShowPrefForm(false)}>Nevermind!</button>
            </div>
             :
            <button className = "ShowForm" onClick = {() => setShowPrefForm(true)}>Take our Quiz to see personalized events!</button>}


               

                {allEventsList.map((data, i)=>
                    <div>
                    <SingleEvent key={i} event={data}/>,
                    </div>
                )}
               
            </main>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}


