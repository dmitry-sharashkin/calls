import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "../Container.module.css";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

const Calendar = ({getCallsList}) => {
    const [showButtons, changeButtons] = useState(false);

    function toggleButtons() {
        showButtons ? changeButtons(false) : changeButtons(true);
    }

    function setDate(variant,pagination) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let fromDate = `${dd}.${mm}.${yyyy}`;

        let d, m, yyy;


        if (variant === 0) {
            let threeDayAgo = new Date();
            threeDayAgo.setDate(threeDayAgo.getDate() - 3);
            d = String(threeDayAgo.getDate()).padStart(2, '0');
            m = String(threeDayAgo.getMonth() + 1).padStart(2, '0');
            yyy = threeDayAgo.getFullYear();
        }
        if (variant === 1) {
            let weakAgo = new Date();
            weakAgo.setDate(weakAgo.getDate() - 7);
            d = String(weakAgo.getDate()).padStart(2, '0');
            m = String(weakAgo.getMonth() + 1).padStart(2, '0');
            yyy = weakAgo.getFullYear();
        }
        if (variant === 2) {
            let monthAgo = new Date();
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            d = String(monthAgo.getDate()).padStart(2, '0');
            m = String(monthAgo.getMonth() + 1).padStart(2, '0');
            yyy = monthAgo.getFullYear();
        }
        if (variant === 3) {
            let yearAgo = new Date();
            yearAgo.setFullYear(yearAgo.getFullYear() - 1);
            d = String(yearAgo.getDate()).padStart(2, '0');
            m = String(yearAgo.getMonth() + 1).padStart(2, '0');
            yyy = yearAgo.getFullYear();
        }


        let toDate = `${d}.${m}.${yyy}`;


        console.log(fromDate);
        console.log(toDate);
        getCallsList(toDate, fromDate)
    }

    return (<>
        {/*<span onClick={() => getCallsList('30.11.2021', '1.12.2021')}><FontAwesomeIcon*/}
        {/*    className={s.iconBtn + ' ' + s.calendar} icon={faCalendar}/> 3 дня</span>*/}
        <span onClick={toggleButtons}><FontAwesomeIcon
            className={s.iconBtn + ' ' + s.calendar} icon={faCalendar}/>3 дня
            </span>
        {showButtons && <div className={s.buttonsContainer}>
            <button onClick={() => setDate(0)}>3 дня</button>
            <button onClick={() => setDate(1)}>Неделя</button>
            <button onClick={() => setDate(2)}>Месяц</button>
            {/*<button onClick={() => setDate(3)}>Год</button>*/}
        </div>}

    </>)
}
export default Calendar