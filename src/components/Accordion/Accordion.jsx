import React from 'react';
import './Accordion.css';
import chevron from '../../resources/chevron.svg'

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {accordionOpen: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({accordionOpen: !this.state.accordionOpen})
    }
  
    render() {
      return (
        <div className='accordion'>
            <div className='accordionHeader' onClick={this.handleClick}>
                <h2>{this.props.label}</h2>
                <img src={chevron} 
                alt='' 
                style={this.state.accordionOpen ? null : 
                    {
                        transform: 'rotate(-90deg)', 
                    }
                }/>
            </div>
            { this.state.accordionOpen ? 
                <div className='accordionBody'>
                    {this.props.children}
                </div> 
            : null}
        </div>
      );
    }
  }

export default Accordion;