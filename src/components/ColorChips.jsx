import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const ColorChips =()=> {
  return (
    <Stack spacing={4} alignItems="start">
      <Stack direction="row" spacing={1}>
        <Chip label="Y-Robot" color="primary" />
        <Chip label="X-Robot" color="success" />
        <Chip label="Roomba" color="success" />
        <Chip label="Drone" color="success" />
      </Stack>
    </Stack>
  )
}

export default ColorChips