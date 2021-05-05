//[id] в названии файла указывает на динамическое изменение ссылки страницы

import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { MainLayout } from '../../components/MainLayout';
import Router from 'next/router';
import { NextPageContext } from 'next';
import { MyPost } from '../../interfaces/interface';

interface PostPageProps {
    post: MyPost
}

export default function Post(
    {post: serverPost}: PostPageProps
){
    const [post, setPost] = useState(serverPost);
    const router = useRouter()
    useEffect(() => {
        async function load(){
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json();
            setPost(data)
        }
        if(!serverPost){
            load();
        }
    }, []);

    if(!post){
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }

    return <MainLayout title='Blog Page'>
        <button onClick={() =>{
            Router.push('/posts')
        }}>Back</button>
        <h1>Post: {post.id}</h1>
        <h2><br/>{post.title}</h2><hr/>
        <p>{post.body}</p>
        </MainLayout>
}


//расширяем встроенный NextPageContext добавление поля query (мы его создали сами)
interface PostNextPageContext extends NextPageContext{
    query: {
        id: string
    }
}

//выполняется на сервере
Post.getInitialProps = async (ctx: NextPageContext) => {
    //так как getInitialProps вызывается на фронте, объект req = undefined, 
    //и если нет req, вернем post: null чтоб отобразить загрузку (см выше)
    if(!ctx.req){
        return {post: null}
    }
    let response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    let post: MyPost = await response.json();
    return {
        post
    }
}