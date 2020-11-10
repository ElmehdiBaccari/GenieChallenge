import React from 'react';
import  axios  from  'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';
import  {   GenieContext }  from  '../context/genie-context';
import  { flashErrorMessage }  from  './flash-message';

const  { useContext }  =  React;

const GenieCard = ({ genie }) => {
  
  const [state, dispatch] = useContext(GenieContext);

  const deleteGenie = async id => {
    try {
      const response = await axios.delete(
        `http://localhost:3030/genie/${id}`,
      );
      dispatch({
        type: 'DELETE_GENIE',
        payload: response.data,
      });
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
        <Icon name="map marker" /> {genie.name} 
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="archive" /> {genie.description}
          </p>
          <p>
            <Icon name="linkify" /> {genie.links}
          </p>
          <p>
            <Icon name="paperclip" /> {genie.authordetails}
          </p>
          <p>
            <Icon name="pin" /> {genie.number}
          </p>
          <p>
            <Icon name="calendar alternate" /> {genie.year}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            as={Link}
            to={`/genie/edit/${genie._id}`}
          >
            Edit
          </Button>
          <Button basic color="red" onClick={() => deleteGenie(genie._id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default GenieCard;
