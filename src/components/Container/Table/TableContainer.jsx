import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Table from "./Table";
import {getCallsList, setCallsListLength} from "../../../redux/calls-reducer";

const TableContainer = (props) => {
    const [filteredCallsData, setFilteredCallsData] = useState([]);
    const [filterValue, setFilterValue] = useState('default');
    console.log(filteredCallsData)

    useEffect(() => {
        props.getCallsList()

    }, []);

    useEffect(() => {
        setFilteredCallsData(props.calls)
    }, [props.calls])

    useEffect(() => {
        props.setCallsListLength(filteredCallsData.length)
    }, [filteredCallsData])

    const filterInOutCalls = (inOut) => {
        if (inOut !== 'default') {

            let callsData = props.calls
            setFilteredCallsData(callsData.filter(obj => inOut === obj.in_out))
        } else {
            setFilteredCallsData(props.calls)
        }
        setFilterValue(inOut)
    }

    const searchCalls = (input) => {

        setFilteredCallsData(filteredCallsData.filter(obj =>  obj.person_name.toLowerCase().includes(input.toLowerCase()) ))

    }



return <Table {...props}
              filteredCallsData={filteredCallsData}
              filterInOutCalls={filterInOutCalls}
              filterValue={filterValue}
              fromIndex={props.fromIndex}
              toIndex={props.toIndex}
              searchCalls={searchCalls}
/>
}

const mapStateToProps = (state) => ({
    calls: state.calls.calls
})
export default connect(mapStateToProps, {getCallsList, setCallsListLength})(TableContainer)