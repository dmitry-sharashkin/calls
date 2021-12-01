import React from "react";
import Paginator from "./Paginator";
import {connect} from "react-redux";

const PaginatorContainer = () => {
    return(<>
        <Paginator/>
    </>)
}

export default connect(null,{})(PaginatorContainer)