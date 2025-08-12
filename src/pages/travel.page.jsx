import React from 'react'
import { useState } from 'react'
import { TRAVEL_CATEGORIES, TRAVEL_PICS } from '../assets/helpers/TRAVEL.data'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'
import BackgroundOrbs from '../components/backgroundOrbs.component'

export default function TravelPage() {

    const [currentCategory, setCurrentCategory] = useState("");

  return (
    <div className='travel' style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundOrbs />
        <div className="container my-5">
            <div className="row">

                <h3> Filter By </h3>
                <div className="categories">
                    {
                        TRAVEL_CATEGORIES.map( category => <button onClick={ () => setCurrentCategory(category) } className={`category  ${ currentCategory == category ? "category-active":"" }`}> {category} </button> )
                    }
                </div>

                <div>
                    {
                        TRAVEL_PICS[0].map( image => {
                            return ( 
                                <div>
                                    <img className='img-fluid' src={image} alt="" />
                                </div>    
                        )})
                    }
                </div>

             </div>
        </div>
    </div>
  )
}
