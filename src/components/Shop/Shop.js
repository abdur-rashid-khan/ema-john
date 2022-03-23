import React, { useEffect, useState } from 'react';
import Card from '../card/Card';


import Product from '../products/Product';
import './Shop.css'
const Shop = () => {
   const [products , setProducts]=useState([]);
   const [card, setCard]=useState([]);

   useEffect(()=>{
      fetch('products.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
   },[]);
   // product add
   const addProduct=(product)=>{
      const newCard=[...card,product];
      setCard(newCard);
   }
   return (
      <div className='shop-container'>
         <div className="all-product">
            {
               products.map(product=><Product data={product} key={product.id} added={addProduct}></Product>)
            }
         </div>
         <div className="shopping-card">
            <div className="card">
               <Card data={card}></Card>
            </div>
         </div>
      </div>
   );
};

export default Shop;