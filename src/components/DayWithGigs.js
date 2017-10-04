import React from 'react';
import { GigList } from './GigList';

export const DayWithGigs = (props) => {
  const {days, onClick} = props;
  return (
    <div>
      {days.map((day) =>
        <div className="gigs" key={day.day}>
          <div className="day">
            {day.day}
          </div>
          <GigList gigs={day.gigs} onClick={onClick}/>
        </div>
      )}
    </div>
  );
};