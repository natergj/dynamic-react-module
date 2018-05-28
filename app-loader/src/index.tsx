import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import './index.less';

export function Run() {
  render(
    <HashRouter>
      <Route path="/" component={MainLayout}/>
    </HashRouter>,
    document.getElementById('application-root'),
  );
}
