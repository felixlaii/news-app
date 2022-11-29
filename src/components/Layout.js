import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import { fetchSources } from '../api/newsAPI';

const NewsSection = React.lazy(() => import('./NewsSection'));
const News = React.lazy(() => import('./News'));
