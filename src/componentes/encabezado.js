import React ,{useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {primeraLetraMayuscula} from '../extras/funciones';



const Encabezado = ({cadena}) => {
    const [mensaje, setMensaje] = useState('');

    

    useEffect(() => {
        setMensaje(cadena.toUpperCase())
    },[cadena])


    return(
        <Box sx={{height:45, width:'100%', borderTopRightRadius: 2, borderTopLeftRadius: 2}}>
            <Box sx={{height:2, width:'100%', backgroundColor:'#D28D39', borderTopRightRadius: 2, borderTopLeftRadius: 2, pt: 1}}>
                <Typography gutterBottom component="div" sx={{mt: 1, pl: 1, textAlign:'left', fontSize: '1.1em', color: '#253030'}}>
                    {mensaje}
                </Typography> 
            </Box>
        </Box>

    )
       

}

export default Encabezado