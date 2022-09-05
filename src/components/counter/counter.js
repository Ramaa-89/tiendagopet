import React, { useState } from 'react';
import Swal from 'sweetalert';
import Boton from '../boton/Boton';
import "./counter.css"

const Counter = (props) => {
    
    const [cantidad, setCantidad] = useState(0)

    const sumar = () => cantidad <= props.stock -1 ? setCantidad (cantidad + 1) : Swal("No hay más disponible!", {
        button: {
            text: "Volver",
          },
      });

    const restar = () => cantidad > 0 ? setCantidad (cantidad - 1) : Swal("No puede ser negativo", {timer: 1000, buttons:false,});

    return (
        <>
            <div className="contador">
                <button className="btn-counter btn btn-primary" onClick={restar} placeholder="-"> - </button>
                <div className="descripcion"> { cantidad } </div>
                <button className="btn-counter btn btn-primary" onClick={sumar} placeholder="+"> + </button>
            </div>
            <Boton/>
            <p></p>
        </>
    )

}

export default Counter;