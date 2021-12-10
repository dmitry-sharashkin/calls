import React, {useState} from "react";
import s from './Table.module.css';
import Rows from "./row";
import Controls from "./Controlls";

const Table = (props) => {




    return (
        <>

            <button onClick={()=>props.searchCalls('татьяна')}>sdfsffs</button>
            <Controls
                filterValue={props.filterValue}
                filterInOutCalls={props.filterInOutCalls}
            />


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
                <Rows {...props}
                      fromIndex={props.fromIndex}
                      toIndex={props.toIndex}
                      filteredCallsData={props.filteredCallsData}
                />
                </tbody>
            </table>
        </>
    )
}
export default Table