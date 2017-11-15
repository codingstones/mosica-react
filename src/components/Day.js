import React from 'react';
import { GigRow } from './GigRow';

export const Day = (props) => {
  const {day, onClick} = props;
  return (
    <div className="gigs" key={day.day}>
      <div className="day">
        {day.day}
      </div>
      {day.gigs.map((gig) =>
        <GigRow key={gig.id} gig={gig} onClick={onClick} />
      )}
    </div>
  );
};