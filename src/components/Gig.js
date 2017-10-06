import React from 'react';

export const Gig = (props) => {
  const {gig, onClick} = props;

  return (
    <div className="row" key={gig.id}
         onClick={onClick(gig.id)}>
         {gig.title}-{gig.place}
    </div>
  );
};