import { useEffect, useState } from "react";
import { ApiResponse, Event, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";
import { Link } from "react-router-dom";


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
                    <div>
                    <SingleEvent key={i} event={data}/>,
                    <Link to="/details" state={{event: data}}>Click here for more details!</Link>
                    </div>
                )}
               
            </main>
        </div>
    )
}