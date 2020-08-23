export const addUsers = (users) => {
    return {
        type: 'ADD_USERS',
        payload: users
    }
}

export const setLoad=(load)=>{
    return{
        type:'USERS_LOAD',
        payload:load
    }
}

export const setError=(err)=>{
    return{
        type:'USERS_ERROR',
        payload:err
    }
}

export const fetchUsers = () => dispatch => {
    dispatch(setLoad(true))
    dispatch(setError(false))
    fetch('http://77.120.241.80:8911/api/users')
        .then(res => res.json())
        .then(data => {
            dispatch(addUsers(data));
            dispatch(setLoad(false))
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(setLoad(false))
            console.error(err)
        })
}

export const fetchDeleteUser = (id) => dispatch => {
    dispatch(setError(false))
    fetch(`http://77.120.241.80:8911/api/user/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            dispatch(fetchUsers())
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(setLoad(false))
            console.error(err)
        })
}

export const fetchChangeUser = (data) => dispatch => {
    dispatch(setError(false))
    fetch(`http://77.120.241.80:8911/api/user/${data.id}`, {
        method: 'PUT', body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(() => {
            dispatch(fetchUsers())
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(setLoad(false))
            console.error(err)
        })
}

export const fetchAddUser = (data) => dispatch => {
    dispatch(setError(false))
    dispatch(setLoad(true))
    fetch(`http://77.120.241.80:8911/api/users`, {
        method: 'POST', body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(() => {
            dispatch(fetchUsers())
            dispatch(setLoad(false))

        })
        .catch(err => {
            dispatch(setLoad(false))
            dispatch(setError(true));
            console.error(err)
        })
}