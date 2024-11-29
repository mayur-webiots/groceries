import React from 'react'
import {productList} from "../../store/productList"
export default function List() {
  return (
    <div className=" list">
        <p>List of products</p>
        <pre>{JSON.stringify(productList)}</pre>
      </div>
  )
}
