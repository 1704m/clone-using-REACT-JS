import React from 'react';
import Home from '../Pages/Home/Home';
import{ Routes,Route }from "react-router-dom";
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import YourVideo from '../Pages/YourVideo/YourVideo'
import WatchLater from '../Pages/WatchLater/WatchLater'
import LikedVideos from '../Pages/LikedVideos/LikedVideos'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/WatchHistory' element={<WatchHistory/>}/>
        <Route path='/YourVideo' element={<YourVideo/>}/>
        <Route path='/WatchLater'element={<WatchLater/>}/>
        <Route path='/LikedVideos'element={<LikedVideos/>}/>
    </Routes>
  );
}

export default AllRoutes;