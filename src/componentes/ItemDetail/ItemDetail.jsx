import React from "react"

const ItemDetail = ({id, nombre, precio, img} ) => {
    return(
        <div>
            <h2> Nombre</h2>
            <h3> Precio</h3>
            <h3> ID </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem temporibus unde quae illo esse error aut tempore? Tenetur culpa blanditiis neque, expedita esse amet veniam non cupiditate assumenda ab.</p>
            lo
            <img src={img} alt={nombre} />

        </div>
    
    )

}


export default ItemDetail;