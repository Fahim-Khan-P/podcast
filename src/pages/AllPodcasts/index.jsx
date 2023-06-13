import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodcasts } from '../../redux/podcasts/podcastsSlice';
import Podcast from '../../components/Podcast';

const AllPodcasts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [dispatch]);

  const podcasts = useSelector((state) => state.podcasts.podcasts);
  const loading = useSelector((state) => state.podcasts.loading)

 const renderPodcasts = () => {
    const renderedpodcasts = podcasts.map((podcast) => {
      return <Podcast key = {podcast.id} podcast = {podcast} />
    }
    )
    return renderedpodcasts
  }
  if (loading === 'loading') return <h1>loading</h1>  
  return (
    <div>
      {renderPodcasts()}
    </div>
  );
};

export default AllPodcasts;