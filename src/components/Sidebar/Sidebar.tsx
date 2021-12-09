import React from 'react';
import logo from '../../assets/logo.png';
import s from './Sidebar.module.css';
import {
    faPhone,
    faEnvelope,
    faCheckDouble,
    faChartLine,
    faUserFriends,
    faBookReader,
    faBriefcase,
    faUser,
    faFileAlt,
    faCog,
    faPlusCircle,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav>
                <ul>

                    <li className={s.logoBox}><img src={logo} alt='logo'/></li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faChartLine}/>Итоги</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faCheckDouble}/>Заказы</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faEnvelope}/>Сообщения</li>
                    <li className={s.item + ' ' + s.activeItem}><FontAwesomeIcon className={s.icon} icon={faPhone}/>Звонки
                    </li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faUserFriends}/>Контрагенты</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faFileAlt}/>Документы</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faUser}/>Исполнители</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faBriefcase}/>Отчеты</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faBookReader}/>База знаний</li>
                    <li className={s.item}><FontAwesomeIcon className={s.icon} icon={faCog}/>Настройки</li>
                </ul>
                <div className={s.buttonsContainer}>
                    <button className={s.addOrder}>Добавить заказ <FontAwesomeIcon className={s.iconBtn} icon={faPlusCircle}/></button>
                    <button className={s.pay}>Отплата <FontAwesomeIcon className={s.iconBtn} icon={faExclamationCircle}/></button>
                </div>
            </nav>
        </aside>
    )
}
export default Sidebar