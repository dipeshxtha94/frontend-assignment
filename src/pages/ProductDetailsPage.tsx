import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCardProduct } from '../globalRedux/slice'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import { fetchSingleData } from '../globalRedux/slice'
import Loading from '../screens/Loading'
import Error from '../screens/Error'
import { useQuery } from '@tanstack/react-query'

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<string>()
  const navigate = useNavigate()

  const dispatch: ThunkDispatch<any, string, any> = useDispatch()
   
   const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => dispatch(fetchSingleData(id))
  })

  if (isLoading) return <Loading />
  if (isError) return <Error data={JSON.stringify(error)} />

  const handleCart = () => {
    navigate('/cart')
    dispatch(setCardProduct(data?.payload as any))
  }
  return (
    <main>
      <main
        className='flex w-11/12 md:w-1/2 xl:w-1/2 border
     border-black rounded-lg m-auto mt-32 p-8 items-center bg-slate-50'>
        <div>
          <img
            src={data?.payload.image}
            alt="productimage"
            className='w-80 h-40' />
        </div>
        <div
          className='ml-4'>
          <p
            className='text-xl xl:text-2xl font-semibold text-slate-900 mb-1'>
            {data?.payload.title}
          </p>
          <p
            className='text-sm font-normal text-slate-800'>
            Rs:&nbsp;{data?.payload.price}
          </p>
          <p
            className='text-sm font-medium text-slate-800'>
            {data?.payload.description}
          </p>
          <button
            onClick={handleCart}
            className='border border-black rounded-md mt-2 pl-1 pr-1
           bg-green-500 hover:cursor-pointer hover:bg-green-600'>
            Add to Cart
          </button>
        </div>
      </main>
    </main>
  )
}

export default ProductDetailsPage