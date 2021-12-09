import React from "react";
import s from "../Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight,} from "@fortawesome/free-solid-svg-icons";
import Calendar from "./Calendar";

const Paginator = (props) => {

    function next() {

        props.setToIndex(props.toIndex + props.portionIndex)
        props.setFromIndex(props.fromIndex + props.portionIndex)
    }

    function prev() {
        if (props.fromIndex<props.portionIndex){
            return
        }
        props.setToIndex(props.toIndex - props.portionIndex)
        props.setFromIndex(props.fromIndex - props.portionIndex)
    }
if (props.down){
    return <div className={s.downPaginator}>
        <div className={s.paginatorBalance}>
            <div className={s.paginator}>
                <button onClick={prev} className={s.iconBtn + ' ' + s.prev}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <Calendar {...props}
                          setToIndex={props.setToIndex}
                          setFromIndex={props.setFromIndex}
                          portionIndex={props.portionIndex}
                />
                <button  onClick={next} className={s.iconBtn + ' ' + s.next}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </div>
    </div>

}
    return (
        <div className={s.paginatorBalance}>
            {/*// <div className={s.balance}>*/}
            {/*// <div className={s.balanceText}>*/}
            {/*// <span className={s.balanceText__helper}>Баланс:</span>*/}
            {/*// <span className={s.money}> 272₽</span>*/}
            {/*// </div>*/}
            {/*// <button className={s.iconBtn__wrap}>*/}
            {/*// <FontAwesomeIcon className={s.iconBtn} icon={faPlusCircle}/>*/}
            {/*// </button>*/}
            {/*// </div>*/}
            <div className={s.paginator}>
                <button onClick={prev} className={s.iconBtn + ' ' + s.prev}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <Calendar {...props}/>
                <button  onClick={next} className={s.iconBtn + ' ' + s.next}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </div>
    )
}

export default Paginator