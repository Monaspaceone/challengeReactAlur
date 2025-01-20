
import './styles/Header.css'; // Importa el archivo de estilos



function Header({ onHomeClick, onNewVideoClick }) {
    return (
      <header>
        <button onClick={onHomeClick}>Home</button>
        <button onClick={onNewVideoClick}>Nuevo Video</button>
      </header>
    );
  }
  