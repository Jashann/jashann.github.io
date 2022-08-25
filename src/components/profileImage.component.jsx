import React from 'react'
import Image from "./../assets/img/main/profile.jpg";

export default function ProfileImage() {
  return (
    <div className='profile-image-container'>
      <img className='profile-image' src={Image} alt="Jashanjot_Profile" />
    </div>
  )
}
