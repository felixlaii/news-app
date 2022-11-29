import React from 'react'
import 'antd/dist/antd.css';
import NewsSection from './NewsSection';

const News = () => {
    return (
        <div>
            <NewsSection category='top-headlines' query='country=in' topHeading='Top News' linkText='See More Headlines' results='15' />
        </div>
    )
}

export default News;