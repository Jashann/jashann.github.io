import React, {useState} from 'react'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'

export default function Contact() {

  const [showContact, setShowContact] = useState(false);

  function handleContact() {
    setShowContact(!showContact);
  }

  return (
    <div className='contact my-5'>

      <div className='flex-center mb-5'>
        <button onClick={handleContact} className='btn btn-primary in-flex-center'> Contact <ion-icon size="large" name="arrow-down-circle-outline"></ion-icon> </button>
      </div>

      {
        showContact &&
          <div className="container align">
            <div className="row">
              <div className="col-12">
                <div className='contact-data p-3 flex-center'>
                  <div>
                    <p>Email: {URL_ROUTES.a_email_personal}</p>
                    <p>Phone: 604-772-2002</p>
                    <p className="mb-0">Location: {URL_ROUTES.location}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
      }
    </div>
  )
}
