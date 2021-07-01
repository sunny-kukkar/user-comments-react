import Comment from '../Comment';

import './CommentList.scss';

const CommentList = ({ commentsList, onStatusChange }) => {

  return (
    <div className="comment-list">
      <div className="comment-cards">
        {
          commentsList && (
            commentsList.map((content, index) => (
              <Comment key={index} index={index} content={content} onStatusChange={onStatusChange} />
            ))
          )
        }
      </div>
    </div>
  );
}
export default CommentList;