import React from 'react';
import Paper from 'material-ui/Paper';
const About = () => {
    const styles = {
        paper: {position: 'relative', height: '90%', width: '80%'},
        heading: {marginLeft: '1%', textAlign: 'center', paddingTop: '1%'},
        us_pic: {height: '60%', width: '60%', marginLeft: '20%'},
        heading4: {marginLeft: '2%', paddingBottom: '2%'},
        para: {textAlign: 'center', fontSize: '13px'}
    };
    return (
        <Paper>
            <div>
                <h1 style={styles.heading}>About Us</h1>
                <img style={styles.us_pic} src="../../src/components/imgs/beats_peeps.jpg"/>
                <p style={styles.para}>(From Left to Right: Sean Mee, Miranda Bashore, and Kevin Nguyen)</p>
                <h4 style={styles.heading4}>Thanks for coming to our site! We hope you enjoyed our application and found it useful. In Hawaiian, <em>"ola"</em> means life, and <em>"daa"</em> means dreaming about activities. Together, our goal at Oladaa, is to help people of various activity levels, find events around their communities, in the hopes of bettering one's life.</h4>
            </div>
        </Paper>
    )
};
export default About;