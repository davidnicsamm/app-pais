import React ,{useState, useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { CircularProgress } from '@mui/material';

import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';



import axios from 'axios';


const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      alignItems: 'center',
      
    },
    imageList: {
      width: 700,
      height: 450,
    },
  });

  

const Imagenes = ({raza, subRaza, selectChange, progreso, changeProgreso}) => {

    let urlListado = ""


    const classes = useStyles(); 
    const [listadoImagenes, setListadoImagenes] = useState([])
    
    
    if(subRaza !== ""){         
        urlListado = "https://dog.ceo/api/breed/" + raza + "/" + subRaza + "/images"
    }else{       
        urlListado = "https://dog.ceo/api/breed/" + raza + "/images"        
    }

    const obtenerListado = () => {
        axios(urlListado)
        .then(
            res => {
                setListadoImagenes(res.data.message)
                changeProgreso(false)
            }
        )
    }

    useEffect(() => {
        obtenerListado()
    },[urlListado])   
   
    return(
    
        <div className={classes.root}>
            {progreso && <CircularProgress></CircularProgress>}
            
            {!progreso && <ImageList className={classes.imageList} cols={3} variant="masonry" gap={8}>
                {listadoImagenes.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&Eauto=format`}
                            // srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt="Imagen"
                            loading="lazy"
                            onChange={ (e) => {selectChange(e.target.value)}}
                            
                        />

                        <ImageListItemBar
                            // title={item.title}
                            subtitle={'Ampliar Imagen'}
                            actionIcon={
                            
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                                onClick={() => {selectChange(item)}}
                            >             
                                    
                                <ZoomOutMapOutlinedIcon />
                                
                                
                            </IconButton>
                            }
                        />
                        </ImageListItem>
                ))}
            </ImageList>}

            
        </div>
    
    )
}


export default Imagenes