import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6">
                        Test task at Merehead (Vlasenko Ivan)
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;