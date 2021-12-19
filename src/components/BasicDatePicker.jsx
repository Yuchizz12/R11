import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import List from '@mui/material/List'

 const BasicDatePicker = ( ) => {
  const [value, setValue] = React.useState(null)
  const [endValue, setEndValue] = React.useState(null)
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormControl component="fieldset">
          <FormLabel component="legend">モード</FormLabel>
          <DatePicker
            label="From"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Divider />
          <List></List>
          <DatePicker
            label="To"
            value={endValue}
            onChange={(newValue) => {
              setEndValue(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </LocalizationProvider>
    </>
  )
}

export default BasicDatePicker 
