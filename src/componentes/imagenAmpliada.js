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
import {primeraLetraMayuscula} from '../extras/funciones';
import Backdrop from '@mui/material/Backdrop';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 5,
    boxShadow: 24,

    
  
  };

const ImagenAmpliada = ({imagen, openModal, closeModal,raza, subRaza}) => {

    // const [mensaje, setMensaje] = useEffect('')

    // useEffect(() => {
        
    // })

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
               
                <Box sx={style}>
                    <Card sx={{ width: 450 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                            
                                sx={{maxHeight: 500, maxWidth: 450}}
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
                            <CardActions>
                                {/* <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button> */}
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Box>
            </Modal>
      
    )

}

export default ImagenAmpliada