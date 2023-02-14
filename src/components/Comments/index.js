import {Component} from 'react'

import './index.css'

import {formatDistanceToNow} from 'date-fns'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    nameInput: '',
    commentInput: '',
  }

  onSubmitComment = event => {
    event.preventDefault()
    const initialBgColors =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const {nameInput, commentInput} = this.state

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: formatDistanceToNow(new Date()),
      colors: initialBgColors,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  addName = event => {
    this.setState({nameInput: event.target.value})
  }

  addComment = event => {
    this.setState({commentInput: event.target.value})
  }

  deleteItem = id => {
    const {commentList} = this.state
    this.setState({commentList: commentList.filter(each => each.id !== id)})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentList, commentInput} = this.state

    const len = commentList.length
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Comments</h1>
          <div className="card-containers">
            <div className="get-data">
              <p className="para"> Say something about 4.0 Technologies</p>
              <form onSubmit={this.onSubmitComment} className="form">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                  value={nameInput}
                  onChange={this.addName}
                />
                <textarea
                  rows="7"
                  cols="21"
                  className="text-area"
                  placeholder="Your Comment"
                  value={commentInput}
                  onChange={this.addComment}
                />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="break" />
        <div className="comments-arrea">
          <div className="box-para">
            <p className="box">{len}</p>
            <p className="para"> Comments</p>
          </div>
          <div className="comments">
            <ul className="comment">
              {commentList.map(each => (
                <CommentItem
                  commentDetails={each}
                  deleteItem={this.deleteItem}
                  key={each.id}
                  toggleIsLiked={this.toggleIsLiked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
