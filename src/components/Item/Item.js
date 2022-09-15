import Counter from "../counter/counter"
import "./item.css"

const Item = ({title, price, image}) => {
  return (
    <>
    <div className="card" width={"18rem"}>
        <img src={image} className="card-img-top" width={"150px"} alt={title} />
        <div className="card-body">
            <h5 className="card-title">${price}</h5>
            <p className="card-text">{title}</p>
            <Counter />
        </div>
    </div>
    </>
  )
}

export default Item