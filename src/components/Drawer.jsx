const Drawer = ({ onCloseCart, onRemove, items = [] }) => {
  return (
    <div className="drawer ">
      <div className="drawerContent">
        <div className="flex items-center justify-between">
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
            <div>
                <div className="cartItems">
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
                            <b className="text-xs">{item.price}</b>
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
                        <b>14 999 руб.</b>
                        </li>
                        <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>749 руб.</b>
                        </li>
                    </ul>
                    <button className="button_green">
                        <span>Оформить заказ</span>
                        <img src="/img/next-page.svg" alt="Следующая страница" />
                    </button>
                    </div>
            </div>
        :
            <div className="cartEmpty flex items-center justify-center flex-col flex-1">
                <img className="mb-5" width={100} height={100} src="/img/empty-cart.jpg" alt="Корзина пуста" />
                <h2 className="text-2xl font-bold mb-2">Корзина пустая</h2>
                <p className="opacity-60 mb-10 text-center text-base">Добавьте больше одежды, чтобы сделать заказ</p>
                <button className="button_green" onClick={onCloseCart}>
                    <img src="/img/prev-page.svg" alt="Вернуться назад" />
                    <span>Вернуться назад</span>
                </button>
            </div>
        }
        
      </div>
    </div>
  );
};
export default Drawer;
