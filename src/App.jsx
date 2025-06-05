
import { RouterProvider } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { Router } from './Router/Router'

function App() {


  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
