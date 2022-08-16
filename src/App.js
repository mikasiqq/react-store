
function App() {
  return (
    <div className="wrapper">
      <div className="drawer">
        <div className="drawerContent">
          <h2 className="text-2xl font-bold">Корзина</h2>
          <div className="cartItems">
            <div className="cartItem flex items-center mt-7">
              <img className="mr-5" width={70} height={70} src="/img/items/first-item.jpeg" alt="Первый товар в корзине" />
              <div className="mr-3">
                <p className="text-sm">Мужская толстовка Nike Tech Fleece Hoodie</p>     
                <b className="text-xs">14 999 руб.</b>        
              </div>
              <button>
                <img width={61} height={61} src="/img/delete.svg" alt="Удалить товар из корзины" />
              </button>
            </div>
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
            <button>
              <span>Оформить заказ </span>
              <img src="/img/next-page.svg" alt="Следующая страница" />
            </button>
          </div>
        </div>
      </div>
      <header className="flex justify-between p-11">
        <div className="flex items-center">
          <img width={40} height={40} src="/img/logo.png" alt="Логотип"/>
          <div className="ml-3">
            <h3 className="text-xl font-bold uppercase leading-5">React Store</h3>
            <p className="text-sm">Магазин реактивной одежды</p>
          </div>
        </div>
        <ul className="flex">
          <li className="flex items-center mr-7">
            <img src="/img/shopping-cart.svg" alt="Корзина" />
            <span className="ml-2">8799 руб.</span>
          </li>
          <li className="m-auto">
            <img src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
      <div className="p-11">
        <div className="flex mb-10 items-center justify-between">
          <h1 className="text-3xl font-bold">Вся одежда</h1>
          <div className="search flex">
            <img src="/img/search.svg" alt="Поиск" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="flex">
          <div className="card">
            <button>
              <img width={20} height={20} src="/img/not-favourite.png" alt="Не добавлено в избранное" />
            </button>
            <img className="m-auto" width={133} height={112} src="/img/items/first-item.jpeg" alt="Товар" />
            <p className="mt-3 text-sm">Мужская толстовка Nike Tech Fleece Hoodie</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex flex-col">
                <span className="text-xs opacity-50">Цена:</span>
                <b className="text-sm">14 999 руб.</b>
              </div>
              <button >
                <img width={11} height={11} src="/img/plus.svg" alt="Плюс" />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="m-auto" width={133} height={112} src="/img/items/second-item.jpeg" alt="Товар" />
            <p className="mt-3 text-sm">Мужская худи adidas Originals Adicolor Trefoil</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex flex-col">
                <span className="text-xs opacity-50">Цена:</span>
                <b className="text-sm">10 999 руб.</b>
              </div>
              <button >
                <img width={11} height={11} src="/img/plus.svg" alt="Плюс" />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="m-auto" width={133} height={112} src="/img/items/third-item.jpeg" alt="Товар" />
            <p className="mt-3 text-sm">Худи Champion Hooded Sweatshirt</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex flex-col">
                <span className="text-xs opacity-50">Цена:</span>
                <b className="text-sm">8 799 руб.</b>
              </div>
              <button >
                <img width={11} height={11} src="/img/plus.svg" alt="Плюс" />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="m-auto" width={133} height={112} src="/img/items/fourth-item.jpeg" alt="Товар" />
            <p className="mt-3 text-sm">Футболка Champion Crewneck T-Shirt</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex flex-col">
                <span className="text-xs opacity-50">Цена:</span>
                <b className="text-sm">3 999 руб.</b>
              </div>
              <button >
                <img width={11} height={11} src="/img/plus.svg" alt="Плюс" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
