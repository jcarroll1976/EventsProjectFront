import { useEffect, useState, useContext } from "react";
import { ApiResponse, Event, UserFavorites, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents, getUserFavorite, getUserPref, postUserFavorite, postUserPref, putUserFavorite, putUserPref } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";
import {signOut} from '../firebaseconfig'
import { User } from "firebase/auth";
import AuthContext from '../context/AuthContext';
import "./Homepage.css";




export default function Homepage(){
    const [allEventsList, setAllEventsList] = useState<Event[]>([]);
    const {user} = useContext(AuthContext);

   /*
   Hard coded data to test the API call 
   let userData = {
        postal_code: "90210",
        event: ["concert"],
        genre: ["rap", "country"],
        sport: ["basketball"],
    }*/

    useEffect(()=>{
        getUserPref(user!.uid).then(data=>{
            console.log(`User id: ${user!.uid}`);
            console.log(data);
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
            getUserPref(user!.uid).then(data=>{
                //if data in userPref DB then PUT call
                if(data){
                    putUserPref(user!.uid, userPref)
                    .then(updatedPref=>fetchRecommendedEvents(updatedPref)
                    .then(data=>{
                        setAllEventsList(data)
                    })
                    )
                }
                //if no data in userPref DB then POST call
                else{
                    postUserPref(userPref)
                    .then(newPref=>fetchRecommendedEvents(newPref)
                    .then(data=>{
                        setAllEventsList(data)
                    }))
                }
            });
    };

    //error when return type is void.. check to see if it is okay to do "any" or do onClick={()=>}
    function addSelectedFavorite(favoriteEvent: Event): void{
        console.log(favoriteEvent);
        //create userFavorite object
        let favorite = {
            id: user?.uid,
            favoriteEvents: [favoriteEvent]
        }
       getUserFavorite(user!.uid).then(data=>{
        console.log(data);
        //if user.uid exists in favorite db then use put call
        if(data){
            putUserFavorite(user!.uid, favoriteEvent);
        //if user.uid doesn't exisit in favorite db then use push call 
        }else{
            postUserFavorite(favorite);
        }
       })
       
    };

    const [showPrefForm, setShowPrefForm] = useState(false);


    
    return(
        <div>
             { showPrefForm ?
            <div className="maincontent">
            <UserPreferenceForm onSubmit={displayRecommendedEvents}/>
            <button onClick= {() => setShowPrefForm(false)}>Nevermind!</button>
            </div>
             :
            <button className = "ShowForm" onClick = {() => setShowPrefForm(true)}>Take our Quiz to see personalized events!</button>}

            <main className="Homepage_EventDisplay">
                { allEventsList.length === 0 ? 
                <div>
                <p>Oh no! There are no events that fit your most recent parameters.</p>
                <p> Try retaking the quiz and widening your preferences!</p>
                </div> :
                <div>{allEventsList.map((data, i)=>
                    <div className="Homepage_SingleEvent">
                    <SingleEvent key={i} event={data}/>,
                    <button onClick={()=>addSelectedFavorite(data)}>Add to favorites</button>
                    </div>
                //Add remove from favorites button if add to favorites is clicked
                )}</div>
                }
            </main>
        </div>
    )
}


