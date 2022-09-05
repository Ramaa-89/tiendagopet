import React, { useState } from 'react';
import Swal from 'sweetalert';
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
        <div className="descripcion">Seleccionaste {cantidad} monedas</div>
        <div className="contador">
            <button className="btn-counter btn btn-primary" onClick={restar} placeholder="-"> - </button>
            <button className="btn-counter btn btn-primary" onClick={sumar} placeholder="+"> + </button>
        </div>
        </>
    )

}

export default Counter;