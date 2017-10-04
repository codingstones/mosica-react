import React from 'react';
import { Gigs } from './Gigs';

export const GigsDay = (props) => {
  const {days} = props;
  return (
    <div>
      {days.map((day) =>
        <div className="gigs" key={day.day}>
          <a className="day" href={day} target="_blank">
            {day.day}
          </a>
          <Gigs gigs={day.gigs}/>
        </div>
      )}
    </div>
  );
};