import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({lock, locksValue, setLocks}) {
  const initial = ["offline", "online"]
  const [status, setStatus] = React.useState(initial[0])
 
  

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
         
          {/* <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
