import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {Provider} from "react-redux";
import store from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
    <CssBaseline>
        <Provider store={store}>
            <App/>
        </Provider>
    </CssBaseline>
    , document.getElementById('root')
);

