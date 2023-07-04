import { useState } from "react";

//Paso 1, tenemos que trabajar con un estado. En este caso el estado va a ser un numerito con el número de productos seleccionados por el cliente. Tenemos un Hook que nos permite crear un estado y se llama "useState"

//Paso 2, necesito importar "useState"


const ItemCount = () => {
    const [contador, setContador] = useState(1);
    //useState me retorna un array con dos elementos. El primero es el estado actual y el segundo es una función que me actualiza ese estado. 

    const incrementar = () => {
        if(contador < 10) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>

        </>
    )
}

//Las funciones van sin parentesis porque  se ejecutarían al momento de renderizarse. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default ItemCount