import { useState } from 'react';
import './styles/NewVideoForm.css'; // Importa el archivo de estilos




function NewVideoForm({ onSave, onClear }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('front-end');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { title, category, image, url, description };
    onSave(newVideo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Tarjeta</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="front-end">Front-End</option>
        <option value="back-end">Back-End</option>
        <option value="innovacion">Innovación</option>
      </select>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL del video"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />
      <button type="submit">Guardar</button>
      <button type="button" onClick={onClear}>Limpiar</button>
    </form>
  );
}
