import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from 'antd';
import './index.less';

export class AppModule extends React.Component<any, any> {
  render() {
    return (
      <div id="app-module-2">
        <Icon type="smile" /> Hello World from App Module 2!
      </div>
    )
  };
}

function myRender() {
  ReactDOM.render(<div/>, document.getElementById(''))
}