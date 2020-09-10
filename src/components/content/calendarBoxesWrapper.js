import React from "react";

import CalendarBox from "./calendarBox";




export default function calendarBoxesWrapper(props) {
    const renderBoxes = () => {
        const boxesContainer = []
        let date = 1

        for (let i=1; i<=props.daysInMonth; i++) {
            boxesContainer.push(
                <CalendarBox key={i} date={i}/>
            )
        }
    }

    return (
        <div className="calendar-boxes-wrapper">
            {renderBoxes()}
        </div>
    )
}