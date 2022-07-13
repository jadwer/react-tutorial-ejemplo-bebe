import React, {Component} from "react";

class Tarjeta extends Component {
    render(){
        return (
        <div>
            <img src={this.props.imag}
             alt={this.props.alt }/>
            <h1>{this.props.titulo}</h1>
            <p>{this.props.texto}</p>
            <button src={this.props.link}>Show</button>

        </div>
        )
    }

    
}


export default Tarjeta