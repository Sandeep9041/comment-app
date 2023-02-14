// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteItem, toggleIsLiked} = props
  const {id, name, comment, date, isLiked, colors} = commentDetails

  const likeGet = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const addBlue = isLiked ? 'like active' : 'like'

  const callDeleteItem = () => {
    deleteItem(id)
  }

  const getIsLiked = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="comment-card">
      <div className="all">
        <div className="symbol-card">
          <p className={`symbol ${colors}`}>{name[0]}</p>
        </div>
        <div className="name-date-comment">
          <div className="name-date">
            <h1 className="name">{name}</h1>
            <p className="date">{date} ago</p>
          </div>

          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete">
        <div className="like-button">
          <button type="button" onClick={getIsLiked}>
            <img src={likeGet} alt="like" className="img" />
          </button>
          <p className={addBlue}>Like</p>
        </div>
        <button type="button" data-testid="delete" onClick={callDeleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="img"
          />
        </button>
      </div>
      <hr className="break-item" />
    </li>
  )
}
export default CommentItem
