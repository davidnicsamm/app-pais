import React from 'react';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';


const useStyles = makeStyles((theme) => ({
    errorStyle: {
      
      color: 'red',
    },
    
}));

const Error = ({mensaje}) => {
    const classes = useStyles();   

    return(
        <div>
            <h5 className={classes.errorStyle}>{mensaje}</h5>
        </div>
    )
}

export default Error;