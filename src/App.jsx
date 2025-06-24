import { Accueil } from './pages/accueil/Accueil'
import { Produit } from './pages/produit/Produit'
import './App.css'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />
    },
    {
      path: "/produit",
      element: <Produit />
    }

  ])
  
  return (
    <RouterProvider router={router} />
  )

}

export default App
