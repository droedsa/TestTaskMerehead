import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {setError} from "../../actions/users";
import {connect} from "react-redux";
import Loader from "../loader/loader";
import UserCard from "../userCard/userCard";
import Pagination from "material-ui-flat-pagination";
import {Link} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";

import './userList.css'


const UserList = ({users, usersStatus, setCloseError}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const {load, error} = usersStatus;

    const showUsers = users.slice(currentPage, currentPage + 5);

    const userItem = showUsers.map(({name, surname, desc, id}) => {
        return <div key={id}>
            <UserCard name={name} surname={surname} desc={desc} id={id}/>
        </div>
    })

    if (load) {
        return <Loader/>
    }

    return (
        <div className={'body'}>
            <Button style={{margin: 20}} color={"primary"} variant={"contained"}>
                <Link to={`/users`}>add new user</Link>
            </Button>
            {userItem}
            <Pagination limit={5} onClick={(e, offset) => setCurrentPage(offset)}
                        total={users.length} offset={currentPage}/>

            <Snackbar onClose={() => setCloseError(false)} open={error} autoHideDuration={4000}>
                <Alert onClose={() => setCloseError(false)} severity="error">
                    Something went wrong
                </Alert>
            </Snackbar>
        </div>
    );
};

const mapStateToProps = ({usersData: {users, usersStatus}, setCloseError}) => {
    return {
        users, usersStatus, setCloseError
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setCloseError: setError
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);