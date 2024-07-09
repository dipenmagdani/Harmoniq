import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import SongContext from '../../contexts/SongContext';
import useApi from '../../hooks/useAPI';
import useLoadingBar from '../../hooks/useLoadingBar';
import CardComponent from '../CardComponent/CardComponent';
import SkeletonCard from '../CardComponent/SkeletonCard';

export const AlbumDetails = () => {
  const { id } = useParams();
  const { songs, setSongs } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();
  const { isLoading } = useApi('/api/album', id, setSongs);
  return (
    <>
      <div className="main-container flex items-center justify-center pt-2 ml-64 min-h-screen">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full ">
            <SkeletonCard />
          </div>
        ) : (
          <CardComponent data={songs} />
        )}
      </div>
    </>
  );
};

export default AlbumDetails;
