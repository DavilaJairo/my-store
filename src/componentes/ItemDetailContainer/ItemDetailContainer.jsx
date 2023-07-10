/*import React, { useEffect, useState } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div>
      {producto ? (
        <ItemDetail
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          img={producto.img}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
*/

import React, { useEffect, useState } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div>
      {producto ? (
        <ItemDetail
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          img={producto.img}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
