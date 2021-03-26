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

    const fashionArray = articles.map((article) => (
        <div key={article._id}>
            <img src={article.imgUrl} />
            <h2>{article.category}</h2>
            <p>{article.caption}</p>
            <hr />
            <p>by {article.author}</p>
        </div>
    ))

    const fashionArray2 = articles.map((article) => (
        <div key={article._id}>
            <img src={article.imgUrl} />
            <h2>{article.category}</h2>
            <p>{article.caption}</p>
            <hr />
            <p>by {article.author}</p>
        </div>
    ))

    const rowOne = fashionArray.slice(0, 4)
    const rowTwo = fashionArray2.slice(5, 9)

    return (
        <React.Fragment>
            <div className='fashionArticle'>
                {rowOne}
            </div>

            <div className='fashionArticle'>
                {rowTwo}
            </div>
        </React.Fragment>
    );
};

export default Article;