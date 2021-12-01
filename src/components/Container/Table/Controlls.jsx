import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faSearch} from "@fortawesome/free-solid-svg-icons";
import s from './../Container.module.css'

const Controls = ({setNum}) => {
    const [showButtons, changeButtons] = useState(false);

    function toggleButtons() {
        showButtons?changeButtons(false):changeButtons(true);
    }

    return (
        <div className={s.controls}>
            <div className={s.search}>

                <FontAwesomeIcon className={s.search} icon={faSearch}/>
                <span>Поиск по звонкам</span>
            </div>
            <div className={s.filters}>
                <div className={s.filterBox}>
                    {showButtons
                        ?<div className={s.d} onClick={toggleButtons}>Все типы <FontAwesomeIcon  icon={faChevronDown}/></div>
                        :<div onClick={toggleButtons}>Все типы <FontAwesomeIcon  icon={faChevronDown}/></div>
                    }
                    {showButtons && <div className={s.buttonsContainer}>
                        <button onClick={() => setNum(true)}>Все типы</button>
                        <button onClick={() => setNum('0')}>Входящиe</button>
                        <button onClick={() => setNum('1')}>Исходящие</button>
                    </div>}

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
    )
}
export default Controls