import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({status, setStatus, initial}) {

  
  const handleChange = (event) => {
    setStatus(event.target.value);
  };


  return (
    <div >
      <FormControl sx={{marginTop: "2rem",   minWidth:300, width:400 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          margin="dense"
          value={status}
          onChange={handleChange}
          autoWidth
          label="Search"
        >
          {
           initial?.length && initial.map((item, index) => (
              <MenuItem sx={{  minWidth:300, width:400 }} value={item} key={index}>{item}</MenuItem>
            ))
          
          }
        </Select>
      </FormControl>
    </div>
  );
}
