import React, { useRef, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Modeling from './pages/Modeling'
import NavBar from './components/NavBar'
import Other from './pages/Other'
// import TexturedBox from './components/TexturedBox'
import City from './components/city/City'
import Plane from './pages/Plane'


const App = ({ children }) => {
  const [mode, setMode] = useState('dark')
  const theme = createTheme({
    palette: {
      mode
    }
  })
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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
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
