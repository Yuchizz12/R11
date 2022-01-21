import React, { useRef, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Modeling from './pages/Modeling'
import NavBar from './components/NavBar'
import Other from './pages/Other'
import City from './components/City'
import Plane from './pages/Plane'
import { purple } from '@mui/material/colors'


const App = ({ children }) => {
  // const [mode, setMode] = useState('dark')
  // const theme = createTheme({
  //   palette: {
  //     mode
  //   }
  // })
  // const theme = createTheme({
  //   status: {
  //     danger: '#e53e3e'
  //   },
  //   palette: {
  //     primary: {
  //       main: '#90caf9',
  //       darker: '#053e85'
  //     },
  //     neutral: {
  //       main: '#64748B',
  //       contrastText: '#fff'
  //     }
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
      <Router>
        <NavBar color="secondary" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/modeling" element={<Modeling />} />
        </Routes>
        <Routes>
          <Route path="/other" element={<Other />} />
        </Routes>
        <Routes>
          <Route path="/city" element={<City />} />
        </Routes>
        <Routes>
          <Route path="/plane" element={<Plane />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
export default App
