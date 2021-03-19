import React from 'react';
import { useParams } from 'react-router';
import Layout from '../../Components/Layout/Layout'
import { useState, useEffect } from 'react'
import { getArticle } from '../../services/articles'

const DetailScreen = () => {
    //we can't return any data without it being in state first
    const [article, setArticle] = useState('')
    console.log(article)

    //we need useParams for the individual id of the articles
    const { id } = useParams
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

        </Layout>
    );
};

export default DetailScreen;