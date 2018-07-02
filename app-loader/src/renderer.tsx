// import less files first in order for subsequent imports to take precedence
// tslint:disable-next-line:no-submodule-imports
import 'antd/dist/antd.less';
import './antStyleOverrides.less';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import MainLayout from './MainLayout/MainLayoutContainer';

import store from './redux/configureStore';

export const Run = () => {
  render(
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={MainLayout} />
      </HashRouter>
    </Provider>,
    document.getElementById('application-root'),
  );
};
