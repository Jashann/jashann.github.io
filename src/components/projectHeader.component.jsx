import React from 'react'
import { PROJECTS } from '../assets/helpers/PROJECTS.data'

export default function ProjectHeader({learnMore}) {

    const project = PROJECTS.find( project => project.learnMore === learnMore );

    return (
        <div className="project-header">
            <h1 className='text-center my-5'>{project.title} - <small className='fs-3'> {project.category} </small> </h1>
            {
                project.tools && <p className='fs-5'> <b>TOOLS:</b> [ {project.tools} ]</p>
            }

            {
                project.summary && <p> <b>SUMMARY</b>: {project.summary} </p>
            }
        </div>
    )
}
