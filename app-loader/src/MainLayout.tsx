import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Button, Icon, Layout, Menu, Tooltip } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const defaultComponent = () => (
  <div>
    <Tooltip title="MainComponent">Default Component</Tooltip>
  </div>
)

export default class MainLayout extends React.Component<any, any> {
  state = {
    collapsed: false,
    currentRoute: null,
    currentModuleBaseRoute: null,
    currentModuleBasePath: null,
    currentModule: defaultComponent,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currentRoute !== nextProps.location.pathname) {
      const baseRoute = `/${nextProps.location.pathname.split('/')[1]}`;
      const basePath = `${baseRoute}/index.js`;
      return {
        currentRoute: nextProps.location.pathname,
        currentModuleBaseRoute: baseRoute,
        currentModuleBasePath: basePath,
      }
    }
    return null;
  }

  loadModule(path) {
    const baseRoute = `/${path.split('/')[1]}`;
    if (baseRoute === '/') {
      return;
    }
    const basePath = `${baseRoute}/index.js`;
    SystemJS.import(basePath)
    .then((module) => {
      this.setState({
        currentModule: module.AppModule,
        currentModuleBaseRoute: baseRoute,
        currentModuleBasePath: basePath,
      });
    });
  }

  componentDidMount() {
    this.setState({
      currentRoute: this.props.location.pathname,
    }, () => {
      this.loadModule(`${this.state.currentRoute}/index.js`);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentRoute !== this.state.currentRoute) {
      this.loadModule(`${this.state.currentRoute}/index.js`);
    }
  }

  render() {
    return (
      <div id="hot-reload-target">
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <span>Header Text</span>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark" selectedKeys={[this.state.currentRoute]} mode="inline">
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
            <Route path={this.state.currentModuleBaseRoute} component={this.state.currentModule } />
          </Content>
        </Layout>
      </Layout>
      </div>
    )
  }
}
