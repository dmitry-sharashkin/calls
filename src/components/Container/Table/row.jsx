import React, {} from "react";
import s from "./Table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Rows = ({filteredCallsData,toIndex,fromIndex}) => {

    function transformTime(sec) {
        if (sec >= 3600) {
            let hours = Math.floor(sec / 60 / 60);
            let minutes = Math.floor(sec / 60) - (hours * 60);
            let seconds = sec % 60;
            if (seconds < 10) {
                seconds = '0' + seconds
            } else if (seconds === 0) {
                seconds = '00'
            }
            return hours + ':' + minutes + ':' + seconds;
        } else if (sec >= 60) {
            let minutes = Math.floor(sec / 60);
            let seconds = sec % 60;
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            return minutes + ':' + seconds;
        }
        return sec
    }

    return (

        filteredCallsData.map((obj, index) => {
                return (index >= fromIndex && index < toIndex) ? <tr key={obj.id} className={s.tr}>
                        {(obj.in_out === '1')
                            ? <td className={s.type + ' ' + s.outer}>
                                {(obj.status === 'Дозвонился') ? <FontAwesomeIcon icon={faArrowDown} className={s.green}/> :
                                    <FontAwesomeIcon icon={faArrowDown} className={s.red}/>
                                }
                            </td>
                            : <td className={s.type + ' ' + s.inner}>
                                {(obj.status === 'Дозвонился') ? <FontAwesomeIcon icon={faArrowDown} className={s.green}/> :
                                    <FontAwesomeIcon icon={faArrowDown} className={s.red}/>
                                }
                            </td>
                        }

                        <td className={s.time}>
                            {obj.date}
                        </td>
                        <td className={s.user}>

                            {index}
                            {obj.person_avatar ? <img src={`${obj.person_avatar}`} alt='Аватар'/> :
                                <img src='https://lk.skilla.ru/img/noavatar.jpg' alt='Аватар'/>}
                            <span>{obj.person_name + " " + obj.person_surname}</span>

                        </td>
                        <td className={s.call}>
                            {obj.from_number.includes('sip') && 'Сторонний источник'}
                            {obj.from_number.includes('sip') || `+${obj.from_number}`}

                            {/*{obj.from_number || obj.person_name + ' ' + obj.person_surname}*/}
                        </td>

                        <td className={s.duration}>
                            {transformTime(obj.time)}
                        </td>
                    </tr>
                    : ''
            }
        )
    )

}
export default Rows