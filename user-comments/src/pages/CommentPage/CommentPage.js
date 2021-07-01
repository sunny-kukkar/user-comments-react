import { useState } from 'react';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';

import './CommentPage.scss';

const CommentPage = () => {
  const [commentsList, setCommentsList] = useState([]);

  const addCommentInCommentList = (comment) => {
    setCommentsList([...commentsList, comment]);
  }

  return (
    <main className="mainSection">
      <header className="headerSection">
        <h2>User Comments</h2>
      </header>
      <div className="CommentPage">
        <CommentForm addCommentInCommentList={addCommentInCommentList} />
        <CommentList commentsList={commentsList} />
      </div>
      <footer className="footerSection">
        <p>Footer</p>
      </footer>
    </main>
  );
}

export default CommentPage;