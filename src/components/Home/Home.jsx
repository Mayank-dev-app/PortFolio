import React from 'react'
import image from '../../assets/linkdinimg.jpg'
import TextXhanger from '../../TextXhanger'
import { FaPaperPlane } from 'react-icons/fa'
const Home = () => {
  return (
    <div className=" text-white flex w-full justify-between items-start p-10 md:p-20">

      <div className="md:w-2/4 md:pt-10">
        <h1 className=" text-3xl md:text-6xl font-bold flex leading-normal tracking-tight"><TextXhanger /></h1>

        <p className=" text-sm md:text-2xl tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea laboriosam voluptates dicta dolore deleniti nemo, alias, .</p>
        <button
          className="bg-blue-600 text-white py-3 px-6 rounded-full flex items-center gap-2 text-lg hover:bg-blue-700 shadow-md transition duration-300 cursor-pointer mt-8"
        ><FaPaperPlane /><a href="../../assets/MyResult.pdf" download>
            Download Resume
          </a>
        </button>
      </div>
      <div><img src={image} alt="My Image" width={350} className="rounded-4xl" /></div>

    </div>
  )
}

export default Home
