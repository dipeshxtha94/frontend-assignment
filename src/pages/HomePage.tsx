import { ThunkDispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../globalRedux/slice"
import Products from "../screens/Products"
import Loading from "../screens/Loading"
import NoProductsFound from "../screens/NoProductsFound"
import SearchPage from "./SearchPage"
import { useQuery } from "@tanstack/react-query"
import Error from "../screens/Error"

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
      loading: boolean,
      searchValue: {
        search: string
      },
    }
  }

  const dispatch: ThunkDispatch<string, any, any> = useDispatch()
  const { searchValue } = useSelector((state: State) => state.products)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => dispatch(fetchData())
  })

  if (isLoading) return <Loading />
  if (isError) return <Error data={JSON.stringify(error)} />

  const filteredValue = data?.payload?.filter((val: any) => {
    return val.title?.toLowerCase().includes(searchValue.search?.toLowerCase())
  })

  return (
    <div>
      <SearchPage />
      <main
        className="mt-3 mb-2 mr-3 ml-3">
        {(Object.keys(searchValue)?.length !== 0 && filteredValue?.length === 0)
          ?
          <NoProductsFound />
          :
          <section
            className="mt-5">
            <p
              className="text-4xl text-center font-semibold underline">
              Products
            </p>
            {filteredValue?.length === 0
              ?
              <div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
                {data?.payload.map((val: any, idx: any) => {
                  return (
                    <div
                      key={idx}>
                      <Products
                        allData={val} />
                    </div>
                  )
                })}
              </div> :
              <div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-2">
                {filteredValue?.map((val: any, idx: any) => {
                  return (
                    <div
                      key={idx}>
                      <Products
                        allData={val} />
                    </div>
                  )
                })}
              </div>}
          </section>}
      </main>
    </div>
  )
}

export default HomePage