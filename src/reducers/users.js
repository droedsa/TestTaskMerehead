const usersData = (state = {
    users: [],
    usersStatus:{
        load:false,
        error:false
    }
}, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {
                ...state,
                users: [...action.payload]
            }

        case 'USERS_LOAD':{
            return {
                ...state,
                usersStatus: {
                    ...state.usersStatus,
                    load: action.payload
                }
            }
        }
        case 'USERS_ERROR':{
            return {
                ...state,
                usersStatus: {
                    ...state.usersStatus,
                    error: action.payload
                }
            }
        }
        default:
            return state;
    }
}

export default usersData;