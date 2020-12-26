import React from 'react';
import faker from 'faker';

export const CommentsDetail = (props) => {
  return (
    <div>
      <div className='comment'>
        <a href='' className='avatar'>
          <img src={faker.image.avatar()} alt='image' />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {props.author}
          </a>
        </div>
        <div className='metadata'>
          <span className='date'>Today at 6</span>
        </div>
        <div className='text'>nice blog</div>
      </div>
    </div>
  );
};
