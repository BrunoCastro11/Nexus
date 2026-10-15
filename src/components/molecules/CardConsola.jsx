import Button from '../atoms/Button';

export default function CardConsola({ nombre, imagen, precio, onVerDetalle, onAgregar }) {
  return (
    <div className="caluga">
      <h3>{nombre}</h3>
      <div className="img-box">
        <img className="img-obj" src={imagen} alt={nombre} />
      </div>
      <p className="precio">${precio.toLocaleString("es-CL")}</p>
      {onVerDetalle && (
        <Button className="btn-outline btn-detalle" onClick={onVerDetalle}>
          Ver detalles
        </Button>
      )}
      <Button className="btn-red" onClick={onAgregar}>Comprar</Button>
    </div>
  );
}