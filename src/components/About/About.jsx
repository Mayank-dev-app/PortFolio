
import { IoArrowForward } from 'react-icons/io5'
import image from '../../assets/about.jpg'

const  About = () => {
    return (
        <div id="About" className="text-white md:flex  overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30  rounded-lg p-12">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
                <div className="md:flex flex-wrap flex-col  md:flex-row justify-between gap-14 items-end">
                    <img src={image} alt="A 3d Image" className="md:h-80 " />

                    <ul>
                        <div className=" flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className=" text-xl  md:text-2xl font-semibold leading-normal">Fronted Developer</h1>
                                <p className=" text-sm md:text-md leading-tight">I use HTML, CSS, and JavaScript to create the design and layout of websites. I also work with React.js to build fast, responsive, and interactive user interfaces that look good on all devices.</p>
                            </span>
                        </div>

                        <div className=" flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className=" text-xl  md:text-2xl font-semibold leading-normal">Backend- Developer</h1>
                                <p className=" text-sm md:text-md leading-tight">I build the behind-the-scenes part of websites using Node.js and Express.js. This includes managing how data moves between the user and the database, handling API requests, and building server-side logic.</p>
                            </span>
                        </div>

                        <div className=" flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className=" text-xl  md:text-2xl font-bold leading-normal">Database- Developer</h1>
                                <p className=" text-sm md:text-md leading-tight">I use MongoDB to store and manage data. This allows websites to save user info, products, images, and more. I connect the database to the backend so data can be created, read, updated, or deleted easily.</p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
