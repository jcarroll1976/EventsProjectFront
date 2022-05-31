import { getFips } from "crypto";
import { useEffect, useState, useContext } from "react";
import { deleteUserFavorite, getUserFavorite } from "../service/EventApiService";
import SingleEvent from './SingleEvent';
import AuthContext from '../context/AuthContext';
import { UserFavorites } from "../models/eventModels";




export default function FavoriteEvents() {
    const [favoriteEvents, setFavoriteEvents] = useState<UserFavorites[]>([])
    const {user} = useContext(AuthContext);


    /*useEffect(()=>{
        getUserFavorite(user!.uid).then(data=>{
            setFavoriteEvents(data);
        })
    }, []);

    function removeFavorite(removedFavorite: UserFavorites): void{
       
        deleteUserFavorite();
    };*/


    return (
        <div className="FavoritedEvents">
            <h1>Favorited Events</h1>
            {favoriteEvents.map((event,i) =>
                <div>
                <SingleEvent favoriteEvent={event} key={i}/>
                    <button /*onClick={()=>{removeFavorite(event)}}*/>Remove from Favorites</button>
                </div>
            )}
        </div>
    )
}