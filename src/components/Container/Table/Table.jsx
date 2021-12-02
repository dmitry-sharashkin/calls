import React, { useState} from "react";
 import s from './Table.module.css';
import Rows from "./row";
import Controls from "./Controlls";

const Table = (props) => {

    const [num,setNum] = useState(true);
    console.log(props.record)

    return (
        <>
            <Controls setNum={setNum}/>

            {/*<audio src={} ></audio>*/}


            <table className={s.container}>
                <tbody>
                <tr className={s.columns}>
                    <th>Тип</th>
                    <th>Время</th>
                    <th>Сотрудник</th>
                    <th>Звонок</th>
                    <th>Источник</th>
                    <th>Оценка</th>
                    <th>Длительность</th>
                </tr>
                <Rows {...props} num={num}/>
                </tbody>
            </table>
        </>
    )
}
export default Table