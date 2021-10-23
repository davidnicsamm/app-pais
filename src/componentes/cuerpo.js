import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Razas from './razas';
import SubRazas from './subrazas';
import Imagenes from './imagenes';

import Grid from '@mui/material/Grid';
import ImagenAmpliada from './imagenAmpliada';
import TextoInicial from './textoInicial';
import Encabezado from './encabezado';
import rgba from 'color-rgba';


//import CircularProgress from '@mui/material/CircularProgress';


const useStyles = makeStyles({
   
    contenedor: {
        maxWidth:"md",      
        height: '80vh',
        width: '90vw',        
    },
    
    gridContainer : {       
        
        marginTop: '15px',   
        direction:"row",
        justifyContent:"space-around",
        alignItems:"top"
    },

    gridSelect: {       
        backgroundColor: '#FFFFFF',
    },

    gridImages: {
        backgroundColor: '#ffffff',
        direction:"row",
        justifyContent:"space-between",
        textAlign:"center",
    }
});

const Cuerpo = () => {

    const classes = useStyles(); 
    const [raza,setRaza] = useState('')
    const handleChangeRaza = (newRaza) => {
        setRaza(newRaza);
        setSubRaza('');
        setMostrarLista(true)
        setProgreso(true)
    }

    const [subRaza,setSubRaza] = useState('')
    const handleChangeSubRaza = (newSubRaza) => {
        setSubRaza(newSubRaza);
        setProgreso(true)
    }

    const [img,setImg] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const handleChangeImagen = (newImg) => {
        setImg(newImg);
        setOpenModal(true);        
    }
    const handleCloseModal = () => setOpenModal(false)

    const [error, setError] = useState(true)
    const handleChangeError = (newError) => {       
        setError(newError)
    }

    const [mostrarLista, setMostrarLista] = useState(false)
  
    const handleLimpiar = () => {
        setRaza('')
        setSubRaza('')
        setMostrarLista(false)
        setError(true)
       
    }  

    const [progreso, setProgreso] = useState(true)
    const handleChangeProgreso = (newProgreso) => {
        setProgreso(newProgreso)
    }
   
   
    return(
        <Container className={classes.contenedor}>
            <Grid container className={classes.gridContainer}> 

                <Grid item md  xs={12} mb={1} className={classes.gridSelect} sx={{ mr:2, minHeight: 300, maxHeight:400, borderRadius:1,border: 1, borderColor:'#CCCCCC', boxShadow:1}}>                   
                    
                    <Encabezado cadena={"Seleccionar"}></Encabezado>
                   
                    <Box sx={{pl: 3, pr: 3}}>
                        
                        <Razas raza={raza} changeRaza={handleChangeRaza}></Razas>
                        <SubRazas raza={raza} changeSubRaza={handleChangeSubRaza} subRaza={subRaza} changeError={handleChangeError} error={error}></SubRazas>
                        <Button variant="contained" onClick={handleLimpiar}>Limpiar</Button>
                    </Box>
                    
                </Grid>
                
                <Grid item md={9} xs={12} className={classes.gridImages} sx={{border: 1,borderRadius: 1, borderColor:'#CCCCCC', boxShadow:1}}>
                    {/* <Box sx={{height:40, width:'100%', backgroundColor:'#D28D39', borderTopLeftRadius: 9, borderTopRightRadius: 9, pt: 1}}> */}
                        {/* <Typography gutterBottom variant="h5" component="div">
                            {raza}
                        </Typography> */}
                        {mostrarLista && <Encabezado cadena={subRaza + " " + raza}></Encabezado>}
                        {!mostrarLista && <Encabezado cadena={"Bienvenidos"}></Encabezado>}
                    {/* </Box> */}
                    <Box>
                     
                        {mostrarLista && <Imagenes raza={raza} subRaza={subRaza}  selectChange={handleChangeImagen} progreso={progreso} changeProgreso={handleChangeProgreso}></Imagenes>}
                        {!mostrarLista && <TextoInicial ></TextoInicial>}
                        <ImagenAmpliada imagen={img} openModal={openModal} closeModal={handleCloseModal} raza={raza} subRaza={subRaza}></ImagenAmpliada>
                    </Box>
                </Grid>
            </Grid>           
        </Container>
    )
}

export default Cuerpo;