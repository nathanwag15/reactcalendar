import React from 'react';
import DaysWrapper from "./daysWrapper";
import calendarBoxesWrapper from './calendarBoxesWrapper';

export default function contentWrapper(props) {
    return (
        <div className="content-wrapper">
            <DaysWrapper />
            <calendarBoxesWrapper daysInMonth={props.daysInMonth} />
        </div>
    )
}