import reducerRegistry from './reducerRegistry';

const initialState = {
  userId: null,
};

export const reducerName = '@@APP_LOADER/USER';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export const getUserId = (state) => {
  return state[reducerName].userId;
};

export const setUserId = (userId: string) => {
  return { type: 'SET_USER', payload: { userId } };
};

reducerRegistry.register(reducerName, reducer);
