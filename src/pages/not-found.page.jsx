import React from 'react';
import {Link} from "react-router-dom"; 
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'

const NotFoundPage = () => {
    return (
        <div className='my-5 container'>
            <br /><br /><br /><br /><br /><br />
            <div className='container-center'>
                <p className='fs-1 text-center'>The Page, You are looking for does not exist. :(</p>
                <Link to={URL_ROUTES.index} className='project-btn'>Take me to Home Page</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
