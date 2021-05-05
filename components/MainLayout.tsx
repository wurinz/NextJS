import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = 'Next App'}) {
    return(
        <>
            <Head>
                <meta name="keywords" content='next,javascript,nextjs, react'/>
                <meta name="description" content="this is test application using next.js"/>
                <meta charSet="utf-8"/>
                <title>{title} | Practice</title>  
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {/* То, что будет отображаться в теге main */}
                    {children}
            </main>
            
            {/* чтоб сделать стили глобальными, 
            <style jsx global>{`
            */}
            <style jsx>{`
            
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: #538170;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 22px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem
                }

            `}</style>
        </>
    )
}