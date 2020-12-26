import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>approve</div>
          <div className='ui basic red button'>delete</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
