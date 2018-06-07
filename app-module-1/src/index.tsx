import React from 'react';
import { Link, Route } from 'react-router-dom';
import './index.less';

const getPopupContainer = () => document.getElementById('app-module-1');

export class AppModule extends React.Component<any, any> {

  render() {
    const matchedPath = this.props.match.path;
    return (
      <div id="app-module-1">
        <Tooltip />
        <div>
          <Link to={`${matchedPath}/subpath1`}>SubRouteLink</Link> | 
          <Link to={`${matchedPath}/subpath2`}>SubRouteLink2</Link>
        </div>

        <Route path={`${matchedPath}/subpath1`} component={Subpath1Content} />
        <Route path={`${matchedPath}/subpath2`} component={Subpath2Content} />
      </div>
    )
  };
}

const Subpath1Content = (props) => <span>Subpath 1 content</span>;
const Subpath2Content = (props) => <span>Subpath 2 content</span>;

class Tooltip extends React.Component<any, any> {
  onFocus() {
    (this.refs.appModuleOneInputRef as any).focus();
  }

  render() {
    return (
      <div>
        <input ref="appModuleOneInputRef" type="string" />
      </div>
    )
  }
}