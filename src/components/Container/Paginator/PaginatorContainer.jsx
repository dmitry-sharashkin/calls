import React from "react";
import Paginator from "./Paginator";
import {connect} from "react-redux";
import {getCallsList} from "../../../redux/calls-reducer";

const PaginatorContainer = (props) => {
    return (<>
        <Paginator {...props}/>
    </>)
}
const mapStateToProps = (state) => {
    return {
        callsListLength: state.calls.callsListLength
    }
}
export default connect(mapStateToProps, {getCallsList})(PaginatorContainer)