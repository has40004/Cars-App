import React, { Component } from 'react'; 
import './car.css';
import PropTypes from 'prop-types';

class Car extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount(){
        if (this.props.index === 0){
            this.inputRef.current.focus();
        }
        
    }
    render() {
        let inputClass = ' input';

        if (this.props.name !== ''){
            inputClass += ' green';
        } else {
            inputClass += ' red'
        }
        if (this.props.name.length > 4) {
            inputClass += ' bold'
        }
    
        return (
            <div className="Car">
                <p className="delete" onClick={this.props.onDelete}>✕</p>
                 <h3>Name car : { this.props.name} </h3>
                 <p> <strong> Year: {this.props.years} </strong></p>
                 <input 
                 ref={this.inputRef}
                    type='text'
                    onChange={this.props.onChangeName} 
                    placeholder='менять марку машины'
                    className={inputClass}
                 />
               
            </div>
        )
    }
}

Car.propTypes = {
    name : PropTypes.string.isRequired,
    years : PropTypes.number ,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete : PropTypes.func 
}

export default Car 