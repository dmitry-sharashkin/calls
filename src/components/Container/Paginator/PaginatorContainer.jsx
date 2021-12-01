import React from "react";
import Paginator from "./Paginator";
import {connect} from "react-redux";
import {getCallsList} from "../../../redux/calls-reducer";

const PaginatorContainer = (props) => {
    return(<>
        <Paginator {...props}/>
    </>)
}

export default connect(null,{getCallsList})(PaginatorContainer)