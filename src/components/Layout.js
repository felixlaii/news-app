import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { fetchSources } from "../api/newsAPI";
import Menu from "rc-menu";

const NewsSection = React.lazy(() => import("./NewsSection"));
const News = React.lazy(() => import("./News"));

const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
    sources: [],
    homePage: true,
    query: "",
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  async componentDidMount() {
    const sources = await fetchSources();

    this.setState({ sources });
  }

  loadNews(query) {
    this.setState({
      homePage: false,
      query: query,
    });
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={!this.state.collapsed}>
          <div className="logo">
            <h2>{!this.state.collapsed ? "N" : "Newsio"}</h2>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["-1"]}>
            <Menu.Item
              nClick={() => this.setState({ homePage: true })}
              key="-1"
              icon={<StockOutlined />}
            >
              Top News
            </Menu.Item>
            {this.state.sources.map((source) => (
              <Menu.Item
                onClick={() => this.loadNews(source.name)}
                key={source.name}
              >
                {source.name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              !this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content>
              
          </Content>
        </Layout>
      </Layout>
    );
  }
}
