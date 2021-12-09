import React, { useState} from "react";
 import s from './Table.module.css';
import Rows from "./row";
import Controls from "./Controlls";

const Table = (props) => {




    return (
        <>
            <Controls filterInOutCalls={props.filterInOutCalls}/>


            <table className={s.container}>
                <thead>
                <tr className={s.columns}>
                    <th>Тип</th>
                    <th>Время</th>
                    <th>Сотрудник</th>
                    <th>Звонок</th>
                    <th>Длительность</th>
                </tr>
                </thead>
                <tbody>
                <Rows {...props} filteredCallsData={props.filteredCallsData} />
                </tbody>
            </table>
        </>
    )
}
export default Table