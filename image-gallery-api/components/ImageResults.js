import './ImageList.css'
import React from 'react';
import Imagecard from './Imagecard';

function ImageResults({ images }) {
  const newImage = images.map((image) => (
    <Imagecard image={image} key={image.id} />
  ));
  return <div className='image-list'>{newImage}</div>;
}

export default ImageResults;
