import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import { fetchSources } from '../api/newsAPI';

const NewsSection = React.lazy(() => import('./NewsSection'));
const News = React.lazy(() => import('./News'));

const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
        sources: [],
        homePage: true,
        query: '',
    };
}