import { useSelector } from 'react-redux'

const CartPage = () => {

    type State = {
        products: {
            cartProduct: Array<any>
        }
    }

    const { cartProduct } = useSelector((state: State) => state.products)

    return (
        <main
            className='flex flex-col mt-10'>
            <section>
                <p
                    className='text-center text-3xl font-semibold underline'>
                    Cart
                </p>
            </section>
            {cartProduct?.map((val, idx) => {
                return (
                    <main
                        key={idx}
                        className='w-11/12 xl:w-1/3 m-auto mt-5 flex flex-col justify-center
                         items-center border border-black rounded-md pt-4 pb-5 pr-10 pl-10'>
                        <section
                            className='flex items-center w-11/12'>
                            <div>
                                <p
                                    className='text-2xl font-semibold'>
                                    {val.title}
                                </p>
                                <p
                                    className='text-base font-normal'>
                                    Rs:&nbsp;{val.price}
                                </p>
                            </div>
                            <div
                                className='w-2/12 ml-5'>
                                <button
                                    className='border border-black pr-2 pl-2 rounded-md bg-green-600
                                    hover:bg-green-800 hover:cursor-pointer'>
                                    Buy
                                </button>
                            </div>
                        </section>
                    </main>
                )
            })}
            <button
                className='w-24 border border-black pr-2 pl-2 rounded-md
        bg-green-600 hover:bg-green-800 hover:cursor-pointer text-center m-auto mt-5 mb-5'>
                Check Out
            </button>
        </main>
    )
}

export default CartPage