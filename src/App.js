import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  const [items, setItems] = useState ([])
  const [cartItems, setCartItems] = useState([])
  const [favouriteItems, setFavouriteItems] = useState([])
  const [searchedItem, setSearchedItem] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    async function fetchData () {
      const cartResponse = await axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/cart')
      const favouriteResponse = await axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/favourite')
      const itemsResponse = await axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/items')
      
      setIsLoading(false)
      setCartItems(cartResponse.data)
      setFavouriteItems(favouriteResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])  

  const addToCart = (item) => {
    console.log(item)
    if (cartItems.find ((obj) => Number(obj.id) === Number(item.id))) {
      axios.delete(`https://62fe232b41165d66bfb9305a.mockapi.io/cart/${item.id}`)
      setCartItems(prev => prev.filter(obj => Number(obj.id) !== Number(item.id)))
    } else {
      axios.post('https://62fe232b41165d66bfb9305a.mockapi.io/cart', item)
      setCartItems(prev => [...prev, item])
    }
  }

  const removeFromCart = (id) => {
    axios.delete(`https://62fe232b41165d66bfb9305a.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const addToFavourite = async (item) => {
    try {
      if (favouriteItems.find((favouriteItem) => Number(favouriteItem.id) === Number(item.id))) {
        axios.delete(`https://62fe232b41165d66bfb9305a.mockapi.io/favourite/${item.id}`)
        setFavouriteItems((prev) => prev.filter((obj) => Number(obj.id) !== Number(item.id)));
      } else {
        const response = await axios.post('https://62fe232b41165d66bfb9305a.mockapi.io/favourite', item )
        const data = await response.data
        setFavouriteItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное!')
    }
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onRemove={removeFromCart} onCloseCart={() => setCartOpened(false)} /> }
      <Header onClickCart={()=> setCartOpened(true)} />
      <Routes>
        <Route path="/" element={ <MainPage items={items} isLoaded={isLoading} cartItems={cartItems} searchedItem={searchedItem} setSearchedItem={setSearchedItem} addToFavourite={addToFavourite} addToCart={addToCart} /> }></Route>
        <Route path="/favourite" element={<FavouritePage items={ favouriteItems } addToFavourite={addToFavourite} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
