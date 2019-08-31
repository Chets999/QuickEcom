import axios from "../../config/axios";

export const setUser = (user)=> {
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const startSetUser = () => {
    return (dispatch) => {
        axios.get('/users/account', {
            headers: {
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response => {
            dispatch(setUser(response.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER'
    }
}

export const startRemoveUser = (history) => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response => {
            localStorage.removeItem('userAuth')
            dispatch(removeUser())
            history.push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }
}