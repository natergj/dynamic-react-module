// based on http://nicolasgallagher.com/redux-modules-and-code-splitting/

export class ReducerRegistry {
  _emitChange: (reducers: any) => void;
  _reducers: any;

  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      const reducers = this.getReducers();
      this._emitChange(reducers);
    }
  }

  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;
