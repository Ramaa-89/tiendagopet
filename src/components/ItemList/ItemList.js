import Item from '../Item/Item';

const ItemList = ({lista}) => {
  return (
    <>
    {
    lista.map((product) => (
        <Item title={product.title} price={product.price} image={product.image} />

    ))
    }
    </>
  )
}

export default ItemList;