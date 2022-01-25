import { useState } from "react";
import '../css/card.css';

const Card = ({id, titulo, contenido, handledelete}) => {
    const [numero, setNumero] = useState(0);
    const aumentar = () => {
        setNumero(numero + 1);
    }
    const reset = () => {
        setNumero(0);
    }
    const reducir = () => {
        setNumero(numero - 1);
    }

    return(
        <div className="card">
            <div className="card-header">
                <h2>{titulo}</h2>
                <button className="btn-delete" onClick={() => handledelete(id)}>X</button>
            </div>
            <p>{contenido}</p>
            <p>Numero: {numero}</p>
            <button className="btn-op" onClick={aumentar}>+</button>
            <button onClick={reset}>Reset</button>
            <button className="btn-op" onClick={reducir}>-</button>
        </div>
    )
}

export default Card;