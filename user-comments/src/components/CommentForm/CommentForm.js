import { useState, useRef } from 'react';

import './CommentForm.scss';

const CommentForm = ({ addCommentInCommentList }) => {
  const [comment, setComment] = useState("");
  const [disabledButton, setDisableButton] = useState(true);
  const ref = useRef();

  const handleChange = (e) => {
    const commentVal = e.target.value;
    setComment(commentVal);
    commentVal.length > 0 ? setDisableButton(false) : setDisableButton(true);
  }

  const handleSubmit = (e) => {
    if(comment.length > 0){
      addCommentInCommentList( { comment: comment, status: "Pending for review"});
      setComment("");
      setDisableButton(true);
      ref.current.focus();
    }
    e.preventDefault();
  }
  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <div className="comment-field">
          <label className="comment-label">
            Comment
          </label>
          <textarea ref={ref} maxLength="1000" rows="4" cols="50" className="comment-text" value={comment} onChange={handleChange} />
        </div>
        <div className="comment-action">
          <button type="submit" className="comment-submit" disabled={disabledButton}>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default CommentForm;