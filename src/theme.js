import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    teal500,
    teal700,
    teal900,
    red400,
    blueGrey500,
    grey900,
    grey300,
    red500,
    blueGrey50,
    white,
    darkBlack,
    teal50
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: teal500,
        primary2Color: teal700,
        primary3Color: teal900,
        accent1Color: red400,
        accent2Color: red500,
        accent3Color: blueGrey500,
        textColor: grey900,
        alternateTextColor: white,
        canvasColor: blueGrey50,
        borderColor: grey300,
        disabledColor: fade( darkBlack, 0.3 ),
        pickerHeaderColor: teal50,
        backCanvas: {
            viewportBackgroundColor: teal50,
            navDrawerBoxShadow: true
        }
    }
});

export default muiTheme;