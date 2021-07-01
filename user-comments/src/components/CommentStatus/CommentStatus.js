import './CommentStatus.scss';
import icon from "../../icons8-ok.svg";

const CommentStatus = ({ status, index, onStatusChange }) => {
  const handleStatus = (e) => {
    onStatusChange(index);
  }
  return (
    <div className="comment-status-action">
      <div className={ `comment-status ${status.toLowerCase()}`} >
        {status}
      </div> 
      {
        status !== "Done" && (
          <div className="comment-actions">
            <button className="btn change-status" onClick={handleStatus} >
              <img src={icon} className="icon" alt="done" />
            </button>
          </div>
        )
      }
    </div>
  );
}
export default CommentStatus;