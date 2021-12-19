import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const CheckBox = () => {
  return (
    <>
      <Box
        sx={{
          mx: 'auto',
          // bgcolor: 'primary.main',
          color: '#fff',
          width: 250,
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: 'center'
        }}>
        {/* Centered element */}
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked size="small" />
      </Box>
      {/* <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} /> */}
    </>
  )
}

export default CheckBox