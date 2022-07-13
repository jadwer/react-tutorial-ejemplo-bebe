import React, {Component} from "react";
import Tarjeta from "./Tarjeta"
import "./TopPage.css"

class PageContent extends Component {

    render() {
        return(
            <main>
                <h1 className="Cuerpo">cuerpo </h1>
                <Tarjeta 
                    imag="http://www.dibujospedia.com/dibujos/colorear-manzana-2-dibujos-infantiles.gif"
                    titulo="Manzana"
                    texto="Una manzana"
                    alt= "no es una pera"
                    link="http://jumex.com" />
                    
            </main>
        )
    }
}

export default PageContent
