import React from 'react';

export const Gigs = (props) => {
  const {gigs, onClick} = props;

  return (
    <div>
      {gigs.map((gig) =>
        <div className="row" key={gig.id}
             onClick={onClick(gig.id)}>
             {gig.title}-{gig.place}
        </div>
      )}
    </div>
  );
};