//глобальные стили

//Функция принимает в себя два параметра: 
//1. Компонент - та страница, которую мы отображаем в зависимости от URL-адреса
//2. Пропсы

//также можно добавлять стили файлом, вместо инлайновых
import NextNprogress from 'nextjs-progressbar';
import '../styles/main.css';


export default function MyApp({Component, pageProps}) {
    return(
        <>
            {/* Тулза для вывода индикатора загрузки
                npm i nextjs-progressbar
            */}
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={420}
                height="5"
            />
            {/* передаём в компонент пропсы
            c сервера в том числе */}
            <Component {...pageProps} /> 



            {/* стили можно добавлять инлайново */}
            {/* <style jsx global>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }

            `}</style> */}
        </>
    )
}