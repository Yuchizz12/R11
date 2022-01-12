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
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#e0e0e0'
    }
  }
})

const NavBar = ()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" theme={theme}>
        <ThemeProvider theme={theme}>
          <Toolbar>
            <LeftDrawer />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <ColorChips />
            </Typography>
            <DraggableDialog />
            <RightDrawer />
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </Box>
  )
}

export default NavBar