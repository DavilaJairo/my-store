const misProductos = [
  { id: "1", nombre: "game1", precio: 500, img: "../img/1.jpg", idCat: "1" },
  { id: "2", nombre: "game2", precio: 300, img: "../img/2.jpg", idCat: "1" },
  { id: "3", nombre: "game3", precio: 200, img: "../img/3.jpg", idCat: "1" },
  { id: "4", nombre: "game4", precio: 900, img: "../img/4.jpg", idCat: "1" },
  { id: "5", nombre: "game5", precio: 1000, img: "../img/5.jpg", idCat: "1" },
  { id: "6", nombre: "game6", precio: 500, img: "../img/6.jpg", idCat: "2" },
  { id: "7", nombre: "game7", precio: 300, img: "../img/7.jpg", idCat: "2" },
  { id: "8", nombre: "game8", precio: 200, img: "../img/8.jpg", idCat: "2" },
  { id: "9", nombre: "game9", precio: 900, img: "../img/9.jpg", idCat: "2" },
  { id: "10", nombre: "game10", precio: 1000, img: "../img/10.jpg", idCat: "2" },
  { id: "11", nombre: "game11", precio: 500, img: "../img/11.jpg", idCat: "2" },
  { id: "12", nombre: "game12", precio: 400, img: "../img/12.jpg", idCat: "2" },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id.toString() === id);
      resolve(producto);
    }, 100);
  });
};
/*export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};*/

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};


