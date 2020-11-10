import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GenieForm from '../components/genie-form';
import { flashErrorMessage } from '../components/flash-message';
import { GenieContext } from '../context/genie-context';

const GenieFormPage = ({ match }) => {
  const [state, dispatch] = useContext(GenieContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; // Grab URL _id

    if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/genie/${_id}`,
          );
          dispatch({
            type: 'FETCH_GENIE',
            payload: response.data,
          });
          setLoading(false);
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <GenieForm genie={state.genie} />
    </div>
  );
}

export default GenieFormPage;
