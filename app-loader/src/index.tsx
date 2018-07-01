// import less files first in order for subsequent imports to take precedence
// tslint:disable-next-line:no-submodule-imports
import 'antd/dist/antd.less';
import './antStyleOverrides.less';

import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import MainLayout from './MainLayout';

export const Run = () => {
  render(
    <HashRouter>
      <Route path="/" component={MainLayout}/>
    </HashRouter>,
    document.getElementById('application-root'),
  );
};
