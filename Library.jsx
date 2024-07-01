import React from 'react';
import './Library.css';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar.jsx';

function Library() {
  return (
    <div className='container_pages_app'>
      <LeftSideBar/>
         <div className='container2_pages_app'>
          Library
         </div>
         </div>
  );
}

export default Library