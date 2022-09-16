import data from '../mockData';
import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts
            .then((response) => {
                setProductList(response);
            })
            .catch((error) => console.log(error));
    },[]);

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(data);
            }, 2000);
        });
  
    
    return (
        <>
        <div className="container">
        <div className="row">
        <ItemDetail lista={productList} />
        </div>
        </div>
        </>
    );  
};

export default ItemListContainer;