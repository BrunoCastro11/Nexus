import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardConsola from '../components/molecules/CardConsola';
import { obtenerConsolas } from '../data/consolas';

export default function Productos() {
  const [consolas] = useState(obtenerConsolas);
  const navigate = useNavigate();

  return (
    <section id="content">
      <div className="section-container">
        <h2 className="section-title">Productos</h2>
        <div className="contenedor">
          {consolas.map((item) => (
            <CardConsola
              key={item.id}
              nombre={item.nombre}
              imagen={item.imagen}
              precio={item.precio}
              onVerDetalle={() => navigate(`/productos/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}