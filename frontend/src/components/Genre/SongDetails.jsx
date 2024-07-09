import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import SongContext from '../../contexts/SongContext';
import useApi from '../../hooks/useAPI';
import useLoadingBar from '../../hooks/useLoadingBar';
import CardComponent from '../CardComponent/CardComponent';
import SkeletonCard from '../CardComponent/SkeletonCard';

export const SongDetails = () => {
  const { id } = useParams();
  const { songData, setSongData } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  const { isLoading } = useApi('/api/song', id, setSongData);
  useEffect(() => {
    if (songData?.songs) {
      setSongData(songData.songs[0]);
    }
  }, [songData, setSongData]);
  return (
    <>
      <div className="main-container flex items-center justify-center pt-2 ml-64 min-h-screen">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full transition-all duration-300">
            <SkeletonCard />
          </div>
        ) : (
          <CardComponent data={songData} />
        )}
      </div>
    </>
  );
};

export default SongDetails;
