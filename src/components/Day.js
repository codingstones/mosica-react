import React from 'react';
import { Gig } from './Gig';

export const Day = (props) => {
  const {day, onClick} = props;
  return (
    <div className="gigs" key={day.day}>
      <div className="day">
        {day.day}
      </div>
      {day.gigs.map((gig) =>
        <Gig key={gig.id} gig={gig} onClick={onClick} />
      )}
    </div>
  );
};