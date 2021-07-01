import { useState } from 'react';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';

import './CommentPage.scss';

const CommentPage = () => {
  const [commentsList, setCommentsList] = useState([]);

  const addCommentInCommentList = (comment) => {
    setCommentsList([...commentsList, comment]);
  }
  const onStatusChange = index => {
    const updatedCommentObj = { ...commentsList[index], status:'Done'};
    const updatedCommentList = [
      ...commentsList.slice(0, index),
      updatedCommentObj,
      ...commentsList.slice(index+1),
    ];
    setCommentsList([...updatedCommentList]);
  }

  return (
    <main className="main-section">
      <header className="header-section">
        <h2>User Comments</h2>
      </header>
      <div className="comment-page">
        <CommentForm addCommentInCommentList={addCommentInCommentList} />
        <CommentList commentsList={commentsList} onStatusChange={onStatusChange} />
      </div>
      <footer className="footer-section">
        <p>Footer</p>
      </footer>
    </main>
  );
}

export default CommentPage;