import "./boton.css";

const Boton = () => {
    const handleClick = () =>{
        alert("Página en construcción");
    }
    return (
    <button className="btn btn-primary" onClick={handleClick}>Comprar</button>
    )
}

export default Boton;