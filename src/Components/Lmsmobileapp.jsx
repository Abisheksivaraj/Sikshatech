import React from 'react'
import Image from '../assets/image.jpeg'

const Lmsmobileapp = () => {
  return (
    <div>
      {/* First Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 order-2 md:order-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Learn On The Go with 


            </h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
            
LMS Mobile App 

            </h1> 
            <ul>
               
                <ol>Learn anytime, anywhere with the Skill Lake LMS Mobile app.</ol><br></br>
                <ol> Our cross-generational LMS app is </ol><br></br>
                 <ol>modern, flexible, intuitive, and compatible with iOS and Android.</ol>               
            </ul>
            <br></br>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-200">
                SCHEDULE A DEMO
              </button>
              <button className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded-md shadow-md hover:bg-green-500 hover:text-white transition duration-200">
                WATCH VIDEO
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <img src={Image} alt="LMS Illustration" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lmsmobileapp