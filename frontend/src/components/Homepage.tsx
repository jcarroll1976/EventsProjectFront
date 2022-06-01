import { useEffect, useState, useContext } from "react";
import { ApiResponse, Event, UserFavorites, UserPreference } from "../models/eventModels";
import { fetchAllEvents, fetchRecommendedEvents, getUserFavorite, getUserPref, postUserFavorite, postUserPref, putUserFavorite } from "../service/EventApiService";
import SingleEvent from "./SingleEvent";
import UserPreferenceForm from "./UserPreferenceForm";
import {signOut} from '../firebaseconfig'
import { User } from "firebase/auth";
import AuthContext from '../context/AuthContext';



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
        postUserPref(userPref)
        .then(newUserPref=>fetchRecommendedEvents(newUserPref).then(data =>{
            setAllEventsList(data)
        }));
        
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
                    <button onClick={()=>addSelectedFavorite(data)}>Add to favorites</button>
                    </div>
                //Add remove from favorites button if add to favorites is clicked
                )}
               
            </main>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}


