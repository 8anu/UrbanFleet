import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
        <h1 className='text -4xl md:text-5xl font-semibold'>Drive Your Way</h1>

        <form className='flex flex-col md:flex-row items-center justify-between p-4 rounded-full 
    w-full max-w-3xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] mx-auto'> 
            
  <div className='flex flex-col md:flex-row items-center gap-6 w-full px-4'>

    {/* Pickup Location */}
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700'>Pickup Location</label>
      <select 
        required 
        value={pickupLocation} 
        onChange={(e)=>setPickupLocation(e.target.value)}
        className='bg-transparent focus:outline-none text-gray-500 text-sm'
      >
        <option value="">Please select location</option>
        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
      </select>
    </div>

    {/* Pick-Up Date */}
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700'>Pick-up Date</label>
      <input 
        type="date" 
        id="pickup-date" 
        min={new Date().toISOString().split('T')[0]} 
        className='bg-transparent focus:outline-none text-gray-500 text-sm'
        placeholder='dd-mm-yyyy'
        required
      />
    </div>

    {/* Return Date */}
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700'>Return Date</label>
      <input 
        type="date" 
        id="return-date" 
        className='bg-transparent focus:outline-none text-gray-500 text-sm'
        placeholder='dd-mm-yyyy'
        required
      />
    </div>

    {/* Search Button */}
          <button className='flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 
      text-white rounded-full cursor-pointer transition-all'>
      <img src={assets.search_icon} alt="search" className='brightness-300 w-4 h-4'/>
      Search
    </button>

  </div>
</form>


        <img src={assets.main_car}   alt="car"   className="w-full max-w-4xl mx-auto object-contain"/>


      
    </div>
  )
}

export default Hero
