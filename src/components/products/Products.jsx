import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './product/Product';

const products = [
    {id :1, name: "shoes", description: "running shoes", price: "$10"},
    {id :2, name: "Laptop", description: "Lenovo Laptop", price: "$5"}
];
const Products = () => {
    return (
        <main>
    
        <Grid container justify = 'center' spacing = {4}>
            {/* <h1> here we can put our actual products</h1> */}
            {products.map((Product) => (
               <Gird item  key = {Product.id} xs = {12} sm = {6} md = {4}  lg = {3}>
                   {/* <h1>product component is placed in grid component</h1> */}
                   <Product Product = {Product} />

               </Gird> 
            ))}

        </Grid>
    </main>

    )
   
}

export default Products;