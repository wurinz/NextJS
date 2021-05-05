import {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Router from 'next/router';
import { MainLayout } from '../components/MainLayout';
import { MyPost } from '../interfaces/interface';
import { NextPageContext } from 'next';

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {

    // const [posts, setPosts] = useState([]);

    //хук useEffect в данном случае бесполезен, так как вызывается асинхронная функция, за счет чего в response от сервера,
    //в теге pre будет пустой массив, из-за чего поисковые роботы не будут видеть контент страницы. 
    //Для лучшей SEO оптимизации, лучше использовать getInitialProps

    // useEffect(() => {
    //     async function load(){
    //         const response = await fetch('http://localhost:4200/posts')
    //         const json = await response.json();
    //         //json превращает респонс в объект
    //         //респонс возвращает промис, поэтому нам нужно подождать пока он выполнится
    //         setPosts(json)
    //     }
    //     load();
    // }, [])
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load(){
            const response = await fetch(`http://localhost:4200/posts`);
            const data = await response.json();
            setPosts(data);
        } 
        if(!serverPosts){
            load();
        }
    }, [])

    if(!posts){
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout title="Posts page">            
            <h1>Posts Page</h1>
            <button onClick={() => {
                Router.push('/')
            }}>Home</button>
            {/* <pre>
                {JSON.stringify(posts, null, 2)}
            </pre> */}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {/* динамично обновляем страницу */}
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )   
}

//определяем статический метод, который будет выполнятся на сревере 
//делаем запрос, парсим запрос
//возвращаем объект, который будем обрабатывать на фронт энде (комбинируем фронтенд и бекенд)
//потом мы можем получить этот объект через пропсы
//У этого объекта ест специальный контекст
Posts.getInitialProps = async (ctx: NextPageContext) => {
    if(!ctx.req){
        return {posts: null}
    }
    const response = await fetch('http://localhost:4200/posts');
    const posts: MyPost[] = await response.json();
    return {
        posts
    }
}
