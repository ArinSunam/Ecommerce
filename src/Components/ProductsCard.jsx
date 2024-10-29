import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useCartContext } from '../Context/CartContext'


const ProductsCard = ({ data }) => {
  const { addToCart } = useCartContext()

  return (
    <article className='p-4 border border-[#dbdbdb] rounded-[16px] '>
      <div className=' relative  h-[264px] '>
        <img src={data.product_image} alt={data.name} className='h-full w-full object-cover ' />
      </div>

      {/* info */}
      <div className='p-3 flex flex-col gap-y-2'>
        <h1 className=' hover:text-primary font-semibold'>{data.name}</h1>

        <div className='flex items-center gap-2'>
          <p className='font-semibold line-through text-[#333]'>Rs.4000</p>
          <p className='font-semibold'>Rs.{data.price}</p>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1 '>
            {[0, 1, 2, 3, 4].map((el, i) => (
              <FaStar key={i} color='yellow' />
            ))}
          </div>

          <p className='font-light text-sm'>2 reviews</p>
        </div>

        <button className='flex items-center justify-center gap-2 bg-[#dbdbdb] rounded-[26px] mt-3 p-[16px]' onClick={() => addToCart(data)}> Add to cart </button>

      </div>
    </article>
  )
}

export default ProductsCard