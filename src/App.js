import React, { Component } from 'react';
import './App.css';
import Car from './car/car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

class  App extends Component {
  constructor(props){
    super(props);
    this.state ={
      clicked : false,
      header: false,
      cars : [ 
        { name: 'Ford', years:2018 },
        { name: 'BMW', years:2010 },
        { name: 'Mazda', years:2012 }
     ],
     pageTitle : 'React component',
     showCars : false
    }
  }

  ToggleCarsHandel = ( ) => {
    this.setState ({
      showCars : !this.state.showCars
    })
  }
  onChangeName(name, index) {
    const car = [...this.state.cars];
    car[index].name = name 
    this.setState({ 
      cars:car
    })

  }

  onDelete(index){
    const cars = [ ...this.state.cars];
    cars.splice(index,1);
    this.setState({
      cars
    });

  }


 render(){
   let cars = null;
   if (!this.state.showCars) {
     cars = this.state.cars.map( (car, index) => {
            return (
              <ErrorBoundary key={index}>
                <Car 
                index={index}
                  name ={car.name} 
                  years = {car.years}
                  onChangeName={ (e) => this.onChangeName(e.target.value, index) }
                  onDelete={ () => this.onDelete(index)}
                />
              </ErrorBoundary>
            )
          })
    }
    return (
      <>
        <div className="App">
          <h1 > {this.state.pageTitle}</h1>
          <Counter clicked={this.state.clicked}/>
          <hr/>
          <button className="btn" onClick={  this.ToggleCarsHandel} > Toggle Cars </button>
          <button onClick={ () => this.setState({clicked : !this.state.clicked})}>Change clicked</button>
          <div >
            {cars}
          </div>
        </div>
      </>
    )
 }
}

export default App;
