import React ,{useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Error from './error'
import axios from 'axios';



const SubRazas = ({raza, changeSubRaza, subRaza, changeError, error}) => {

    // const classes = useStyles()
    const [listadoSubRazas,setListadoSubRazas] = useState([])
   

   
    const obtenerListadoSubRazas = () => {

        //Consulta a la API
        const urlListado = "https://dog.ceo/api/breed/" + raza + "/list"

        if(raza !== ""){
       
            axios(urlListado)
            .then(
                res => {
                    const lista = res.data.message                    
                    setListadoSubRazas(lista)                     
                    changeError(lista.length === 0)                  
                    
                }
            )            
        }
    }

        
    useEffect(() => {
        obtenerListadoSubRazas()
    },[raza])
    
    return(
        <div>           
           
            {!error && (<FormControl fullWidth>

                <Autocomplete
                    disablePortal
                    id="combo-box-subRaza"
                    options={listadoSubRazas}
                    value={subRaza}
                    onChange={(event,newValue) =>{
                        if(newValue == null){
                            newValue = ""
                        }
                        changeSubRaza(newValue)
                    }}
                    onInputChange={ (e) => {
                        if(e != null){
                            changeSubRaza(e.target.value)
                        }
                    }}

                    sx={{ mb: 2, mt: 5, height: 35 }}
                    renderInput={(params) => <TextField {...params} label="SubRaza" />}

                
                >


                </Autocomplete>



                {/* <InputLabel id="selectLabelName" sx={{ mt: 3}}>SubRaza</InputLabel>
                <Select
                    sx={{ mb: 2, mt: 5, height: 35}}
                    labelId="selectLabelName"
                    value={subRaza}
                    onChange={ (e) => {changeSubRaza(e.target.value)}}
                >
                    {
                        listadoSubRazas.map(
                            (subRaza) => (
                                <MenuItem key={subRaza} value={subRaza}>
                                    {subRaza}
                                </MenuItem>
                            )
                        )
                    }

                </Select> */}

            </FormControl>)}

            {error && <Error mensaje={"No hay subrazas"}></Error>}

        </div>
    );
}

export default SubRazas;