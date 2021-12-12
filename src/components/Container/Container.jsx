import React, {useState} from "react";
import s from './Container.module.css'
import TableContainer from "./Table/TableContainer";
import PaginatorContainer from "./Paginator/PaginatorContainer";

const Container = () => {
    const portionIndex = 20
    const [fromIndex, setFromIndex] = useState(0)
    const [toIndex, setToIndex] = useState(portionIndex)

    return (
        <main className={s.mainContainer}>
            <PaginatorContainer
                toIndex={toIndex}
                fromIndex={fromIndex}
                setToIndex={setToIndex}
                setFromIndex={setFromIndex}
                portionIndex={portionIndex}/>
            <TableContainer fromIndex={fromIndex} toIndex={toIndex}/>

        </main>
    )
}
export default Container