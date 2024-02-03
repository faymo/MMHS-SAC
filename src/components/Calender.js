import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/Calender.css';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
// Format new events like this:
// {
//     title: "",
//     allDay: true/false,
//     start: new Date(year, month, day),
//     end: new Date(year, month, day),
// },
    {
        title: "Sacentine",
        allDay: true,
        start: new Date(2024, 1, 14),
        end: new Date(2024, 1, 14),
    },

];

function Calender() {
    const [allEvents] = useState(events);

    return (
        <div class="calender">
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={
                { 
                height: 700, 
                margin: "60px",
                 
                }} />
        </div>
    );
}

export default Calender;