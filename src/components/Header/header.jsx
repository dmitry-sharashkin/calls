import React, {useEffect, useState} from "react";
import s from './Header.module.css'
import {faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import photo from '../../assets/img.png'


const Header = () => {
    const [fromDate,setFromDate]= useState();
    useEffect(()=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        setFromDate(`${dd}.${mm}.${yyyy}`)
    },[])
    return (
        <header>
            <div className={s.container}>
                <div className={s.left}>
                    <time  className={s.time}>{fromDate}</time>
                    <div className={s.analytics}>
                        <div className={s.analyticsItem}>
                            <div className={s.text}>Новые звонки <span className={s.green}>20 из 30 шт</span></div>
                            <div className={s.progressBar}>
                                <div className={s.progress + ' ' + s.green}></div>
                            </div>
                        </div>
                        <div className={s.analyticsItem}>
                            <div className={s.text}>Качество разговоров <span className={s.yellow}>40%</span></div>
                            <div className={s.progressBar}>
                                <div className={s.progress + ' ' + s.yellow}></div>
                            </div>
                        </div>
                        <div className={s.analyticsItem}>
                            <div className={s.text}>Конверсия в заказ <span className={s.red}>67%</span></div>
                            <div className={s.progressBar}>
                                <div className={s.progress + ' ' + s.red}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <FontAwesomeIcon className={s.search } icon={faSearch}/>
                    <div className={s.userData}>
                        <div className={s.name}>
                            ИП Сидорова Александра Михайловна
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className={s.photo}>
                            <img alt='avatar' src={photo}/>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header