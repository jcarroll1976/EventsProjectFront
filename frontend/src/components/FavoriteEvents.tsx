import { useState } from "react";
import SingleEvent from './SingleEvent'




export default function FavoriteEvents() {
    const [events,setEvents] = useState<Event[]>([])

    function handleAddEvent(event:Event) {
        setEvents(prev => [...prev,event])
    }

    return (
        <div className="FavoritedEvents">
            <h1>Favorited Events</h1>
            <div>
                {events.map((event,i) =>
                    <SingleEvent event = {event} key={i}/>)}
            </div>
        </div>
    )
}