import { ThunkDispatch } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../globalRedux/slice"
import Products from "../screens/Products"

interface Data {
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


const HomePage: React.FC = () => {

  type State = {
    products: {
      data: Data[],
      loading: boolean
    }
  }

  const dispatch: ThunkDispatch<string, any, any> = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const { data } = useSelector((state: State) => state.products)
  const { loading } = useSelector((state: State) => state.products)

  // console.log(data)



  return (
    <main
      className="mt-2 mb-2 mr-3 ml-3">
      <p
        className="text-4xl text-center font-semibold">
        Products
      </p>
      {loading
        &&
        <p 
        className="text-lg font-semibold text-slate-700 text-center mt-20">
          Loading...
          </p>}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-2">
        {data?.map((val, idx) => {
          return (
            <div
              key={idx}>
              <Products
                allData={val} />
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default HomePage