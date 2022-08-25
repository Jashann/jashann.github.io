import React from 'react'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'
import ProfileImage from '../components/profileImage.component'

export default function ContactPage() {
  return (
    <div className='contact'>
      
        <div className="container my-5">
            <div className="row">
              
              <div className="mt-5 col-12 col-md-6">
                <ProfileImage />
              </div>

              <div className="mt-5 col-12 col-md-6">
                <h1 className='fs-1 mb-5'> Contact</h1>
                <div className='container-icons'>
                  <a className='text-decoration-none me-3' href={"mailto:"+URL_ROUTES.a_email} rel="noreferrer"> <ion-icon size="large" name="mail-outline"> </ion-icon> </a>
                  <a className='text-decoration-none me-3' target="_blank" href={URL_ROUTES.a_linkedIn} rel="noreferrer"> <ion-icon size="large" name="logo-linkedin"> </ion-icon> </a>
                  <a className='text-decoration-none me-3' target="_blank" href={URL_ROUTES.a_github} rel="noreferrer"> <ion-icon size="large" name="logo-github"> </ion-icon> </a>
                </div>

                <div className='mt-3'>
                  <p>Name: Jashanjot Gill</p>
                  <p>Email: {URL_ROUTES.a_email}</p>
                  <p>Location: {URL_ROUTES.location}</p>
                </div>
              </div>

            </div>
             
        </div>
    </div>
  )
}
