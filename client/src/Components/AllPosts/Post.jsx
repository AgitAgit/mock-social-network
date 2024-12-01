import React from 'react'
import image from "../../../public/images/FS_Lohamim_3-266.jpg"

const Post = () => {
  return (
    <div>
       
    <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div>
            <div> <img className='w-8 h-8 rounded-full' src={image} alt="" /></div>
            <div> <h1> Shabi</h1> </div>
        </div>
      </div>


    </div>
  )
}

export default Post