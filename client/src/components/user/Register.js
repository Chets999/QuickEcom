import React from 'react'
import axios from '../../config/axios'

class UserRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            successMsg:'',
            errorMsg:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleReset = this.handleReset.bind(this)

    }

    handleChange(e) {
        e.persist()
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    handleReset(e){
        this.setState(()=>({
            name:'',
            username:'',
            email:'',
            password:'',
            errorMsg: "",
            successMsg: ""
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name:this.state.name,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('/users/register', formData)
            .then((response) =>{
                if(response.data.hasOwnProperty('errors')){
                    this.setState({errorMsg:response.data.message})
                }
                else {
                    this.setState(() => ({ successMsg:'User Successfully register',
                                         errorMsg: "",
                                         email: '',
                                         username:'',
                                         password:'',
                                         name:''
                 }))
                }
            }).catch(err => {
                console.log(err)
            })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                {this.state.successMsg && <p>{this.state.successMsg}</p>}
                    <label>
                        Name <input type="text" value ={this.state.name} onChange={this.handleChange} name='name'/>
                    </label><br/>
                    <label>
                        User Name <input type = "text" value = {this.state.username} onChange={this.handleChange} name='username' />
                    </label><br/>
                    <label>
                        E-mail <input type = 'email' value = {this.state.email} onChange = {this.handleChange} name= 'email' />
                    </label><br/>
                    <label>
                        Password <input type='password' value={this.state.password} onChange ={this.handleChange} name='password'/>
                    </label><br/>
                    <input type='submit' value='register'/>
                    <button onClick={this.handleReset}>Reset</button>
                </form>
            
            </div>
        )
    }
}

export default UserRegister