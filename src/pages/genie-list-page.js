import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import GenieList from '../components/genie-list';
import { GenieContext } from '../context/genie-context';
import { FlashMessage, flashErrorMessage } from '../components/flash-message';

const GenieListPage = () => {
  const [state, dispatch] = useContext(GenieContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/genie');
        dispatch({
          type: 'FETCH_GENIES',
          payload: response.data.data || response.data, 
        });
      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Genies Research Paper Center</h1>
      {state.message.content && <FlashMessage message={state.message} />}
      <GenieList genies={state.genies} />
    </div>
  );
}

export default GenieListPage;
