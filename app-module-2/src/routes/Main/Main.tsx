import * as React from 'react';
import { Icon, Tooltip } from 'antd';
import * as styles from './Main.less';

export default class Main extends React.Component<any, any> {
  componentDidMount() {
    if (this.props.moduleState === 'loaded') {
      this.props.setModuleState('loaded again');
    } else {
      this.props.setModuleState('loaded');
    }
  }

  render() {
    return (
      <div className={styles['app-module-2']}>
        <Tooltip title="Smily Icon">
          <Icon type="smile" />
        </Tooltip>
        <span>
          userId from loader: {this.props.userId}<br />
          moduleState from app: {this.props.moduleState}<br />
          Hello World from App Module 2 using a different version of the ant
          design library than what is bundled with the app-loader!
        </span>
      </div>
    );
  }
}
