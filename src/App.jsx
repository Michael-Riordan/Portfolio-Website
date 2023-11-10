import './App.css'
import About from './components/about'
import LandingPage from './components/landingPage'
import NavBar from './components/navBar'
import './css/NavBar.css'
import './css/LandingPage.css'
import'./css/about.css'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<LandingPage />} />
        <Route path='/About' element={<About />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
