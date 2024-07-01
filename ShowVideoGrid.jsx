import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'
function ShowVideoGrid({vids}) {
  return (
    <div className='Container_showvideogrid'>
    {
        vids?.map(vi=>
            {
                console.log(vids)
                return(
                    <div key={vi._id} className='Videoboxapp'>
                        <ShowVideo vid={vi}/>
                    
                    </div>
                )
            })
    }
    </div>
  )
}

export default ShowVideoGrid