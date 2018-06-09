import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon, Tooltip } from 'antd';
import './index.less';

export class AppModule extends React.Component<any, any> {
  render() {
    return (
      <div id="app-module-2">
        <Tooltip title="Smily Icon"><Icon type="smile" /></Tooltip> Hello World from App Module 2!
      </div>
    )
  };
}
