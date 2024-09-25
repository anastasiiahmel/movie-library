import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesVideo } from 'api/api';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { TrailerContainer } from './TrailerMovie.styled';

const TrailerMovie = () => {
  const { moviesID } = useParams();
  const [moviesVideo, setMoviesVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMoviesVideo = useCallback(async () => {
    try {
      const { results } = await getMoviesVideo(moviesID);

      const officialTrailer = results.find(
        video => video.name === 'Official Trailer' && video.site === 'YouTube'
      );
      setMoviesVideo(officialTrailer || null);
    } catch (error) {
      console.error('Error fetching movie video:', error);
    }
  }, [moviesID]);

  useEffect(() => {
    fetchMoviesVideo();
  }, [fetchMoviesVideo]);

  const toggleModal = () => setIsModalOpen(prev => !prev);

  return (
    <TrailerContainer>
      {moviesVideo && (
        <div className="video-container">
          <h3 className="video-title" onClick={toggleModal}>
            {moviesVideo.name}
            <MdOutlineOndemandVideo className="video-icon" />
          </h3>
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <iframe
              width="800"
              height="500"
              src={`https://www.youtube.com/embed/${moviesVideo.key}`}
              title={moviesVideo.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </TrailerContainer>
  );
};

export default TrailerMovie;
