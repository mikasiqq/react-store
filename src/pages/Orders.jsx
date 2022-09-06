import React from "react"
import Card from "../components/Card/Card"
import axios  from "axios"

const Orders = () => {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)


    React.useEffect(() => {
        (async ()=> {
            try {
                const { data } = await axios.get('https://62fe232b41165d66bfb9305a.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка при запросе заказов :(')
            }
        })()
    }, [])
    return (
        <div className="p-11">
            <div className="flex mb-10 items-center justify-between">
                <h1 className="text-3xl font-bold">Мои заказы</h1>
            </div>
            <div className="flex flex-wrap ">
                {(isLoading ? [...Array(4)] : orders)
                    .map((item, index) => (
                        <Card 
                            key={index}
                            isLoaded={isLoading}
                            {...item}
                        />
                ))}
            </div>
        </div>
    )
}

export default Orders