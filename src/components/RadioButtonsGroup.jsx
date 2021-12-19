import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'


const RadioButtonsGroup = ()=> {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">モード</FormLabel>
      <RadioGroup aria-label="gender" defaultValue="play" name="radio-buttons-group">
        <FormControlLabel size="small" value="play" control={<Radio />} label="再生" />
        <FormControlLabel size="small" value="replay" control={<Radio />} label="巻き戻し" />
        <FormControlLabel size="small" value="fastplay" control={<Radio />} label="早送り" />
      </RadioGroup>
      <Box
        sx={{
          mx: 'auto',
          // bgcolor: 'primary.main',
          color: '#fff',
          width: 200,
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: 'center'
        }}>
        {/* Centered element */}
        <Stack justifyContent="center" alignItems="end" direction="row" spacing={2}>
          <Button size="small" variant="outlined">
            実行
          </Button>
          <Button size="small" variant="outlined">
            クリア
          </Button>
        </Stack>
      </Box>
    </FormControl>
  )
}

export default RadioButtonsGroup