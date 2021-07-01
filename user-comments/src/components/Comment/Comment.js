import CommentStatus from '../CommentStatus';
import './Comment.scss';

const Comment = ({ content, index, onStatusChange }) => {
  const { comment, status } = content;
  return (
    <div className="comment-card">
      <CommentStatus status={status} index={index} onStatusChange={onStatusChange} />
      <div className="comment-desc">
        <p className="comment-content">
          {comment}
        </p>
      </div>
    </div>
  );
}
  export default Comment;