import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const ColorChips =()=> {
  return (
    <Stack spacing={1} alignItems="start">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
        <Chip label="success" color="success" />
        <Chip label="success" color="success" />
      </Stack>
    </Stack>
  )
}

export default ColorChips