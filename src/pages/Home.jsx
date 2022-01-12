import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import ButtomAppBar from './components/Header'
// import DateAdapter from '@mui/lab/AdapterDateFns'
// import DateAdapter from '@mui/lab/AdapterDateFns'
import Map from '../components/Map'
import Modeling from './Modeling'
// import Model from '../components/Model'

const Home = ({ children }) => {
  const [mode, setMode] = useState('light')
  const theme = createTheme({
    palette: {
      mode
    }
  })
  return (
    <ThemeProvider theme={theme}>
      {/* <LocalizationProvider dateAdapter={DateAdapter}>{children}</LocalizationProvider> */}
      <CssBaseline />
      <Map />
      {/* <Model /> */}
      {/* <Button variant='contained'>Hello World</Button> */}
    </ThemeProvider>
  )
}
export default Home
