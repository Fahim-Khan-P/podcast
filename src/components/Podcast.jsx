/* eslint-disable react/prop-types */
// import { fetchpodcasts } from '../redux/podcastsSlice';

import { Link } from 'react-router-dom';


const Podcast = ({ podcast }) => {
 
  return (
    <Link to = {`${podcast.id}`}>

        <div className="podcast-container">
          <h2 className="title">{podcast?.producer}</h2>
          <h3 className="author">{podcast?.id}</h3>
         
      </div>
    </Link>

  );
};

export default Podcast;