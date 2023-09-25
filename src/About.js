import React, { Component } from 'react'

class About extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:0
        }

        this.compon= this.compon.bind(this) 
    }

    compon(){
        
          // Changing state 
    this.setState((prevState) => {
        return { count: prevState.count + 1}
      }) 
    }

render(){
return(
    <>
    <h2>{this.state.count}</h2>
    <button onClick={this.compon}>
        kljlkjl
    </button>
    </>
    
)
}

}

export default About;