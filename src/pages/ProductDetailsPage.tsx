import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetailsPage: React.FC = () => {

  type Data={
    title: string,
    id: string,
    description: string,
    category: string,
    price: number,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }

  type State={
    products:{
      singleProduct: Data
    }
  }
  const { singleProduct }= useSelector((state: State)=> state.products)
  //console.log(singleProduct.title)
  return (
    <main 
    className='flex w-11/12 md:w-1/2 xl:w-1/2 border border-black rounded-lg m-auto mt-20 p-5 items-center'>
      <div>
        <img 
        src={singleProduct.image} 
        alt="productimage" 
        className='w-80 h-40'/>
      </div>
      <div
      className='ml-4'>
        <p
        className='text-xl xl:text-2xl font-semibold text-slate-900 mb-1'>
          {singleProduct.title}
          </p>
        <p
        className='text-sm font-normal text-slate-800'>
          Rs:&nbsp;{singleProduct.price}
          </p>
        <p
        className='text-sm font-medium text-slate-800'>
          {singleProduct.description}
          </p>
      </div>
    </main>
  )
}

export default ProductDetailsPage