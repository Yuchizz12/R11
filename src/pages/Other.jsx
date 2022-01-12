import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import logo from '../resources/images/mapping_steves_apartment.gif'

const Other = ({ children }) => {
  const [mode, setMode] = useState('light')
  const theme = createTheme({
    palette: {
      mode
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <img src={logo} alt="loading..." />
    </ThemeProvider>
  )
}
export default Other
