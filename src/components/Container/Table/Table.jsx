import React from "react";
import s from './Table.module.css'
import {faCircle, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../../assets/avatar.png"
import Row from "./row";

const Table = (props) => {
    const calls = props.calls

    return (
        <table className={s.container}>
            <tr className={s.columns}>
                <th>Тип</th>
                <th>Время</th>
                <th>Сотрудник</th>
                <th>Звонок</th>
                <th>Источник</th>
                <th>Оценка</th>
                <th>Длительность</th>
            </tr>
            <tr className={s.tr}>

                <td className={s.type + ' ' + s.outer + ' ' + s.green}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </td>
                <td className={s.time}>
                    19:00
                </td>
                <td className={s.user}>
                        <img src={avatar}/>

                </td>
                <td className={s.call}>
                    Константин КОнстанта
                </td>
                <td className={s.source}>
                    Санкт-Петербург,<br/>
                    источник в три <br/> строки
                </td>
                <td className={s.rating}>
                    <button className={s.share}>Распознать</button>
                </td>
                <td className={s.duration}>
                    12:06
                </td>
            </tr>
            <tr className={s.tr}>
                <td className={s.type + ' ' + s.inner}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </td>
                <td className={s.time}>
                    19:00
                </td>
                <td className={s.user}>
                    <span className={s.avatar}>
                        <img src={avatar}/>
                    </span>
                </td>
                <td className={s.call}>
                    +7(952)333-22-11
                </td>
                <td className={s.source}>
                    Rabota.ru
                </td>
                <td className={s.rating + ' ' + s.green}>
                    <FontAwesomeIcon icon={faCircle}/>
                    <FontAwesomeIcon icon={faCircle}/>
                    <FontAwesomeIcon icon={faCircle}/>
                    <button className={s.green}>Отлично</button>
                </td>
                <td className={s.duration}>
                    12:06
                </td>
            </tr>
            <tr className={s.tr}>
                <td className={s.type + ' ' + s.inner + ' ' + s.green}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </td>
                <td className={s.time}>
                    19:00
                </td>
                <td className={s.user}>
                    <span className={s.avatar}>
                        <img alt='avatar' src={avatar}/>
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.6333 10.6665C12.7 10.1165 12.75 9.5665 12.75 8.99984C12.75 8.43317 12.7 7.88317 12.6333 7.33317H15.45C15.5833 7.8665 15.6666 8.42484 15.6666 8.99984C15.6666 9.57484 15.5833 10.1332 15.45 10.6665H12.6333ZM11.1583 15.2998C11.6583 14.3748 12.0416 13.3748 12.3083 12.3332H14.7666C13.9666 13.7082 12.6916 14.7748 11.1583 15.2998ZM10.95 10.6665H7.04996C6.96663 10.1165 6.91663 9.5665 6.91663 8.99984C6.91663 8.43317 6.96663 7.87484 7.04996 7.33317H10.95C11.025 7.87484 11.0833 8.43317 11.0833 8.99984C11.0833 9.5665 11.025 10.1165 10.95 10.6665ZM8.99996 15.6332C8.30829 14.6332 7.74996 13.5248 7.40829 12.3332H10.5916C10.25 13.5248 9.69163 14.6332 8.99996 15.6332ZM5.66663 5.6665H3.23329C4.02496 4.28317 5.30829 3.2165 6.83329 2.69984C6.33329 3.62484 5.95829 4.62484 5.66663 5.6665ZM3.23329 12.3332H5.66663C5.95829 13.3748 6.33329 14.3748 6.83329 15.2998C5.30829 14.7748 4.02496 13.7082 3.23329 12.3332ZM2.54996 10.6665C2.41663 10.1332 2.33329 9.57484 2.33329 8.99984C2.33329 8.42484 2.41663 7.8665 2.54996 7.33317H5.36663C5.29996 7.88317 5.24996 8.43317 5.24996 8.99984C5.24996 9.5665 5.29996 10.1165 5.36663 10.6665H2.54996ZM8.99996 2.35817C9.69163 3.35817 10.25 4.47484 10.5916 5.6665H7.40829C7.74996 4.47484 8.30829 3.35817 8.99996 2.35817ZM14.7666 5.6665H12.3083C12.0416 4.62484 11.6583 3.62484 11.1583 2.69984C12.6916 3.22484 13.9666 4.28317 14.7666 5.6665ZM8.99996 0.666504C4.39163 0.666504 0.666626 4.4165 0.666626 8.99984C0.666626 11.21 1.5446 13.3296 3.1074 14.8924C3.88122 15.6662 4.79988 16.28 5.81093 16.6988C6.82198 17.1176 7.90561 17.3332 8.99996 17.3332C11.2101 17.3332 13.3297 16.4552 14.8925 14.8924C16.4553 13.3296 17.3333 11.21 17.3333 8.99984C17.3333 7.90549 17.1177 6.82186 16.699 5.81081C16.2802 4.79976 15.6663 3.8811 14.8925 3.10728C14.1187 2.33346 13.2 1.71963 12.189 1.30084C11.1779 0.882052 10.0943 0.666504 8.99996 0.666504Z"
                            fill="#ADBFDF"/>
                    </svg>
                </td>
                <td className={s.call}>
                    +7(952)333-22-11
                </td>
                <td className={s.source}>
                </td>
                <td className={s.rating}>
                    <FontAwesomeIcon icon={faCircle}/>
                    <FontAwesomeIcon icon={faCircle}/>
                    <button>Хорошо</button>
                </td>
                <td className={s.duration}>
                    12:06
                </td>
            </tr>
            <tr className={s.tr}>
                <td className={s.type + ' ' + s.outer}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </td>
                <td className={s.time}>
                    19:00
                </td>
                <td className={s.user}>
                    <span className={s.avatar}>
                        <img src={avatar}/>
                    </span>
                </td>
                <td className={s.call}>
                    +7(952)333-22-11
                </td>
                <td className={s.source}>
                    Google
                </td>
                <td className={s.rating + ' ' + s.red}>
                    <FontAwesomeIcon icon={faCircle}/>
                    <button>Плохо</button>
                </td>
                <td className={s.duration}>
                    12:06
                </td>
            </tr>
            <tr className={s.tr}>
                <td className={s.type + ' ' + s.red + ' ' + s.outer}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </td>
                <td className={s.time}>
                    19:00
                </td>
                <td className={s.user}>
                    <span className={s.avatar}>
                        <img src={avatar}/>
                    </span>
                </td>
                <td className={s.call}>
                    +7(952)333-22-11
                </td>
                <td className={s.source}>
                </td>
                <td className={s.rating + ' ' + s.noScript}>
                    Скрипт не исправен
                </td>
                <td className={s.duration}>
                    12:06
                </td>
            </tr>
            <Row {...props}/>

        </table>
    )
}
export default Table