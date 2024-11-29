import React from 'react'
import { FetchAPI } from "../../utils/API/fetchAPI";
import Product from '@/components/cards/product';
import List from '@/components/cards/list';


export default async function Products() {
  
  const url = 'https://dummyjson.com/products';
  let Data: any = await FetchAPI({ url });
  let Products = Data.products.map((product: any) => {
    return {
      name: product.title,
      img: product.thumbnail,
      id:product.id,
      product
    }
  })
  return (
    <div className='flex'>
      <div className='grid grid-cols-1'>

        {Products.map((product: any) => {
          return <Product {...product} key={product.id}/>
        })}
      </div>
      <List></List>
    </div>
  )
}
