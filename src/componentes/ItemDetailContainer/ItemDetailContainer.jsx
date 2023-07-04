import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/itemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect( () => {
        getUnProducto(10)
            .then(res => setProducto(res))
    }, [])
    return (
    <div>
        <>ItemDetail {...producto}</>
    </div>
    )

}

export default ItemDetailContainer