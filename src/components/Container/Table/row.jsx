import React from "react";
import s from "./Table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Row = ({calls}) => {

    return(
        calls.map(obj => <tr className={s.tr}>
            {(obj.in_out === '1')
                ?<td className={s.type + ' ' + s.outer }>
                    {(obj.status === 'Дозвонился')? <FontAwesomeIcon icon={faArrowDown} className={s.green}/> :<FontAwesomeIcon icon={faArrowDown}  className={s.red}/>
                    }
                </td>
                :<td className={s.type + ' ' + s.inner }>
                    {(obj.status === 'Дозвонился')? <FontAwesomeIcon icon={faArrowDown} className={s.green}/> :<FontAwesomeIcon icon={faArrowDown}  className={s.red}/>
                    }
                </td>
            }

            <td className={s.time}>
                {obj.date}
            </td>
            <td className={s.user}>
                <img src={obj.person_avatar}/>

            </td>
            <td className={s.call}>
                {obj.from_number || obj.person_name + ' ' + obj.person_surname}
            </td>
            <td className={s.source}>
                Санкт-Петербург,<br/>
                источник в три <br/> строки
            </td>
            <td className={s.rating}>
                <button className={s.share}>Распознать</button>
            </td>
            <td className={s.duration}>
                {obj.time}
            </td>
        </tr>)
    )

}
export default Row