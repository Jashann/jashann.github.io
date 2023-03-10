import React from 'react'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'

export default function Footer() {
  return (
    <footer className="mt-auto main-footer py-4 border-top">
        <div className="d-flex justify-content-center">
            <a className='text-decoration-none mx-4' href={"mailto:"+URL_ROUTES.a_email} rel="noreferrer"> <ion-icon size="large" name="mail-outline"> </ion-icon> </a>
            <a className='text-decoration-none mx-4' target="_blank" href={URL_ROUTES.a_linkedIn} rel="noreferrer"> <ion-icon size="large" name="logo-linkedin"> </ion-icon> </a>
            <a className='text-decoration-none mx-4' target="_blank" href={URL_ROUTES.a_github} rel="noreferrer"> <ion-icon size="large" name="logo-github"> </ion-icon> </a>
        </div>
    </footer>
  )
}
