import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <header className="flex justify-between p-11">
            <Link to="/">
                <div className="flex items-center">
                    <img width={40} height={40} src="/img/logo.png" alt="Логотип"/>
                    <div className="ml-3">
                        <h3 className="text-xl font-bold uppercase leading-5">React Store</h3>
                        <p className="text-sm">Магазин реактивной одежды</p>
                    </div>
                </div>
            </Link>
            <ul className="flex">
            <li onClick={props.onClickCart} className="flex items-center mr-7 cursor-pointer">
                <img src="/img/shopping-cart.svg" alt="Корзина" />
                <span className="ml-2">8799 руб.</span>
            </li>
            <li className="m-auto mr-7 cursor-pointer">
                <Link to="/favourite"><img src="/img/favourite.svg" alt="Раздел избранного" /></Link>
            </li>
            <li className="m-auto cursor-pointer">
                <img src="/img/user.svg" alt="Пользователь" />
            </li>
            </ul>
        </header>
    )
}
export default Header;