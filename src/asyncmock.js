const misProductos = [
    { id: 1, nombre: "game1", precio: 500, img: "public/img/1.jpg" },
    { id: 2, nombre: "game2", precio: 300, img: "public/img/2.jpg" },
    { id: 3, nombre: "game3", precio: 200, img: "public/img/3.jpg" },
    { id: 4, nombre: "game4", precio: 900, img: "public/img/4.jpg" },
    { id: 5, nombre: "game5", precio: 1000, img:"public/img/5.jpg" },
    { id: 6, nombre: "game6", precio: 500, img: "public/img/6.jpg" },
    { id: 7, nombre: "game7", precio: 300, img: "public/img/7.jpg" },
    { id: 8, nombre: "game8", precio: 200, img: "public/img/8.jpg" },
    { id: 9, nombre: "game9", precio: 900, img: "public/img/9.jpg" },
    { id: 10, nombre:"game10", precio: 1000, img:"public/img/10.jpg" },
];
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000);
    });
};



