import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faSearch} from "@fortawesome/free-solid-svg-icons";
import s from './../Container.module.css'

const Controls = ({filterInOutCalls, filterValue, searchCalls}) => {
    const [showButtons, changeButtons] = useState(false);
    const [search, setSearch] = useState(false);

    function toggleSearch() {
        setSearch(!search)
    }

    const searchInput = useRef(null)

    function toggleButtons() {
        showButtons ? changeButtons(false) : changeButtons(true);
    }

    return (
        <div className={s.controls}>

            {search ? <div className={s.search}>
                    <input onChange={() => searchCalls(searchInput.current.value)} ref={searchInput} type="text"
                           autoFocus/>
                    <button onClick={toggleSearch}>Скрыть</button>
                </div>
                : <div className={s.search} onClick={toggleSearch}>
                    <FontAwesomeIcon className={s.search} icon={faSearch}/>
                    <span>Поиск по звонкам</span>
                </div>
            }


            <div className={s.filters}>
                <div className={s.filterBox}>
                    {showButtons
                        ? <div className={s.d} onClick={toggleButtons}>
                            {filterValue === 'default' && 'Все звонки'}
                            {filterValue === '0' && 'Входящиe'}
                            {filterValue === '1' && 'Исходящие'}

                            <FontAwesomeIcon icon={faChevronDown}/>

                        </div>
                        : <div onClick={toggleButtons}>
                            {filterValue === 'default' && 'Все звонки'}
                            {filterValue === '0' && 'Входящиe'}
                            {filterValue === '1' && 'Исходящие'}
                            <FontAwesomeIcon icon={faChevronDown}/></div>
                    }
                    {showButtons && <div className={s.buttonsContainer}>
                        <button onClick={() => filterInOutCalls('default')}>Все звонки</button>
                        <button onClick={() => filterInOutCalls('0')}>Входящиe</button>
                        <button onClick={() => filterInOutCalls('1')}>Исходящие</button>
                    </div>}

                </div>
            </div>
        </div>
    )
}
export default Controls