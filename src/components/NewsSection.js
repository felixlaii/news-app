import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider, Card } from 'antd';
import { fetchNews } from '../api/newsAPI';
import ReactHtmlParser from 'react-html-parser';

const NewsSection = (request) => {
    const [newsSection, setNewsSection] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setNewsSection(await fetchNews(request));
        };
        fetchAPI();
    }, [request]);

    return (
        <div>
            <Row>
                <Col>
                <h1 style={{ fontSize: '30px' }}>{request.topHeading}</h1>
                </Col>
            </Row>
            <Row>
                {newsSection.length > 1 ?
                    newsSection.map((article, key) => article.urlToImage === "" || article.urlToImage === null ? null :)    
            }
            </Row>
        </div>
    )
}

export default NewsSection;