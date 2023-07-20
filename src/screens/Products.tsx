import React from 'react'
import { setSingleProduct } from '../globalRedux/slice';
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom'

interface Data {
    title: string;
    id: string;
    description: string;
    category: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  interface ProductsProps {
    allData: Data;
  }

const Products: React.FC<ProductsProps> = ({ allData }) => {

    const dispatch: ThunkDispatch<any, string, any>= useDispatch()
    const navigate= useNavigate()

    const handleClick=(allData: any)=>{
        dispatch(setSingleProduct(allData))
        navigate(`/products/${allData.id}`)
    }
  return (
    <main
    onClick={()=>handleClick(allData)}
    className='w-11/12 h-36 flex items-center border border-black rounded p-2 m-2 hover:cursor-pointer'>
        <div>
          <img 
          src={allData.image} 
          alt="productimage" 
          className='w-20 h-20'/>
        </div>
        <div
        className='ml-3'>
          <p 
          className='text-xl'>
            {allData.title}
            </p>
          <p
          className='text-sm font-normal text-slate-500'>
            Rs:&nbsp;{allData.price}
            </p>
        </div>
    </main>
  )
}

export default Products