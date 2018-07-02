import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Icon, Layout, Menu, Tooltip } from 'antd';
import reducerRegistry from '../redux/reducerRegistry';
const { Header, Content, Sider } = Layout;
import * as styles from './MainLayout.less';

const defaultComponent = () => (
  <div>
    <Tooltip title="MainComponent">Default Component</Tooltip>
  </div>
);

export default class MainLayout extends React.Component<any, any> {
  state = {
    collapsed: false,
    currentModule: defaultComponent,
    currentModuleBasePath: null,
    currentModuleBaseRoute: null,
    currentRoute: null,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currentRoute !== nextProps.location.pathname) {
      const baseRoute = `/${nextProps.location.pathname.split('/')[1]}`;
      const basePath = `${baseRoute}/index.js`;
      return {
        currentModuleBasePath: basePath,
        currentModuleBaseRoute: baseRoute,
        currentRoute: nextProps.location.pathname,
      };
    }
    return null;
  }

  loadModule(path) {
    const baseRoute = `/${path.split('/')[1]}`;
    if (baseRoute === '/') {
      return;
    }
    const basePath = `${baseRoute}/index.js`;
    SystemJS.import(basePath).then((module) => {
      if (module.reducers) {
        module.reducers.forEach((reducer) => {
          reducerRegistry.register(reducer.name, reducer.reducer);
        });
      }
      this.setState({
        currentModule: module.AppModule,
        currentModuleBasePath: basePath,
        currentModuleBaseRoute: baseRoute,
      });
    });
  }

  componentDidMount() {
    this.props.setUserId('10');
    this.setState(
      {
        currentRoute: this.props.location.pathname,
      },
      () => {
        this.loadModule(`${this.state.currentRoute}/index.js`);
      },
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentRoute !== this.state.currentRoute) {
      this.loadModule(`${this.state.currentRoute}/index.js`);
    }
  }

  render() {
    return (
      <div id="hot-reload-target">
        <Layout className={styles['main-layout']}>
          <Header className={styles['layout-header']}>
            <span>Logged in as user {this.props.userId}</span>
          </Header>
          <Layout>
            <Sider
              collapsible={true}
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <Menu
                theme="dark"
                selectedKeys={[this.state.currentModuleBaseRoute]}
                mode="inline"
              >
                <Menu.Item key="/app-module-1">
                  <NavLink to="/app-module-1">
                    <Icon type="desktop" />
                    <span>Web App Module 1</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="/app-module-2">
                  <NavLink to="/app-module-2">
                    <Icon type="team" />
                    <span>Web App Module 2</span>
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <Route
                path={this.state.currentModuleBaseRoute}
                component={this.state.currentModule}
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
