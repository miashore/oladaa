import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    red700,
    red900,
    redA200,
    blue500,
    indigoA700,
    grey300,
    indigo900,
    blueGrey50,
    white,
    darkBlack,
    teal50,
    blueGrey600
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red700,
        primary2Color: red900,
        primary3Color: redA200,
        accent1Color: blue500,
        accent2Color: indigoA700,
        accent3Color: indigo900,
        textColor: blueGrey600,
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