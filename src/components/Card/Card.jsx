import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import classes from './Card.module.scss'
import AppContext from '../../context';

const Card = ({id, title, imageUrl, price, onAddToCart, onAddToFavourite, isFavourite = false, isLoaded = false}) => {
    const { isItemAdded } = React.useContext(AppContext)
    const [isAddedToFavourite, setIsAddedToFavourite] = useState(isFavourite)
    const item = {id, itemId: id, title, imageUrl, price}

    const onClickPlus = () => {
      onAddToCart(item)
    }
    const onClickFavourite = () => {
      setIsAddedToFavourite(!isAddedToFavourite)
      onAddToFavourite(item)
    }
    return (
        <div className={classes.card}>
          { isLoaded ? 
            <ContentLoader
              speed={2}
              width={155}
              height={250}
              viewBox="0 0 155 265"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
              <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
              <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
              <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
              <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
            :
            <>
              {onAddToFavourite && <button onClick={onClickFavourite}>
                <img width={20} height={20} src={isAddedToFavourite ? '/img/favourite.png' : '/img/not-favourite.png'} alt="Добавление в избранное" />
              </button>}
              <img className="m-auto" width={133} height={112} src={imageUrl} alt="Товар" />
              <p className="mt-3 text-sm">{title}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex flex-col">
                  <span className="text-xs opacity-50">Цена:</span>
                  <b className="text-sm">{price} руб.</b>
                </div>
                {onAddToCart && <button onClick={onClickPlus}>
                  <img width={32} height={32} src={isItemAdded(id ) ? '/img/checkmark.png' : '/img/plus.svg'} alt="Добавление в корзину" />
                </button>}
              </div>
            </>

          }
          </div>
    )
}
export default Card;