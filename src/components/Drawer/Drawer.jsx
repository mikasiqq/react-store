import React from "react";
import axios from "axios";
import classes from "./Drawer.module.scss"
import Description from "../Description";
import useTotal from "../../hooks/useTotal";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onCloseCart, onRemove, items = [], opened }) => {
  const { cartItems, setCartItems, totalPrice } = useTotal()
  const [orderId, setOrderId] = React.useState(null)
  const [isCompleted, setIsCompleted] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)

  const onClickComplete = async () => {
    try {
      setIsLoaded(true)
      const { data } = await axios.post ('https://62fe232b41165d66bfb9305a.mockapi.io/orders', {
        items: cartItems
      })
      setOrderId(data.id)
      setIsCompleted(true)
      setCartItems([])
      cartItems.forEach(async (elem) => {
        await axios.delete(`https://62fe232b41165d66bfb9305a.mockapi.io/cart/${elem.id}`)
        await delay (3000)
      })
    } catch (error) {
      alert('Не удалось создать заказ :(')
    }
    setIsLoaded(false)
  }

  return (
    <div className={`${classes.drawer} ${opened ? classes.drawerVisible : ''}`}>
      <div className={classes.drawerContent}>
        <div className=" flex items-center justify-between">
          <h2 className="text-2xl font-bold">Корзина</h2>
          <button onClick={onCloseCart}>
            <img
              width={31}
              height={31}
              src="/img/delete.svg"
              alt="Выйти из корзины"
            />
          </button>
        </div>
        {items.length > 0 ? 
            <div className="flex flex-col flex-1">
                <div className={classes.cartItems}>
                    {items.map((item) => (
                        <div key={item.id} className="cartItem flex items-center mt-7">
                        <img
                            className="mr-5"
                            width={70}
                            height={70}
                            src={item.imageUrl}
                            alt="Товар в корзине"
                        />
                        <div className="mr-3">
                            <p className="text-sm">{item.title}</p>
                            <b className="text-sm">{item.price} руб.</b>
                        </div>
                        <button onClick={() => onRemove(item.id)}>
                            <img
                            width={41}
                            height={41}
                            src="/img/delete.svg"
                            alt="Удалить товар из корзины"
                            />
                        </button>
                        </div>
                    ))}
                  </div>
                    <div className="cartTotal">
                    <ul>
                        <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>{totalPrice} руб.</b>
                        </li>
                        <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>{Math.floor(totalPrice * 0.05)} руб.</b>
                        </li>
                    </ul>
                    <button disabled={isLoaded} onClick={onClickComplete} className="button_green">
                        <span>Оформить заказ</span>
                        <img src="/img/next-page.svg" alt="Следующая страница" />
                    </button>
                    </div>
            </div>
        :
            <Description 
              title={isCompleted ? "Заказ оформлен" : "Корзина пустая"} 
              description={isCompleted ? `Ваш заказ №${orderId} скоро будет передан в службку курьерской доставки` : "Добавьте больше одежды, чтобы сделать заказ"} 
              image={isCompleted ? "/img/order-completed.jpg" : "/img/empty-cart.jpg"} />
        }
        
      </div>
    </div>
  );
};
export default Drawer;
