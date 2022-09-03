import imgError from '../../assets/img/fondo.svg';
import "./style.css";

const FunctionalComponent = () => {
    return (
        <div className="bodyerror">
            <img src={imgError} className="error2" alt="página en construcción" />
        </div>
    )
} 

export default FunctionalComponent;