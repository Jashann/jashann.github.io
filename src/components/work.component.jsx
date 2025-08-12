import React, {useState} from 'react'
import { WORK_EXPERIENCE } from '../assets/helpers/WORK.data'

export default function Work() {

    const [showExperience, setShowExperience] = useState(true);

    function handleExperience() {
        setShowExperience(!showExperience);
    }


  return (
    <div className='work my-5'>
        <h3 className='section-title'>Work Experience</h3>
        <div className='flex-center mb-4'>
            <button onClick={handleExperience} className='btn-modern btn-primary-gradient'>
                {showExperience ? 'Hide' : 'Show'} Experience 
                <ion-icon name={showExperience ? "arrow-up-circle-outline" : "arrow-down-circle-outline"}></ion-icon>
            </button>
        </div>

        {
            showExperience && 
            <div className='stagger-animation'>
                {
                    WORK_EXPERIENCE.map((work, index) => {
                        return (
                        <div key={index} className='work-card'>
                            <div className='work-header'>
                                <div>
                                    <h4 className='work-title'>{work.title}</h4>
                                    <p className='work-company'>{work.company}</p>
                                </div>
                                <span className='work-duration'>{work.duration}</span>
                            </div>
                            <p className='work-location'>
                                <ion-icon name="location-outline"></ion-icon>
                                {work.location}
                            </p>
                            <ul className='work-description'>
                                {work.description.map((desc, index) => {
                                    return <li key={index} dangerouslySetInnerHTML={{ __html: desc }} />;
                                })}
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