import React from 'react';

export const GigDetail = ((props) => {
  const {match} = props;
  return (
    <div className="row">
      Detalle del GIG con ID {parseInt(match.params.id, 10)}
    </div>
  );
});