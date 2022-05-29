import { useEffect, useState, useContext } from "react";
import { ApiResponse, Event, UserFavorites, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";
import {signOut} from '../firebaseconfig'
import { User } from "firebase/auth";

interface Props {
    onSubmit:(UserFavorites: UserFavorites) => void;
} 

export default function Homepage({onSubmit}: Props){
    const [allEventsList, setAllEventsList] = useState<Event[]>([]);
    const [favoriteEvents, setFavoriteEvents] = useState<UserFavorites[]>([]);

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

    function selectedFavorite(userFavorite: UserFavorites): void{
        setFavoriteEvents(userFavorite);

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
                    <button onClick={onSubmit(data)} >Add to favorites</button>
                    </div>
                )}
               
            </main>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}


