const misProductos = [
  { id: "1", nombre: "BATTLEFIELD 1", precio: 500, stock:10, img: "../img/1.jpg", idCat: "1" },
  { id: "2", nombre: "SPIDER-MAN", precio: 300, stock:10, img: "../img/2.jpg", idCat: "1" },
  { id: "3", nombre: "SECOND SON", precio: 200, stock:10, img: "../img/3.jpg", idCat: "1" },
  { id: "4", nombre: "FINAL FANTASY XV", precio: 900, stock:10, img: "../img/4.jpg", idCat: "2" },
  { id: "5", nombre: "LORDS OF THE FALLEN", precio: 1000, stock:5, img: "../img/5.jpg", idCat: "2" },
  { id: "6", nombre: "CRASH BANDICOOT", precio: 500, stock:7,  img: "../img/6.jpg", idCat: "2" },
  { id: "7", nombre: "UNTIL DAWN", precio: 300, stock:7, img: "../img/7.jpg", idCat: "2" },
  { id: "8", nombre: "FOR HONOR", precio: 200, stock:7, img: "../img/8.jpg", idCat: "3" },
  { id: "9", nombre: "THE LAST OF US", precio: 900, stock:7, img: "../img/9.jpg", idCat: "3" },
  { id: "10", nombre: "WATCH DOGS LEGION", precio: 1000, stock:12, img: "../img/10.jpg", idCat: "3" },
  { id: "11", nombre: "NieR Automata", precio: 500,  stock:12, img: "../img/11.jpg", idCat: "3" },
  { id: "12", nombre: "HELL BLADE", precio: 400,  stock:12, img: "../img/12.jpg", idCat: "3" },
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


