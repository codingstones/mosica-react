import React from 'react';
import { Gigs } from './Gigs';

export const GigsDay = (props) => {
  const {days, onClick} = props;
  return (
    <div>
      {days.map((day) =>
        <div className="gigs" key={day.day}>
          <div className="day">
            {day.day}
          </div>
          <Gigs gigs={day.gigs} onClick={onClick}/>
        </div>
      )}
    </div>
  );
};