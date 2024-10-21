import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {

const menuItem = useSelector((store) => store.app.isMenuOpen);

if(!menuItem) return null; 

      return (
    <div className='w-40 list-none pl-5 pb-3 mt-3 shadow-lg'>
      <div className='w-[200px]'>
        <Link to="/" className='font-bold'>Home</Link>
        <li className='mb-1'>Shorts</li>
        <li className='mb-1'>Videos</li>
        <li className='mb-1'>Live</li>
      </div>
      <div>
        <h1 className='font-bold mt-3'>Subscription</h1>
        <li className='mb-1'>Music</li>
        <li className='mb-1'>Sports</li>
        <li className='mb-1'>Gaming</li>
        <li className='mb-1'>Movies</li>
      </div>
      <div>
        <h1 className='font-bold mt-3'>Explore</h1>
        <li className='mb-1'>Trending</li>
        <li className='mb-1'>Shopping</li>
        <li className='mb-1'>News</li>
        <li className='mb-1'>Podcast</li>
      </div>
      <div>
        <h1 className='font-bold mt-3'>You</h1>
        <li className='mb-1'>Your videos</li>
        <li className='mb-1'>Playlists</li>
        <li className='mb-1'>History</li>
        <li className='mb-1'>Your channel</li>
        <li className='mb-1'>Watch Later</li>
      </div>
      
    </div>
  )
}
    

export default SideBar;
