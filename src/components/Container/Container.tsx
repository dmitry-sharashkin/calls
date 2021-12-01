import React from "react";
import s from './Container.module.css'
import TableContainer from "./Table/TableContainer";
import PaginatorContainer from "./Paginator/PaginatorContainer";

const Container = () => {


    return (
        <main className={s.mainContainer}>
            <PaginatorContainer/>
            <TableContainer/>
        </main>
    )
}
export default Container