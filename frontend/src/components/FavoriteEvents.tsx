import { useState } from "react";
import SingleEvent from './SingleEvent'




export default function FavoriteEvents() {
    const [favoriteEvents, setFavoriteEvents] = useState<Event[]>([])

    function handleAddFavorite(event:Event) {
        setFavoriteEvents(prev => [...prev,event])
    }

    return (
        <div className="FavoritedEvents">
            <h1>Favorited Events</h1>
            {favoriteEvents.map((event,i) =>
                <div>
                   <SingleEvent event = {event} key={i}/>
                    <button>Remove from Favorites</button>
                </div>
                )}
            
        </div>
    )
}