import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import FavouritePage from "./pages/FavouritePage";
import Orders from "./pages/Orders";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState ([])
  const [cartItems, setCartItems] = useState([])
  const [favouriteItems, setFavouriteItems] = useState([])
  const [searchedItem, setSearchedItem] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    async function fetchData () {
     try {
      const [cartResponse, favouriteResponse, itemsResponse] = await Promise.all([axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/cart'), axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/favourite'), axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/items')])
      
      setIsLoading(false)
      setCartItems(cartResponse.data)
      setFavouriteItems(favouriteResponse.data)
      setItems(itemsResponse.data)
     } catch (error) {
       alert('Ошибка при запросе данных :(')
     }
    }
    fetchData()
  }, [])  

  const addToCart = async (item) => {
    try {
      const findedItem = cartItems.find ((obj) => Number(obj.itemId) === Number(item.id))
      if (findedItem) {
        setCartItems(prev => prev.filter(obj => Number(obj.itemId) !== Number(item.id)))
        await axios.delete(`https://62fe232b41165d66bfb9305a.mockapi.io/cart/${findedItem.id}`)
      } else {
        setCartItems(prev => [...prev, item])
        const {data} = await axios.post('https://62fe232b41165d66bfb9305a.mockapi.io/cart', item)
        setCartItems(prev => prev.map(obj => {
          if (obj.itemId === data.itemId) {
            return {
              ...obj,
              id: data.id
            }
          }
          return obj
        }))
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
    }
  }

  const removeFromCart = (id) => {
    try {
      axios.delete(`https://62fe232b41165d66bfb9305a.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка при удалении из корзины :(')
    }
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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.itemId) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favouriteItems, isItemAdded, addToFavourite, addToCart, setCartOpened, setCartItems}}>
      <div className="wrapper">
        <Drawer items={cartItems} onRemove={removeFromCart} onCloseCart={() => setCartOpened(false)} opened={cartOpened} />
        <Header onClickCart={()=> {setCartOpened(true); console.log(cartOpened)}} />
        <Routes>
          <Route path="/" element={ <MainPage items={items} isLoaded={isLoading} cartItems={cartItems} searchedItem={searchedItem} setSearchedItem={setSearchedItem} addToFavourite={addToFavourite} addToCart={addToCart} /> }></Route>
          <Route path="/favourite" element={<FavouritePage />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
