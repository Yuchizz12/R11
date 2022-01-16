import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const FormControlLabelPosition = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel value="start" control={<Checkbox size="small" />} label="予測" labelPlacement="start" />
        <FormControlLabel value="start" control={<Checkbox size="small" />} label="追跡" labelPlacement="start" />
        <FormControlLabel value="start" control={<Checkbox size="small" />} label="Bottom" labelPlacement="start" />
        <FormControlLabel value="start" control={<Checkbox size="small" />} label="End" labelPlacement="start" />
      </FormGroup>
    </FormControl>
  )
}
export default FormControlLabelPosition
