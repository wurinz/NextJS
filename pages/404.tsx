import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

//импортируем модульный класс
import classes from "../styles/error.module.css";

export default function ErrorPage(){
    return(
        <MainLayout>
            <div className={classes.error_container}>
                <h1 className={classes.error}>Error 404</h1>
                <p className={classes.error_p}>Please <Link href="/"><a className={classes.nodecoration}>go back</a></Link> to safety</p>
            </div>
        </MainLayout>
    )
}