import React from 'react';

export const Gigs = (props) => {
  const {gigs} = props;

  return gigs.map((gig) =>
    <div className="row" key={gig.id}>{gig.title}-{gig.place}</div>
  );
};