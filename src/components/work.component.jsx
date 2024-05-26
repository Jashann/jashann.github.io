import React, {useState} from 'react'
import { WORK_EXPERIENCE } from '../assets/helpers/WORK.data'

export default function Work() {

    const [showExperience, setShowExperience] = useState(false);

    function handleExperience() {
        setShowExperience(!showExperience);
    }


  return (
    <div className='my-5'>
        <div className='flex-center'>
            <button onClick={handleExperience} className='btn btn-primary in-flex-center'> WORK EXPERIENCE <ion-icon size="large" name="arrow-down-circle-outline"></ion-icon> </button>
        </div>

        {
            showExperience && 
            <div className='work'>
                {
                    WORK_EXPERIENCE.map( work => {
                        return (
                        <div className='project p-5 mt-5'>
                            <p className='fs-4'>
                                <b>{work.title}</b> - <b>{work.company}</b> ({work.location}) ({work.duration})
                            </p>
                            <ul>
                                {work.description.map((desText, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: desText }}></li>
                                ))}
                            </ul>
                        </div>
                        )}
                    )
                }
            </div>
        }
    </div>
  )
}