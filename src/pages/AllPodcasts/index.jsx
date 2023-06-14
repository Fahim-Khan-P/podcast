import { useEffect } from "react";
// import { Spinner } from 'react-bootstrap/dist/react-bootstrap.min.js';
import { useDispatch, useSelector } from "react-redux";
import { fetchPodcasts } from "../../redux/podcasts/podcastsSlice";
import Podcast from "../../components/Podcast";

const AllPodcasts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [dispatch]);

  const podcasts = useSelector((state) => state.podcasts.podcasts);
  const loading = useSelector((state) => state.podcasts.loading);

  const renderPodcasts = () => {
    const renderedpodcasts = podcasts.map((podcast) => {
      return <Podcast key={podcast.id} podcast={podcast} />;
    });
    return renderedpodcasts;
  };
  if (loading === "loading")
    return (
      
      <div className="d-flex justify-content-center m-5" >
        <div className="spinner-border text-danger" style={{width: '10rem', height: '10rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  return <div>{renderPodcasts()}</div>;
};

export default AllPodcasts;
