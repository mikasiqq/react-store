import React from 'react';
import AppContext from '../context';

const Description = ({ title, description, image }) => {
    const { setCartOpened } = React.useContext(AppContext)
    return (
        <div className="cartEmpty flex items-center justify-center flex-col flex-1">
            <img className="mb-5" width={100} height={100} src={image} alt="Корзина пуста" />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="opacity-60 mb-10 text-center text-base">{description}</p>
            <button className="button_green" onClick={() => {setCartOpened(false)}}>
                <img src="/img/prev-page.svg" alt="Вернуться назад" />
                <span>Вернуться назад</span>
            </button>
        </div>
    );
}

export default Description;
