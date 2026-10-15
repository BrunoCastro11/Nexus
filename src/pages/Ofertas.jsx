import { useNavigate } from 'react-router-dom';
import CardConsola from '../components/molecules/CardConsola';
import { obtenerConsolas } from '../data/consolas';

export default function Ofertas() {
  const navigate = useNavigate();
  const ofertas = obtenerConsolas().filter((c) => c.oferta);

  return (
    <section id="content">
      <div className="section-container">
        <h2 className="section-title">Ofertas</h2>

        {ofertas.length === 0 ? (
          <p className="section-title">Por ahora no hay productos en oferta.</p>
        ) : (
          <div className="contenedor">
            {ofertas.map((item) => (
              <CardConsola
                key={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                precio={item.precio}
                onVerDetalle={() => navigate(`/productos/${item.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}