import Counter from "../counter/counter"

const Item = ({title, price, image}) => {
  return (
    <>
    <div className="card" style="width: 18rem;">
        <img src={image} className="card-img-top" width={"200px"} alt={title} />
        <div className="card-body">
            <h5 className="card-title">{price}</h5>
            <p className="card-text">{title}</p>
            <Counter />
            <a href="#" className="btn btn-primary">Comprar</a>
        </div>
    </div>
    </>
  )
}

export default Item