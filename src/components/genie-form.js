import React, { useContext, useState } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { GenieContext } from '../context/genie-context';
import { flashErrorMessage } from './flash-message';

const GenieForm = ({genie}) => {
  const [state, dispatch] = useContext(GenieContext);
  const [redirect, setRedirect] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: genie,
  });

  const createGenie = async data => {
    try {
      const response = await axios.post('http://localhost:3030/genie', data);
      dispatch({
        type: 'CREATE_GENIE',
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const updateGenie = async data => {
    try {
      const response = await axios.patch(
        `http://localhost:3030/genie/${genie._id}`,
        data,
      );
      dispatch({
        type: 'UPDATE_GENIE',
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const onSubmit = async data => {
    if (genie._id) {
      await updateGenie(data);
    } else {
      await createGenie(data);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h1 style={{ marginTop: "1em" }}>
          {genie._id ? "Edit Genie" : "Add Research Paper"}
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          
            <Form.Field className={classnames({ error: errors.name })}>
              <label htmlFor="name">
                 Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
             
            </Form.Field>
            <Form.Field className={classnames({ error: errors.description })}>
              <label htmlFor="description">
                Description
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.links })}>
              <label htmlFor="links">
                Links
                <input
                  id="links"
                  name="links"
                  type="text"
                  placeholder="links"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.authordetails })}>
              <label htmlFor="authordetails">
              Author Details
                <input
                  id="authordetails"
                  name="authordetails"
                  type="text"
                  placeholder="authordetails"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.number })}>
              <label htmlFor="number">
              Number of citation and references
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder="number"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.year })}>
              <label htmlFor="year">
             Published Year 
                <input
                  id="year"
                  name="year"
                  type="text"
                  placeholder="year"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
          
         
          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default GenieForm;
