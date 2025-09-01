import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductsDetails = () => {

   const {id} =useParams();
   const paramId = Number(id);
   const [product, setProducts] =useState({})
   const [products, setProducts] =useState([])
    useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response?.data?.products);
    };
    fetchData();
  }, []);



  //  console.log(paramId)
  return (
    <div>details</div>
  )
}

export default ProductsDetails