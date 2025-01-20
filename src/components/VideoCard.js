import './styles/VideoCard.css'; // Importa el archivo de estilos


function VideoCard({ video, onEdit, onDelete }) {
    return (
      <div className="video-card">
        <h3>{video.title}</h3>
        <video src={video.url} controls />
        <p>{video.description}</p>
        <div>
          <button onClick={() => onEdit(video)}>Editar</button>
          <button onClick={() => onDelete(video.id)}>Borrar</button>
        </div>
      </div>
    );
  }
  