import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';

import PlantsContainer from '../components/PlantsContainer';

// styles
import "../getStarted.scss";


class GetStarted extends Component {

    render() {
        return (
            <div className='get-started'>
                <PageTitle className='get-started__title' title="Let's Get Started!"/>
                <div className='get-started__description'>
                    If you want to create an account or access your existing account, click the button below. 
                </div>
                <Link className='get-started__button' to="/account"><button className='get-started__button__start'>Account</button></Link>
                {/* <div className='get-started__button'>
                    <button className='get-started__button__auth'
                        onClick={() => loginWithRedirect({})}
                        type='submit'
                        title='Sign In'
                        name='sign in'
                        >Account
                    </button>   
                </div> */}
                <div className='get-started__instructions'>
                   <div className='get-started__instructions__materials'>
                        <h1>Materials</h1>
                    </div> 
                    <div className="get-started__instructions__setup">
                        <h1>Testing</h1>
                    </div>
                </div>    
            </div>
        )
    }
}


export default GetStarted;