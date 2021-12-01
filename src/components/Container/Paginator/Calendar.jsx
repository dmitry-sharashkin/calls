import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "../Container.module.css";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

const Calendar = ({getCallsList}) => {
    const [showButtons, changeButtons] = useState(false);

    function toggleButtons() {
        showButtons ? changeButtons(false) : changeButtons(true);

    }
    function setDate(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let fromDate = `${dd}.${mm}.${yyyy}`;


        let threeDayAgo = new Date();
        threeDayAgo.setDate(threeDayAgo.getDate()-3);
        let d = String(threeDayAgo.getDate()).padStart(2, '0');
        let m = String(threeDayAgo.getMonth() + 1).padStart(2, '0');
        let yyy = threeDayAgo.getFullYear();

        let toDate = `${d}.${m}.${yyy}`;


        console.log(fromDate);
        console.log(toDate);
        getCallsList(toDate, fromDate)
    }

    return (<>
        {/*<span onClick={() => getCallsList('30.11.2021', '1.12.2021')}><FontAwesomeIcon*/}
        {/*    className={s.iconBtn + ' ' + s.calendar} icon={faCalendar}/> 3 дня</span>*/}
        <span   onClick={toggleButtons}><FontAwesomeIcon
            className={s.iconBtn + ' ' + s.calendar} icon={faCalendar}/>3 дня
            </span>
        {showButtons && <div className={s.buttonsContainer}>
            <button onClick={() => setDate()}>3 дня</button>
            <button onClick={() => getCallsList('30.11.2021', '1.12.2021')}>Неделя</button>
            <button onClick={() => getCallsList('30.11.2021', '1.12.2021')}>Месяц</button>
            <button onClick={() => getCallsList('30.11.2021', '1.12.2021')}>Год</button>
        </div>}

    </>)
}
export default Calendar