import React from 'react';
import { Card } from 'semantic-ui-react';
import  GenieCard from './genie-card';

const GenieList = ({ genies }) => {
  const cards = () => {
    return genies.map(genie => {
      return <GenieCard key={genie._id} genie={genie} />;
    });
  };

  return <Card.Group>{cards()}</Card.Group>;
}

export default GenieList;
