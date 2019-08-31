import React from 'react';
import { Link, BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import Register from './components/user/Register'
import Login from './components/user/Login'
import Account from './components/user/Account'
import { startRemoveUser } from './redux/actions/user'



function App(props) {

  const handleLogout = e => {
    props.dispatch(startRemoveUser(props.history))
   }

  return (
    <BrowserRouter>
      <div>
        {
          _.isEmpty(props.user) ?
            (
              <div>
              <ul>
              <li><Link to="/register">register</Link></li> 
              <li><Link to="/login">login</Link></li>
              </ul>
              
              </div>
            ) : (
              <div>
                <ul>
                  <li><Link to="/account">Account</Link></li>
                 <button onClick={handleLogout}>Logout</button>
               </ul> 
              </div>
          )
        }
        <Route path="/register" component={Register} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
     
       
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state)=>{
	return{
	  user: state.user
	}
}

export default connect(mapStateToProps)(App)
