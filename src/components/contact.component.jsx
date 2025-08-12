import React, {useState} from 'react'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'

export default function Contact() {

  const [showContact, setShowContact] = useState(false);

  function handleContact() {
    setShowContact(!showContact);
  }

  return (
    <div className='contact my-5'>
      <h3 className='section-title'>Get In Touch</h3>
      
      <div className='flex-center mb-4'>
        <button onClick={handleContact} className='btn-modern btn-primary-gradient'>
          {showContact ? 'Hide' : 'Show'} Contact Info
          <ion-icon name={showContact ? "arrow-up-circle-outline" : "arrow-down-circle-outline"}></ion-icon>
        </button>
      </div>

      {
        showContact &&
          <div className="container align fade-in">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className='modern-card text-center'>
                  <h4 className='mb-4'>Let's Connect!</h4>
                  <div className='contact-info'>
                    <p className='mb-3'>
                      <ion-icon name="mail-outline"></ion-icon>
                      <a href={'mailto:' + URL_ROUTES.a_email} className='text-decoration-none ms-2'>
                        {URL_ROUTES.a_email}
                      </a>
                    </p>
                    <p className='mb-3'>
                      <ion-icon name="call-outline"></ion-icon>
                      <span className='ms-2'>{URL_ROUTES.a_phone}</span>
                    </p>
                    <p className='mb-3'>
                      <ion-icon name="location-outline"></ion-icon>
                      <span className='ms-2'>{URL_ROUTES.location}</span>
                    </p>
                    <div className='mt-4 d-flex justify-content-center gap-3'>
                      <a href={URL_ROUTES.a_linkedIn} target="_blank" rel="noreferrer" 
                         className='btn-modern btn-outline-gradient'>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        LinkedIn
                      </a>
                      <a href={URL_ROUTES.a_github} target="_blank" rel="noreferrer"
                         className='btn-modern btn-outline-gradient'>
                        <ion-icon name="logo-github"></ion-icon>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
