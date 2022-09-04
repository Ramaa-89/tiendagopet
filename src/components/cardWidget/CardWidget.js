import carrito from '../../assets/img/carrito.png';
import "./cardwidget.css"

const CardWidget = () => {

    return <div className="widgetTop"><img className="widget navbar-brand " src={carrito} alt="carrito de compras"/>
           </div>;

};

export default CardWidget;