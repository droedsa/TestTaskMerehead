import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import FormUser from "./userDetails";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchAddUser, fetchChangeUser, fetchDeleteUser} from "../../actions/users";
import Container from "@material-ui/core/Container";

const userSelector = usersData => id => usersData.users.find(u => u.id === id)

const UserDetailsContainer = ({getUsers,addUser,changeUserData,deleteUser}) => {
    const {id} = useParams();
    const history = useHistory();
    const user = getUsers(parseInt(id, 10));

    const deleteUserData =(userId)=>{
        deleteUser(userId);
        closeWindow();
    }

    const closeWindow = ()=>{
        history.push('/')
    }

    const handleSubmit = (data) => {
        if (id == null){
            addUser(data)
            closeWindow();
        }else {
            changeUserData(data)
            closeWindow();
        }
    }

    return (
        <Container>
            <FormUser
                initialValues={user}
                closeWindow={closeWindow}
                deleteUser={deleteUserData}
                onSubmit={handleSubmit}/>
        </Container>
    );
};

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        addUser:fetchAddUser,
        changeUserData:fetchChangeUser,
        deleteUser: fetchDeleteUser,

    },dispatch)
}

export default connect(
    ({usersData}) => ({
        getUsers: userSelector(usersData)
    }),
    mapDispatchToProps
)(UserDetailsContainer);