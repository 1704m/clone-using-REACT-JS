import React from 'react'
import './Home.css';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar.jsx';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid.jsx';
import vid from '../../components/Video/vid.mp4';
function Home() {
  const vids=[
    {
      _id:1,
      video_src:vid,
      Chanel:"62bafe6752cea35a6c3068f",
      title:"video 1",
      description:"description of video 1"
    },
    {
      _id:2,
      video_src:vid,
      Chanel:"cdd",
      title:"video 2",
      description:"description of video 2"  
    },
    {
      _id:3,
      video_src:vid,
      Chanel:"add",
      title:"video 3",
      description:"description of video 3"  
    },
    {
      _id:4,
      video_src:vid,
      Chanel:"ddd",
      title:"video 4",
      description:"description of video 3"  
    },
  ];
  return (
    <div className='container_pages_app'>
      <LeftSideBar/>
         <div className='container2_pages_app'>
          <ShowVideoGrid vids={vids}/>
         </div>
         </div>
  )
}

export default Home;