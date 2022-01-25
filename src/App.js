import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './css/App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tarjetas, setTarjeta] = useState([]);
  const [numeroTarjeta, setNumeroTarjeta] = useState(0)

  const agregarTarjeta = () => {
    tarjetas.push({ 
      id: uuidv4(), 
      titulo: "Numero de Tarjeta: " + (numeroTarjeta + 1), 
      contenido: "aleatorio: " + Math.floor(Math.random() * 101) 
    });
    setTarjeta([...tarjetas]);
    setNumeroTarjeta(numeroTarjeta + 1);
  }

  const eliminarPrimeraTarjeta = () => {
    tarjetas.shift();
    setTarjeta([...tarjetas]);
  }

  const eliminarUltimaTarjeta = () => {
    tarjetas.pop();
    setTarjeta([...tarjetas]);
  }

  const eliminarTarjeta = (id) => {
    const nuevasTarjetas = tarjetas.filter((tarjeta) => tarjeta.id !== id)
    setTarjeta(nuevasTarjetas);
  }


  useEffect(() => {
    console.log(tarjetas);
  }, [tarjetas])

  return (
    <div>
      <div className='global-btns'>
        <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
        <button onClick={eliminarPrimeraTarjeta}>Eliminar Primera Tarjeta</button>
        <button onClick={eliminarUltimaTarjeta}>Eliminar Ultima Tarjeta</button>
      </div>

      <div className='cuadricula'>
        {
          tarjetas.map((tarjeta, i) => {
            return (
              <Card key={tarjeta.id} id={tarjeta.id} titulo={tarjeta.titulo} contenido={tarjeta.contenido} handledelete={eliminarTarjeta} />
            )
          })
        }
      </div>

    </div>
  )
}

export default App

