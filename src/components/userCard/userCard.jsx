import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import {Link} from "react-router-dom";

import './userCard.css'

const UserCard = ({ id,name, surname, desc}) => {
    return <Card className={'user-card'}>
        <CardContent>
            <div>
                <div className="user-card__full-name">
                    <Typography variant={'h4'}>
                        {name}
                    </Typography>
                    <Typography variant={'h5'}>
                        {surname}
                    </Typography>
                </div>
                <Typography color="textSecondary">
                    {desc}
                </Typography>
            </div>
        </CardContent>
        <CardActions>
            <div>
                <Button  color={"primary"} variant={"contained"}>
                        <Link to={`/users/${id}`}>edit</Link>
                </Button>
            </div>
        </CardActions>
    </Card>
}

export default UserCard;