import React, {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios  from 'axios';

  
const Razas = ({raza,changeRaza}) => {

    //const classes = useStyles();    
    const [listadoRazas,setListadoRazas] = useState([])
    const [seleccion, setSeleccion] = useState('')

  

    //Obtiene el listado de todas las razas
    const obtenerListadoRazas = () =>{
        //Consulta la API
        const urlListado = "https://dog.ceo/api/breeds/list/all"
        
        axios(urlListado)
            .then(
                res => {                    
                    const listaEncabezado = Object.keys(res.data.message)                    
                    setListadoRazas(listaEncabezado) 
                   
                }
            )
    }  
  
    //Evita que se cargue el listado por cada renderizado del componente
    useEffect(() => {
        obtenerListadoRazas()        
    },[]);

    return(
        <div>
            {/* <h4>Buscar razas</h4> */}
            {/* <FormControl className={classes.formControl}> */}
           
           <FormControl fullWidth>

            <Autocomplete
                disablePortal
                id="combo-box-raza"
                options={listadoRazas}
                value={raza}
                onChange={(event,newValue) =>{
                    if(newValue == null){
                        newValue = ""
                    }
                    changeRaza(newValue)
                }}
                onInputChange={ (e) => {
                    if(e != null){
                        changeRaza(e.target.value)
                    }                    
                }}             
               
                
                sx={{ mb: 2, mt: 5, height: 35 }}
                renderInput={(params) => <TextField {...params} label="Raza" />}
            />


                {/* <InputLabel id="selctLabelName" sx={{ mt: 3}}>Raza</InputLabel>
                <Select
                    sx={{ mb: 2, mt: 5, height: 35}}
                    labelId = "selectLabelName"
                    id = "selectName"
                    value={raza}
                    lsabel="Raza"
                    onChange={ (e) => {changeRaza(e.target.value)}}
                  
                    

                >
                    {listadoRazas.map((raza) => (
                        <MenuItem key={raza} value={raza}>
                            {raza}
                        </MenuItem>
                    ))}

                </Select> */}
                 
            </FormControl>
        </div>
    );
}

export default Razas;