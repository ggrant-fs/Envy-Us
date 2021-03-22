import './Article.css'
import React from 'react';
import { useEffect, useState } from 'react'
import { getArticles } from '../../services/articles'


const Article = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const api = async () => {
            const response = await getArticles()
            setArticles(response)
        }
        api()
    }, [])

    const fashionArticle = articles.map((article) => (
        <div key={article._id}>
            <img src={article.imgUrl} />
            <h2>{article.category}</h2>
            <p>{article.caption}</p>
            <hr />
            <p>by {article.author}</p>
        </div>
    ))
    return (
        <React.Fragment>
            <div className='fashionArticle'>
                {fashionArticle}
            </div>

        </React.Fragment>
    );
};

export default Article;