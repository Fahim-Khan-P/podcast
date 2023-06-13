import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import { getPodcast } from '../../redux/podcasts/podcastsSlice'


function PodcastPage() {

  const { id } = useParams()
  const podcast = useSelector((state) => state.podcasts.podcast)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPodcast(id))
  },[dispatch, id])

  return (
    <div>
      <h1>

      Producer: {podcast.producer} <br></br>
      Id: {podcast.id}
      </h1>
    </div>
  )
}

export default PodcastPage