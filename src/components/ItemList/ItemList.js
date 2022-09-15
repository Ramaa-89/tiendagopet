import Item from '../Item/Item';

const ItemList = ({ lista }) => {
  return (
    <>
    {
    lista.map((product) => (
      <div className="col" key={product.id}>
        <Item 
        title={product.title} 
        price={product.price}
        image={product.image} 
        />
      </div>
    ))
    }
    </>
  )
}

export default ItemList;