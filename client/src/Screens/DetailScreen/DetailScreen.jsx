import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
// import createError from 'http-errors'
import Layout from '../../Components/Layout/Layout'
import { getArticle } from '../../services/articles'

const DetailScreen = () => {
    //we can't return any data without it being in state first
    const [article, setArticle] = useState('')


    //we need useParams for the individual id of the articles
    const { id } = useParams()
    //need to creat a useEffect function that will contain our api call
    //the api call will fetch the article information from the api 
    useEffect(() => {
        const fetchArticle = async () => {
            const article = await getArticle(id)
            setArticle(article)
        }
        fetchArticle()
    }, [id])
    return (
        <Layout>
            <div>
                {article}
            </div>
        </Layout>
    );
};

export default DetailScreen;