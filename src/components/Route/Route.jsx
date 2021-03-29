import React from 'react';
import './Route.css';
import Arrow from '../../resources/arrow.svg'

  
function Route(props) {
    return (
        <div className='route'>
            <div className='routeHeader'>
                <span className='dotIndicator' style={{backgroundColor: props.dotColor}}></span>
                <span className='routeName'>{props.routeName}</span>
                <span className='routeDistance'>13km</span>
            </div>
            <div className='routeBody'>
                <img src={Arrow} alt='Down Arrow' className='trafficArrow'/>
                <div className='routeEndpoints'>
                    <span className='routeStart'>Kings Way</span>
                    <span className='routeEnd'>EastLink</span>
                </div>
                <span className='routeTime'>
                    {props.routeTime}
                    <span> min</span>
                </span>
            </div>
        </div>
    )}

export default Route;