import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SongContext from '../../contexts/SongContext';

import useLoadingBar from '../../hooks/useLoadingBar';
import useApi from '../../hooks/useAPI';
import CardComponent from '../CardComponent/CardComponent';
import SkeletonCard from '../CardComponent/SkeletonCard';

export const PlaylistDetails = () => {
  const { id } = useParams();
  const { LoadingBar } = useLoadingBar();
  const { setSongs, songs } = useContext(SongContext);

  const { isLoading } = useApi('/api/playlist', id, setSongs);
  return (
    <>
      <div className="main-container flex items-center justify-center pt-2 ml-64 min-h-screen">
        {/* Adjusted for flex layout and added margin-left */}
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full flex-col">
            <SkeletonCard />
          </div>
        ) : (
          <CardComponent data={songs} />
        )}
      </div>
    </>
  );
};

export default PlaylistDetails;
