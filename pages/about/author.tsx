import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function Index() {
    return (
        <MainLayout title="Author Page">
            <h1>Author Page</h1>
            <button onClick={() => {
                Router.push('/')
            }}>Home</button>
        </MainLayout>
    )
}