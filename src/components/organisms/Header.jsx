import { Link } from 'react-router-dom';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import logoImg from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className="top-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="Logo Nexus Gaming" className="logo-header" />
        </Link>

        <div className="search-container">
          <Input placeholder="Buscar..." />
          <Button className="btn-outline">Buscar</Button>
        </div>

        <div className="user-actions">
          <Button className="btn-outline">Iniciar Sesión</Button>
          <Button className="btn-primary-sm">Crear Cuenta</Button>
        </div>
      </div>
    </header>
  );
};