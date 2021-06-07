import React, { useState, useEffect } from 'react';
import { EventCard } from "../EventD/EventD";

import 'whatwg-fetch';



const EventD = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events/all").then(res => {
            console.log(res)
            return res.json()
        }).then(results => {
            console.log(results)
            setEvents(results)
        }).catch(err => setEvents(err))
    }, [])

    return (<div>
        <h2>Upcoming Events</h2>
        {events.length > 0 ? events.map((event, index) => <EventCard key={index} {...event} />) : ""}
    </div>
    )
};


export default EventD;