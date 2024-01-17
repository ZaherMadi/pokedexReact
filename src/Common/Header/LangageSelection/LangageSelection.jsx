import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import ParamPhoto from "./param.png";

function LangageSelection({ LanguageSelected, setLanguage }) {
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <a href="#"> 
                <img src={ParamPhoto} alt="param" width={80} />
            </a>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Langue</InputLabel>
  <Select
    labelId="select-languages-label"
    id="select-langages"
    value={LanguageSelected}
    label="LabelLangue"
    onChange={handleChangeLanguage}
  >

    <MenuItem value="fr">🇫🇷</MenuItem>
    <MenuItem value="en">🇺🇸</MenuItem>
    <MenuItem value="de">de</MenuItem>
    <MenuItem value="es">🇪🇸</MenuItem>
    <MenuItem value="ja">ja</MenuItem>

  </Select>
</FormControl>
            
        
        
        </div>
    );
}

export default LangageSelection;

