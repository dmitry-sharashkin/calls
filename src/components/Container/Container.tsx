import React from "react";
import s from './Container.module.css'
import {faPlusCircle, faChevronRight, faChevronLeft, faSearch, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import Table from "./Table/Table";

const Container = () => {
    return (
        <main className={s.mainContainer}>
            <div className={s.paginatorBalance}>
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
                    <button  className={s.iconBtn + ' ' + s.next}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>


            </div>
            <div className={s.controls}>
                <div className={s.search}>

                    <FontAwesomeIcon className={s.search } icon={faSearch}/>
                    <span>Поиск по звонкам</span>
                </div>
                <div className={s.filters}>
                    <div className={s.filterBox}>
                        <div>Все типы <FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>
                    <div className={s.filterBox}>
                        <div>Все сотрудники <FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>
                    <div className={s.filterBox}>
                        <div>Все звонки<FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>
                    <div className={s.filterBox}>
                        <div>Все источники<FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>
                    <div className={s.filterBox}>
                        <div>Все оценки<FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>
                    <div className={s.filterBox}>
                        <div>Все ошибки <FontAwesomeIcon icon={faChevronDown}/></div>
                    </div>

                </div>
            </div>

            <Table/>
        </main>
    )
}
export default Container