const initialState = {
  moduleState: 'loading',
};

export const reducerName = '@@APP_MODULE_2/module2';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${reducerName}/SET_MODULE_STATE`:
      return {
        ...state,
        moduleState: action.payload.state,
      };
    default:
      return state;
  }
};

export const getModuleState = (state) => {
  return state[reducerName].moduleState;
};

export const setModuleState = (state: string) => {
  return {
    type: `${reducerName}/SET_MODULE_STATE`,
    payload: { state },
  };
};
