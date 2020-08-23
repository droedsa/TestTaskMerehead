import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import Header from "../header/header";
import {BrowserRouter, Route, useRouteMatch, Switch} from "react-router-dom";
import UserList from "../userList/userList";
import UserDescContainer from "../userDetails/userDetailsContainer";
import store from '../../store'
import {fetchUsers} from "../../actions/users";

const App = () => {
    useEffect(() => {
        store.dispatch(fetchUsers());
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path='/'>
                            <UserList/>
                        </Route>
                        <Route path='/users'>
                            <Details/>
                        </Route>
                    </Switch>
                </Container>
            </BrowserRouter>
        </>
    );
};

function Details() {
    let { path } = useRouteMatch();
    return (<Switch>
        <Route exact path={path}>
            <UserDescContainer/>
        </Route>
        <Route path={`${path}/:id`}>
            <UserDescContainer/>
        </Route>
    </Switch>)
}

export default App;