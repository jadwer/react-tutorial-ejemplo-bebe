import React, {Component} from "react";
import "./TopPage.css"

class TopPage extends Component {

    render() {
        return(
            <header>
                <h1 className="cabecera">{this.props.title}</h1>
            </header>
        )
    }
}

export default TopPage