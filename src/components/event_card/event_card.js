import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
    return (
        <Card style={{width:'75vw', margin: '0 auto 1%'}}>
            <CardTitle actAsExpander={true} showExpandableButton={true} title="Event Name" subtitle="Event Subtitle" style={{zIndex: '0'}} />
            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <CardActions>
                    <RaisedButton label="Get Directions" />
                </CardActions>
            </CardText>
        </Card>
    )
}