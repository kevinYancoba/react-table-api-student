import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import { TableEstudiante} from "./Components/TableEstuidiante";

function App() {

  const darkTheme = createTheme({
    palette : {
      mode: 'dark'
    }
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
         <TableEstudiante />
      </ThemeProvider>
      
    </>
  )
}

export default App
