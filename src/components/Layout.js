import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { fetchSources } from "../api/newsAPI";

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
        </Sider>
      </Layout>
    );
  }
}
