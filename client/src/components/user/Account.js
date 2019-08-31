import React from 'react'
import {connect} from 'react-redux'

 function Account(props){

     
         return(
             <div>
                 <ul>
                    <li>id:{props.user._id}</li>
                    <li>username:{props.user.username}</li>
                    <li>email:{props.user.email}</li>
                 </ul>
             </div>
         )
 }
 const mapStateToProps = (state) => {
     return {
         user: state.user
     }
 }
 export default connect(mapStateToProps)(Account)