import Counter from "../counter/counter"
import "./item.css"

const Item = ({title, price, image, stock}) => {
  return (
    <>
    <div className="card">
        <img src={image} className="card-img-top" width={"150px"} alt={title} />
        <div className="card-body">
            <h5 className="card-title">${price}</h5>
            <p className="card-text">{title}</p>
            <Counter stock={stock} />
        </div>
    </div>
    </>
  )
}

export default Item