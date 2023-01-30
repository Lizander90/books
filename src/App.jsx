import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UseLibrary, { GlobalContextLibrary } from './context/useLibrary'
import AddBook from './pages/addBook'
import HomeBook from './pages/home'
import PageNoFound from './pages/pageNotFound'
import ViewBook from './pages/viewBook'

function App() {
  const ContextLib = useContext(GlobalContextLibrary)

  return <UseLibrary>
    <Routes>
      <Route path='/' element={<HomeBook />} />
      <Route path={'add'} element={<AddBook />} />
      <Route path={'view/:idBookParam'} element={<ViewBook />} />
      <Route path={'*'} element={<PageNoFound />} />
    </Routes >
  </UseLibrary>
}

export default App
