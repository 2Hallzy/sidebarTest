import React from 'react';
import './Chart.css';

function parseRampData(rawRampDate) {
    const rampCounters = {
        'Algorithm 1': 0, 
        'Algorithm 2': 0, 
        'Algorithm 3': 0, 
        'Algorithm 4': 0, 
        'Algorithm 5': 0,
    }
    let total = 0;
    rawRampDate.forEach(function (ramp) {
        rampCounters[ramp.algorithm] += 1;
        total += 1;
    });

    const algorithmPercentages = []
    let cumulativePercentage = 0;

    for (const ramp in rampCounters) {
        const percentage = rampCounters[ramp] / total * 100;
        const rampPercentage = {
            algorithm: ramp,
            percentage: percentage,
            cumulativePercentage,
        }
        algorithmPercentages.push(rampPercentage);
        cumulativePercentage += percentage;
    }
    return(algorithmPercentages);
}

function generateGradient(parsedRampData) {
    const gradient = `conic-gradient(
        #24b4aa ${parsedRampData[0].cumulativePercentage}% ${parsedRampData[0].cumulativePercentage + parsedRampData[0].percentage}%, 
        #6fd8d1 ${parsedRampData[1].cumulativePercentage}% ${parsedRampData[1].cumulativePercentage + parsedRampData[1].percentage}%,  
        #93e2dd ${parsedRampData[2].cumulativePercentage}% ${parsedRampData[2].cumulativePercentage + parsedRampData[2].percentage}%, 
        #f1f8fe ${parsedRampData[3].cumulativePercentage}% ${parsedRampData[3].cumulativePercentage + parsedRampData[3].percentage}%,  
        #70d8d1 ${parsedRampData[4].cumulativePercentage}% ${parsedRampData[4].cumulativePercentage + parsedRampData[4].percentage}% 
         )`;
    return gradient;
}

export function getCircleTransform(algorithm){
    const degrees = (((algorithm.cumulativePercentage + (algorithm.percentage / 2)) / 100) * 360) - 90;
    return (`rotate(${degrees}deg) translateX(130px) rotate(${-degrees}deg)`)
}

export function Chart(props) {
    const data = parseRampData(props.ramps);
    return (
        <div className='chart'>
            <span className='pie' style={{background: generateGradient(data)}}> 
                <span className='hole'></span>
            </span>
             {data.map(algorithm => {
                return (
                    <span 
                        className='percentMarker' 
                        style={{transform: getCircleTransform(algorithm)}}
                        key={algorithm.algorithm}
                        >
                            {Math.floor(algorithm.percentage)}%
                    </span>
                )
            })} 
        </div>
    )}
