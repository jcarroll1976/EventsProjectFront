import { getFips } from "crypto";
import { useEffect, useState, useContext } from "react";
import {getUserFavorite, deleteUserFavorite } from "../service/EventApiService";
import SingleEvent from './SingleEvent';
import AuthContext from '../context/AuthContext';
import { Event, UserFavorites } from "../models/eventModels";
import { Link } from "react-router-dom";
import "./FavoriteEvents.css";




export default function FavoriteEvents() {
    const [favoriteEvents, setFavoriteEvents] = useState<UserFavorites>()
    const {user} = useContext(AuthContext);


    useEffect(()=>{
        getUserFavorite(user!.uid).then(data=>{
            console.log(data);
            setFavoriteEvents(data);
        })
    }, []);

    function removeFavorite(removedFavorite: Event): void{
        deleteUserFavorite(user!.uid, removedFavorite).then(()=>{
            getUserFavorite(user!.uid).then(data=>{
                setFavoriteEvents(data);
            })
        });
    };


    return (
        <div>
            <h1>Favorited Events</h1>
            <div className="FavoritedEvents_EventsDisplay">
                {favoriteEvents?.favoriteEvents.map((event,i) =>
                    <div className="FavoritedEvents_SingleEvent"> 
                        <SingleEvent event={event} key={i}/>
                        <button className="FavoriteEvents_RemoveBtn" onClick={()=>{removeFavorite(event)}}>Remove from Favorites</button>
                    </div>
                )}
            </div>

            <Link to={`/Login`}>
                <button>Back to the main menu</button>
            </Link>
        </div>
    )
}