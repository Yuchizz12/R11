import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Map from '../components/Map'
import Modeling from './Modeling'
import { purple } from '@mui/material/colors'


const Home = ({ children }) => {
  // const [mode, setMode] = useState('light')
  // const theme = createTheme({
  //   palette: {
  //     mode
  //   }
  // })
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500]
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f'
      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Map color="secondary" />
      {/* <Map /> */}
    </ThemeProvider>
  )
}
export default Home
