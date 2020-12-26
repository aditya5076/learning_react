import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import { CommentsDetail } from './CommentsDetail';

function App() {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentsDetail author='sam' time='Today at 6' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail author='fam' time='Today at 6' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentsDetail author='lam' time='Today at 6' />
      </ApprovalCard>
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector('#root'));
