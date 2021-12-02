import React, {useEffect} from "react";
import {connect} from "react-redux";
import Table from "./Table";
import {getCallsList, getRecord,} from "../../../redux/calls-reducer";

const TableContainer = (props) => {

    useEffect(() => {
        props.getCallsList();
    }, []);
    return <Table {...props}/>
}

const mapStateToProps = (state) => ({
    calls: state.calls.calls
})
export default connect(mapStateToProps, {getCallsList,getRecord})(TableContainer)