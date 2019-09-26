import React from 'react'
import { Comment } from 'semantic-ui-react'




const CommentCard = (props) => (


  <Comment.Group >
    <Comment className="commentComponent">
      <Comment.Avatar className="commentIMG" as='a' src={props.portrait} alt="salty user" />
      <Comment.Content>
        <Comment.Author className="usernameFontWeight"> {props.author}</Comment.Author>
        <Comment.Text className="userScore">Score: {props.score.toFixed(2) * 100}</Comment.Text>
        <Comment.Text >
          “ {props.comment} ”
          </Comment.Text>
        <Comment.Actions>
          {/* <Comment.Action>Reply</Comment.Action> */}
          <Comment.Action className="commentSave">💾</Comment.Action>
          <Comment.Action className="commentUpVote">👍</Comment.Action>
          <Comment.Action className="commentDownVote">👎</Comment.Action>
          {/* <Comment.Action>Hide</Comment.Action> */}
          {/* <Comment.Action>
              <Icon name='expand' />
              Full-screen
            </Comment.Action> */}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>

)

export default CommentCard;

