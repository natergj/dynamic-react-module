import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import { Icon } from 'antd';
import './index.less';

export class AppModule extends React.Component<any, any> {

  render() {
    const matchedPath = this.props.match.path;
    return (
      <div id="app-module-1">
        Hello World!
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