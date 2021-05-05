import React, { useEffect, useState } from 'react';
import Router from 'next/router';

import Head from 'next/head'; //доступ к тегу head index.html, ведь у нас нет файла index.html
import { MainLayout } from '../../components/MainLayout';
import { NextPageContext } from 'next';

interface Title {
    title: string
}

export default function About({
    title
}: Title) {

    const linkClickHandler = () => {
        Router.push('/');
    }
    
    // useEffect(() => {
    //     async function load(){
    //         const response = await fetch(`http://localhost:4200/about`);
    //         const name = await response.json();
    //     }
    //     if(!serverName){
    //         load();
    //     }
    // }, []);

    // if(!name){
    //     return <MainLayout>
    //         <p>Loading ...</p>
    //     </MainLayout>
    // }

    return (
        <MainLayout title="About Page">
            <h1>About Page</h1>
            {/* Objects are not valid as a React child */}
            {/* <h2>Name: {title}</h2> */}
            <h2>Name: {title}</h2>


            <button onClick={() => {
                Router.push('/posts') //перемещаемся на страницу posts с помощью метода push обеъкта Router
            }}>Posts</button>
            <button onClick={() => {
                Router.push('/about/author');
            }}>Author</button>
            <button onClick={linkClickHandler}>Home Page</button>

        </MainLayout>
    )
}

About.getInitialProps = async (ctx: NextPageContext) => {
    const response = await fetch(`http://localhost:4200/about`);
    const data = await response.json();

    return {
        title: data.name
    }
}