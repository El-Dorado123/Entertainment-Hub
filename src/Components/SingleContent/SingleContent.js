import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import { Badge } from '@mui/material'
import ContentModel from '../ContentModel.js/ContentModel'

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ContentModel media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? 'success' : 'primary'} />
      <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className='title'>{title}</b>
      <span className='subtitle'>
        {media_type === 'tv' ? "TV Series" : "Movie"}
        <span className='subtitle'>{date}</span>
      </span>
    </ContentModel>
  )
}

export default SingleContent
