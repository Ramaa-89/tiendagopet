import imgError from '../../assets/img/fondo.svg';
import "./style.css";
import data from "../mockData";

const FunctionalComponent = () => {
    return (
        <div className="bodyerror">
            <img src={imgError} className="error2" alt="página en construcción" />
        </div>
    )
} 

export default FunctionalComponent;