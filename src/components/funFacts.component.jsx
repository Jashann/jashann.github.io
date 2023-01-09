import React, {useState} from 'react'
import { facts } from '../assets/helpers/FunFacts.data'

export default function FunFacts() {

    const [showFacts, setShowFacts] = useState(false);

    function handleShow() {
        setShowFacts(!showFacts);
    }


  return (
    <div className='my-5'>
        <div className='flex-center'>
            <button onClick={handleShow} className='btn btn-primary in-flex-center '> Fun Facts <ion-icon size="large" name="arrow-down-circle-outline"></ion-icon> </button>
        </div>

        {
            showFacts && 
            <ol className='fun-facts mt-5'>
            {
                facts.map( fact => <li className='mt-2'> {fact} </li> )
            }
            </ol>
        }
    </div>
  )
}