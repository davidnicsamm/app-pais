import React, {useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveIcon from '@mui/icons-material/Save';
import ToolTip from '@mui/material/Tooltip';
import{ saveAs } from 'file-saver';
import axios from 'axios';
import Imagenes from './imagenes';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
});
  

const useStyles = makeStyles({
    boxModal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      
        bgcolor: 'background.paper',
        border: '0px solid #000',
        borderRadius: 5,
        boxShadow: 24, 

        [theme.breakpoints.down("sm")]:{
            width: 300,
        },
       
        
        [theme.breakpoints.between("sm","md")]:{
            width: 400,
        },

        [theme.breakpoints.up("md")]:{
            width: 450,
        }
      },

    cardModal:{ 
       
        borderRadius: 5,

        [theme.breakpoints.down("sm")]:{
            width: 300,
        },
        
        [theme.breakpoints.between("sm","md")]:{
            width: 400,
        },

        [theme.breakpoints.up("md")]:{
            width: 450,
        }

      

    

    },

    cardMediaModal:{
        maxHeight: 500,
        


        [theme.breakpoints.down("sm")]:{
            maxHeight: 350,
            width: 300,
        },
        
        [theme.breakpoints.between("sm","md")]:{
            width: 400,
        },
        

        [theme.breakpoints.up("md")]:{
            width: 450,
        }
    }



})

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 450,
//     bgcolor: 'background.paper',
//     border: '0px solid #000',
//     borderRadius: 5,
//     boxShadow: 24,   
  
//   };

const handleSaveImage = (imagen) => {
    saveAs(
        imagen,
        "foto.jpg"
    )
   
}

const ImagenAmpliada = ({imagen, openModal, closeModal,raza, subRaza}) => {

    const classes = useStyles()

    return(            
            <Modal
                open={openModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
               
                {/* <Box sx={style} className={classes.boxModal}> */}
                <Box className={classes.boxModal}>
                    <Card className={classes.cardModal}>
                            <CardActionArea>
                                <Box sx={{textAlign:'right'}} > 
                                    <ToolTip title="Guardar imagen">
                                            <IconButton onClick={() => {handleSaveImage(imagen)}} >
                                                <SaveIcon color='primary' />
                                            </IconButton>
                                    </ToolTip>
                                   
                                    <ToolTip title='Cerrar'>
                                        <IconButton  tooltip="Cerrar" onClick={() => {closeModal()}}>
                                        <HighlightOffIcon color='error'></HighlightOffIcon> 
                                        </IconButton>  
                                    </ToolTip>                              

                                </Box>
                            </CardActionArea>
                            <CardMedia
                                className={classes.cardMediaModal}
                                component="img"
                                image={imagen}
                                // alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom component="div" sx={{mt: 1, pl: 1, textAlign:'left', fontSize: '1.1em', color: '#253030'}}>
                                    {subRaza.toUpperCase()} {raza.toUpperCase()}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography> */}
                            </CardContent>
                            {/* <CardActions>
                                
                                
                               
                            </CardActions> */}

                       
                    </Card>
                </Box>
            </Modal>
      
    )

}

export default ImagenAmpliada