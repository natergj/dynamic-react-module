import * as moduleReducer from './redux/module2';

export { default as AppModule } from './routes/Main/MainContainer';

export const reducers = [
  { name: moduleReducer.reducerName, reducer: moduleReducer.reducer },
];
