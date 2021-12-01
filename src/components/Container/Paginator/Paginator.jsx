import React from "react";
import s from "../Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

const Paginator = () => {
    return <div className={s.paginatorBalance}>
        <div className={s.balance}>
            <div className={s.balanceText}>
                <span className={s.balanceText__helper}>Баланс:</span>
                <span className={s.money}> 272₽</span>
            </div>
            <button className={s.iconBtn__wrap}>
                <FontAwesomeIcon className={s.iconBtn} icon={faPlusCircle}/>
            </button>
        </div>
        <div className={s.paginator}>
            <button className={s.iconBtn + ' ' + s.prev}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <span><FontAwesomeIcon className={s.iconBtn + ' ' + s.calendar} icon={faCalendar}/> 3 дня</span>
            <button className={s.iconBtn + ' ' + s.next}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    </div>
}

export default Paginator