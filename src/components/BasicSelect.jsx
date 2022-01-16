import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    minwidth: 350,
    height: 80
  }
})

const BasicSelect = () => {
  const classes = useStyles()
  const [mode, setMode] = React.useState('')

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <>
      <Box className={classes.root} sx={{ maxWidth: 220 }}>
        <FormControl variant="filled" className={classes.root}>
          {/* <FormLabel component="legend">モード</FormLabel> */}
          <InputLabel className={classes.root} id="demo-simple-select-label">
            ポリシー
          </InputLabel>
          <Select
            className={classes.root}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Mode"
            onChange={handleChange}>
            <MenuItem value={10}>zxz10000</MenuItem>
            <MenuItem value={20}>zxz20000</MenuItem>
            <MenuItem value={30}>zxz30000</MenuItem>
            <MenuItem value={30}>zxz40000</MenuItem>
          </Select>
          <List></List>
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
      </Box>
    </>
  )
}

export default BasicSelect