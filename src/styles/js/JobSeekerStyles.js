import { StyleSheet } from 'aphrodite';

const JobSeekerStyles = StyleSheet.create({

    white: {
        backgroundColor:'white'
    },

    panel: {
        width:'450px',
        height: 'auto',
        margin: '50px auto',
        boxShadow: '0 0 15px 5px #cccccc',
        padding:'15px 25px',
        fontFamily: 'Raleway, sans-serif',
        color: '#1A75FF'

    },

    formSuccess: {
        color: 'green',
        fontWeight: 'bold'
    },

    div: {
        fontFamily: 'Raleway,sans-serif',
    },

    form: {
        padding:'5px',
        margin: '25px auto'
    },

    marginTopForm: {
        marginTop: '7px'
    },

    salaryheader: {
        textAlign: 'center',
    },

    inputText: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box'
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
        fontWeight: 'bold',
        fontSize: 'small'
    },
})

export default JobSeekerStyles;
