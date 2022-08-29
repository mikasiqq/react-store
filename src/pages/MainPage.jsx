import Card from "../components/Card/Card";

const MainPage = ({items, cartItems, searchedItem, setSearchedItem, addToFavourite, addToCart, isLoaded}) => {
  const renderItems = () => {
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchedItem.toLowerCase()))
    return (isLoaded ? [...Array(4)] : filteredItems)
    .map((item, index)=> (
      <Card 
        key={index}
        onAddToFavourite={()=> addToFavourite(item)}
        onAddToCart={() => addToCart(item)} 
        isCart={cartItems.some(obj => Number(obj.id) === Number(item.id))} 
        isLoaded={isLoaded}
        {...item}
      />
  ))
  }
  
  return (
        <div className="p-11">
        <div className="flex mb-10 items-center justify-between">
          <h1 className="text-3xl font-bold">Вся одежда</h1>
          <div className="search flex">
            <img src="/img/search.svg" alt="Поиск" />
            <input 
              onChange={(event)=> setSearchedItem(event.target.value)}
              type="text" 
              placeholder="Поиск..." 
            />
          </div>
        </div>
        <div className="flex flex-wrap ">
          {renderItems()}
        </div>
      </div>
    )
}

export default MainPage