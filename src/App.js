import './styles/App.css'; // Importa el archivo de estilos
import React, { useState } from 'react';
import Header from './Header';
import VideoCard from './VideoCard';
import NewVideoForm from './NewVideoForm';

function App() {
  const [videos, setVideos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);

  const handleHomeClick = () => {
    setShowForm(false);
  };

  const handleNewVideoClick = () => {
    setShowForm(true);
  };

  const handleSaveNewVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
    setShowForm(false);
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const handleEditVideo = (video) => {
    setEditingVideo(video);
    setShowForm(true);
  };

  const handleClearForm = () => {
    setEditingVideo(null);
    setShowForm(false);
  };

  return (
    <div>
      <Header onHomeClick={handleHomeClick} onNewVideoClick={handleNewVideoClick} />
      {showForm ? (
        <NewVideoForm onSave={handleSaveNewVideo} onClear={handleClearForm} />
      ) : (
        <div>
          <h1>Videos Aleatorios</h1>
          <div>
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onEdit={handleEditVideo}
                onDelete={handleDeleteVideo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;



