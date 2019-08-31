import React from 'react'
import { connect } from 'react-redux'
import { startRemoveUser } from './../../../src/redux/actions/user'
import {withRouter} from 'react-router-dom'
function Logout(props) {
    props.dispatch(startRemoveUser())
    return (
        <p> Successfully logged out</p>
    )
 }

 export default connect()(withRouter(Logout))