import React from 'react'
import './ShowVideo.css'
function ShowVideo({vid}) {
  return (
    <>
    <div>
    <video
    src={`${vid.video_src}`}
    className='video_showvideo'
    />
    </div>
    <div>
    <div className="videodesc">
      <div className="chanel_logo">
        <div className='chanel_logo'>
          <p>{vid?.}</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ShowVideo