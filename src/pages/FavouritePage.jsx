import Card from "../components/Card/Card"
const FavouritePage = ({items, addToFavourite}) => {
    return (
        <div className="p-11">
            <div className="flex mb-10 items-center justify-between">
                <h1 className="text-3xl font-bold">Мои закладки</h1>
            </div>
            <div className="flex flex-wrap ">
                {items
                    .map((item)=> (
                        <Card 
                            key={item.title}
                            title={item.title} 
                            price={item.price} 
                            imageUrl={item.imageUrl} 
                            isFavourite={true}
                            onAddToFavourite={()=> addToFavourite(item)}
                        />
                ))}
            </div>
        </div>
    )
}

export default FavouritePage