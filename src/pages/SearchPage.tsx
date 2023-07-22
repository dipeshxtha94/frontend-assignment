import React from 'react'
import { useForm } from 'react-hook-form'
import { changeSearchValue } from '../globalRedux/slice'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

const SearchPage: React.FC = () => {

  const { register, handleSubmit } = useForm<Data>()
  const dispatch: ThunkDispatch<any, string, any> = useDispatch()

  type Data = {
    search: string
  }

  const submitHandler = (data: any) => {
    dispatch(changeSearchValue(data))
  }

  return (
    <main
      className='mt-3'>
      <form
        className='flex justify-center'
        onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          placeholder='Search the product by their name!'
          {...register('search')}
          autoComplete='off'
          className='w-1/2 xl:w-1/3 border border-black rounded-lg text-center' />
        <input
          type="submit"
          value='Search'
          className='border border-black rounded-md ml-1 pr-2 pl-2
           bg-slate-200 hover:cursor-pointer hover:bg-slate-400' />
      </form>
      <hr
        className='mt-3' />
    </main>
  )
}

export default SearchPage