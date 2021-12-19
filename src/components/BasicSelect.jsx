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

 const BasicSelect = ()=> {
  const [mode, setMode] = React.useState('')

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl variant="filled" fullWidth>
          {/* <FormLabel component="legend">モード</FormLabel> */}
          <InputLabel id="demo-simple-select-label">ポリシー</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mode} label="Mode" onChange={handleChange}>
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