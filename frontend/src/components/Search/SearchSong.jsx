import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SectionSearch from './SectionSearch';
import SongContext from '../../contexts/SongContext';
import useApi from '../../hooks/useAPI';
import useLoadingBar from '../../hooks/useLoadingBar';
const SearchSong = () => {
  const { name } = useParams();
  const { searchData, setSearchData } = useContext(SongContext);
  const { isLoading } = useApi('/api/search/', name, setSearchData);

  return (
    <>
      <div className="song_data h-72 my-10">
        {searchData?.topQuery?.data?.length > 0 && (
          <SectionSearch
            title={'Top'}
            data={searchData?.topQuery?.data || []}
            viewAllLink={`/search/top/${name}`}
          />
        )}
        {searchData?.albums?.data?.length > 0 && (
          <SectionSearch
            title={'Albums'}
            data={searchData?.albums?.data || []}
            viewAllLink={`/search/${name}/albums`}
          />
        )}
        {searchData?.playlists?.data?.length > 0 && (
          <SectionSearch
            title={'Playlists'}
            data={searchData?.playlists?.data || []}
            viewAllLink={`/search/${name}/playlists`}
          />
        )}
        {searchData?.songs?.data?.length > 0 && (
          <SectionSearch
            title={'Songs'}
            data={searchData?.songs?.data || []}
            viewAllLink={`/search/${name}/songs`}
          />
        )}
        {searchData?.artists?.data?.length > 0 && (
          <SectionSearch
            title={isLoading ? '  ' : 'Artists'}
            data={searchData?.artists?.data || []}
            viewAllLink={`/search/${name}/artists`}
          />
        )}
        {searchData?.episodes?.data?.length > 0 && (
          <SectionSearch
            title={'Episodes'}
            data={searchData?.episodes?.data || []}
            viewAllLink={`/search/${name}/episodes`}
          />
        )}
      </div>
    </>
  );
};

export default SearchSong;
