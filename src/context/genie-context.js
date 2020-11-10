import React, { useReducer, createContext } from 'react';

export const GenieContext = createContext();

const initialState = {
  genies: [],
  genie: {}, 
  message: {}, 
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_GENIE': {
      return {
        ...state,
        genies: [...state.genies, action.payload],
        message: {
          type: 'success',
          title: 'Success',
          content: 'New Research Paper created!',
        },
      };
    }
    case 'FETCH_GENIES': {
      return {
        ...state,
        genies: action.payload,
      };
    }
    case 'FETCH_GENIE': {
      return {
        ...state,
        genie: action.payload,
      };
    }
    case 'UPDATE_GENIE': {
      const genie = action.payload;
      return {
        ...state,
        genies: state.genies.map(item =>
          item._id === genie._id ? genie : item,
        ),
        message: {
          type: 'success',
          title: 'Update Successful',
          content: `Paper "${genie.name}" has been updated!`,
        },
      };
    }
    case 'DELETE_GENIE': {
      const { _id, name } = action.payload;
      return {
        ...state,
        genies: state.genies.filter(item => item._id !== _id),
        message: {
          type: 'success',
          title: 'Delete Successful',
          content: `Genie "${name}" has been deleted!`,
        },
      };
    }
    case 'FLASH_MESSAGE': {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      throw new Error();
  }
}

export const GenieContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <GenieContext.Provider value={[state, dispatch]}>
      {children}
    </GenieContext.Provider>
  );
};
