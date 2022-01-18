import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const ColorChips = () => {
  return (
    <Stack spacing={4} alignItems="start">
      <Stack direction="row" spacing={1}>
        <Chip label="Y-Robot" color="primary" />
        <ArrowRightAltIcon />
        <Chip label="X-Robot" color="primary" />
        <ArrowRightAltIcon />
        <Chip label="A-Robot" color="primary" />
        <ArrowRightAltIcon />
        <Chip label="B-Robot" color="primary" />
      </Stack>
    </Stack>
  )
}

export default ColorChips