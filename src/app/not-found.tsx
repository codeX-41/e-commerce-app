import React from 'react'
import image from "@/assets/screens/404.jpg"
import Image from 'next/image'
const notFound = () => {
  return (
      <div className='w-full md:w-[80%] mx-autopx-5 my-5 md:px-0'>
          <Image src={image} alt='not-found-image'/>
    </div>
  )
}

export default notFound