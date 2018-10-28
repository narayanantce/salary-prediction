import {StyleSheet} from 'aphrodite'


const JobSeekerStyles = StyleSheet.create({

    white: {
        backgroundColor:'white'
    },

    panel: {
        width:'450px',
        height: '650px',
        margin: '50px auto',
        boxShadow: '0 0 15px 5px #cccccc',
        padding:'15px 25px',
        fontFamily: 'Raleway, sans-serif',
        color: '#1A75FF'

    },

    div: {
        fontFamily: 'Raleway,sans-serif',
    },

    form: {
        padding:'15px',
        margin: '15px auto'
    },

    salaryheader: {
        textAlign: 'center',
    },
      
    button: {
        backgroundColor: '#1A75FF',
        color: '#ffffff !important',
        border: '0px',
        borderRadius: '25px',
        fontFamily: 'Raleway,sans-serif',
        ':hover': {
            outline: 'none',
            backgroundColor: '#005ce6',
            textDecoration:'none'
        },
        height: '30px',
        width: '60%',
        textAlign: 'center',
        position: 'relative',

    },
})


export {JobSeekerStyles};
