import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Table from "./Table";
import {getCallsList} from "../../../redux/calls-reducer";

const TableContainer = (props) => {
    const [filteredCallsData, setFilteredCallsData] = useState([]);

    console.log(filteredCallsData)

    useEffect(() => {
        props.getCallsList()

    }, []);
    useEffect(() => {
        setFilteredCallsData(props.calls)
    }, [props.calls])

    const filterInOutCalls = (inOut) => {
        if (inOut !== 'default') {

            let callsData = props.calls
            setFilteredCallsData(callsData.filter(obj => inOut === obj.in_out))
        } else {
            setFilteredCallsData(props.calls )
        }
    }

    return <Table {...props}
                  filteredCallsData={filteredCallsData}
                  filterInOutCalls={filterInOutCalls}/>
}

const mapStateToProps = (state) => ({
    calls: state.calls.calls
})
export default connect(mapStateToProps, {getCallsList})(TableContainer)