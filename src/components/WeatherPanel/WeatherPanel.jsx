import React from 'react';
import './WeatherPanel.css';
import WeatherIcon from '../../resources/weather.svg'

  
function WeatherPanel(props) {
    return (
        <div className='weatherPanel'>
            <div className='weatherHeader'>
                <div className='weatherData'>
                    <span className='locationName'>{props.locationName}</span>
                    <span className='temperature'>{props.temperature}</span>
                    <span className='date'>{props.date}</span>
                </div>
                <img src={WeatherIcon} alt='Clearing storms' className='weatherIcon'/>
            </div>
            <table className='conditionTable'>
                <tbody>
                    <tr>
                        <td>Humidity</td>
                        <td>{props.humidity}</td>
                    </tr>
                    <tr>
                        <td>Chance of Rain</td>
                        <td>{props.rainChance}</td>
                    </tr>
                    <tr>
                        <td>Wind</td>
                        <td>{props.wind} <span style={{'color':'var(--color-text-dark)'}}>kmh</span></td>
                    </tr>
                    <tr>
                        <td>Tomorrow</td>
                        <td>{props.tempTomorrow}<img src={WeatherIcon} alt='Clearing storms' className='tomorrowWeatherIcon'/></td>
                    </tr>
                </tbody>
            </table>
            

        </div>
    )}

export default WeatherPanel;