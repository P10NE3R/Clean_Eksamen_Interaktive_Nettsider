
import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import client from '../helpers/sanityClient'
import Frontpage from './pages/Frontpage'
import Books from './pages/Books'
import Book from './components/Book'
import Orders from './pages/Orders'
import Order from './components/Order'
import Layout from './components/Layout'
import Show404 from './components/show404'
import BorrowerProfile from './pages/BorrowerProfile'
import NewOrder from './components/NewOrder'
import SearchResults from './components/SearchResults'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const query = `*[_type == "borrower"][0]{ _id, name, email }`
        const user = await client.fetch(query)
        setLoggedInUser(user)
      } catch (error) {
        console.error('Error fetching logged in user:', error)
      }
    }
    fetchUser()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout loggedInUser={loggedInUser} />}>
        <Route index element={<Frontpage />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:slug" element={<Book />} />
        <Route path="orders" element={<Orders loggedInUser={loggedInUser} />} />
        <Route path="orders/new" element={<NewOrder />} />
        <Route path="orders/:id" element={<Order />} />
        <Route path="borrower/:id" element={<BorrowerProfile />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="*" element={<Show404 />} />
      </Route>
    </Routes>
  )
}

export default App
