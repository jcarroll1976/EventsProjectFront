import { useEffect, useState, useContext } from "react";
import { ApiResponse, Event, UserFavorites, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents, getUserFavorite, getUserPref, postUserFavorite, postUserPref } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";
import {signOut} from '../firebaseconfig'
import { User } from "firebase/auth";
import AuthContext from '../context/AuthContext';



export default function Homepage(){
    const [allEventsList, setAllEventsList] = useState<Event[]>([]);
    const {user} = useContext(AuthContext)

    let userData = {
        postal_code: "90210",
        event: ["concert"],
        genre: ["rap", "country"],
        sport: ["basketball"],
    }

    useEffect(()=>{
        getUserPref(user!.uid).then(data=>{
            if(data){
                fetchRecommendedEvents(data).then(recEvent=>{
                    setAllEventsList(recEvent);
                })
            }else{
                fetchAllEvents().then(allEvents=>{
                    setAllEventsList(allEvents);
                })
            }
        })
    }, []);

    
    function displayRecommendedEvents(userPref: UserPreference): void{
        userPref.id = user?.uid;
        postUserPref(userPref);
        fetchRecommendedEvents(userPref).then(data =>{
            setAllEventsList(data);
        });
    };

    /*function addSelectedFavorite(event: Event): void{
       //add logic
       getUserFavorite(user!.id).then
       userFavorite.id = user?.uid;
       postUserFavorite(userFavorite);
    };*/

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
                    <button /*onClick={addSelectedFavorite(data)}*/>Add to favorites</button>
                    </div>
                //Add remove from favorites button if add to favorites is clicked
                )}
               
            </main>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}


