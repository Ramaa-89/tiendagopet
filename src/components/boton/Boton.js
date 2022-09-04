import Swal from 'sweetalert';
import "./boton.css";


const Boton = () => {
    const handleClick = () =>{
        Swal("Aplicación en construcción!", {
            button: false,
          });
    }
    return (
    <button className="btn btn-primary" onClick={handleClick}>Comprar</button>
    )
}

export default Boton;