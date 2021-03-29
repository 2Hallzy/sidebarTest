import React from 'react';
import './Sidebar.css';
import Accordion from '../Accordion/Accordion'
import WeatherPanel from '../WeatherPanel/WeatherPanel';
import Route from '../Route/Route'
import {Chart} from '../Chart/Chart'
import Chevron from '../../resources/chevron.svg';
import getRampAlogorithms from '../../api/api'

class Sidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {ramps: [
        {
            "id": "ramp-1",
            "algorithm": "Algorithm 1"
        },
        {
            "id": "ramp-2",
            "algorithm": "Algorithm 2"
        },
        {
            "id": "ramp-3",
            "algorithm": "Algorithm 3"
        },
        {
            "id": "ramp-4",
            "algorithm": "Algorithm 4"
        },
        {
            "id": "ramp-5",
            "algorithm": "Algorithm 5"
        },

    ]};
    }

    handleRampAPICallback(ramps){
      this.setState({ramps})
    }

    componentDidMount() {
      this.handleRampAPICallback = this.handleRampAPICallback.bind(this);
      getRampAlogorithms((ramps) => this.handleRampAPICallback(ramps));
    }
  
    render() {
    
      return (

        <div className='sidebar'>
          <div className='sidebarHeader'>
            <img src={Chevron} alt=''/>
            <img src={Chevron} alt=''/>
          </div>
          <WeatherPanel
            locationName='Melbourne'
            temperature='32°'
            date='Tue 16th  3:46 PM'
            humidity='78%'
            rainChance='34%'
            wind='21'
            tempTomorrow='30°'
          />

          <Accordion label='DELAYED ROUTES'>
            <Route dotColor='#e60a00' routeName='Monash Fwy Out' routeTime='45'/>
            <Route dotColor='#e60a00' routeName='Monash Fwy Out' routeTime='28'/>
            <Route dotColor='#fde200' routeName='Western Ring Rd' routeTime='5'/>
            <Route dotColor='#fde200' routeName='Eastern Fwy' routeTime='25'/>
          </Accordion>

          <Accordion label='RAMP CHART'>
            <Chart ramps={this.state.ramps}/>
            Ramp algorithm blablabla
          </Accordion>
        </div>
      );
    }
  }

export default Sidebar;