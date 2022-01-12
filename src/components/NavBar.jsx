import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import BasicDatePicker from './BasicDatePicker'
import StyledComponents from './StyledComponents'
import ColorChips from './ColorChips'
import ModalDialog from './ModalDialog'
import DraggableDialog from './DraggableDialog'
import { red } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  }
})

const NavBar = ()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" theme={theme}>
        <ThemeProvider theme={theme}>
          <Toolbar>
            {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
            {/* <MenuIcon /> */}
            <LeftDrawer />
            {/* </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <ColorChips />
            </Typography>
            {/* <StyledComponents /> */}
            {/* <ModalDialog /> */}
            <DraggableDialog />
            {/* <Button color="inherit">Login</Button> */}
            <RightDrawer />
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </Box>
  )
}

export default NavBar