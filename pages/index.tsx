//компонент для динамического рендера страницы, без перезагрузки
import Link from 'next/link'; //для внутрисайтовой навигации, внутри Link должен быть тег а
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';
import { useEffect, useState } from 'react';

export default function Index() {
    const [counter, setCounter] = useState(0);
    //вместо пустого объект <></> используем MainLayout чтоб оберунть страницу в макет (Layout)
    //передаём параметр title тегу MainLayout, чтобы отрисовывать его динамично
    return <MainLayout title={'Home Page'}> 
        <h1>Hello Next.js</h1>
            <p><Link href={"/about"}><a>About</a></Link></p>
            <p><Link href="/posts"><a>Posts</a></Link></p>
            <p>Lorem ipsum bla bla</p>
            <div>
                {counter}
                <br />
                <button onClick={() => {
                    setCounter(prev => prev + 1)
                }}>Increase</button>
                <button onClick={() => {
                    setCounter(prev => prev - 1)
                }}
                >Decrease</button>
            </div>
        </MainLayout>
}

// /posts 
// /posts/42