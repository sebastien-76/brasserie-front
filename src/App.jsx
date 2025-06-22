import { useState } from 'react'
import { Accueil } from './pages/Accueil/Accueil'
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
