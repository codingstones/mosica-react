import React from 'react'
import { Segment } from 'semantic-ui-react'
import { GigRow } from './GigRow'

export const Day = (props) => {
  const {day, onClick} = props;
  return (
    <Segment.Group key={day.day}>
      <div className="day">
        {day.day}
      </div>
      {day.gigs.map((gig) =>
        <GigRow key={gig.id} gig={gig} onClick={onClick} />
      )}
    </Segment.Group>
  );
};