import * as React from 'react';
import { Icon, Tooltip } from 'antd';
import * as styles from './index.less';

export class AppModule extends React.Component<any, any> {
  render() {
    return (
      <div className={styles['app-module-2']}>
        <Tooltip title="Smily Icon">
          <Icon type="smile" />
        </Tooltip>
        <span>
          Hello World from App Module 2 using a different version
          of the ant design library than what is bundled with the app-loader!
        </span>
      </div>
    );
  }
}
