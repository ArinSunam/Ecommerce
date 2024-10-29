import React from 'react'
import { ProductsCard } from '../Components'
import { ProductData } from '../dummy/ProductsData'


const RecentProducts = () => {

  return (
    <section className='text-[#2f2f2f] py-16'>
      <div className='main-container'>

        {/* title */}
        <div className=' pb-5'>
          <h2 className="uppercase text-[24px] sm:text-[35px] text-center  font-medium font-WorkSans pb-2">Latest Items</h2>
          <div className='h-[2px] w-[80px] bg-secndary mx-auto' />
        </div>


        {/* list */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 py-4'>
          {ProductData.map((el) => (
            <ProductsCard data={el} />
          ))}
        </section>


      </div>
    </section>
  )
}

export default RecentProducts