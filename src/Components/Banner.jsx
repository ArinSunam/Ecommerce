import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

  const BannerBg = [
    {
      image: 'https://images.pexels.com/photos/4346325/pexels-photo-4346325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      image: 'https://images.pexels.com/photos/4376207/pexels-photo-4376207.jpeg?auto=compress&cs=tinysrgb&dpr=1'
    }

  ]


  const settings = {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    dots: false
  }

  return (
    <div className='relative'>
      <Slider {...settings} >
        {BannerBg.map((el, i) => (
          <div key={i} className='h-full'>
            <div className='h-[100vh] w-screen transition-all' style={{
              background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${el.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}></div>
          </div>
        ))}
      </Slider>

      <div className='h-[100vh] w-screen absolute inset-0 flex flex-col items-center justify-center gap-4 text-white'>

        <h4 className='text-[15px] text-primary tracking-[2px] font-bold uppercase bg-white px-3 py-2'>Elegance in Every Piece</h4>

        <h1 className='text-[24px] sm:text-[28px] md:text-[42px] text-center font-semibold '>Where Function Meets Beauty</h1>

        <section className='flex items-center gap-4'>
          <button className='bg-primary px-[24px] py-[15px] rounded-[30px] font-medium'>Visit Shop</button>
          <button className='bg-primary px-[24px] py-[15px] rounded-[30px] font-medium'>Contact Us</button>
        </section>

      </div>
    </div>
  )
}

export default Banner