import React from 'react';
import Profile from '../component/userProfile/Profile.jsx';
import Listing from '../component/userListing/Listing.jsx';
import Detail from '../component/userDetails/Detail.jsx';
import Chat from '../component/userChat/Chat.jsx';

function index() {
  return (
    <>
      <div className='wrapper'>
        <Profile />
        <div className='Listing_wrap'>
      <ul>
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        </ul>
        </div>
      </div>
      <div className='detail-wrap'>
        <Detail />
        <Chat />
      </div>
    </>
  )
}

export default index