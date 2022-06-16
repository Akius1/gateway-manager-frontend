import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({lock, locksValue, setLocks}) {
 

  const handleChange = (event) => {
    setLocks(event.target.value);
  };


  return (
    <div >
      <FormControl sx={{marginTop: 2,   minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Search Door</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          margin="dense"
          value={locksValue}
          onChange={handleChange}
          autoWidth
          label="Search"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            lock?.length ? 
            lock.map((item) => (
              <MenuItem value={item?.id} key={item?.id}>{item?.name}</MenuItem>
            )):
            ""
          }
         
          {/* <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
