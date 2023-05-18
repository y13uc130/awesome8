import React from "react";
import "./styles.scss";
import LikeIcon from "assets/images/heart.png";
import CommentsIcon from "assets/images/comments.svg";
import UserDetails from "components/UserDetails/UserDetails";
import MoreIcon from "assets/images/more.svg";

export default function CommentsSection(props) {
  const { comments } = props;
  if (!comments?.length) return null;
  return (
    <div className="pb-12">
      {comments.map((comment, commentIndex) => {
        const { likeCount, subComments = [] } = comment;
        const commentCount = subComments?.length;
        return (
          <div key={commentIndex}>
            <div className="flex justify-between align-start mb-8">
              <UserDetails {...comment} isComment={true} />
              <img src={MoreIcon} />
            </div>
            <div className="commentStyle">
              <div className="p2 mb-4">{comment.text}</div>
              <div className="flex align-center">
                {likeCount && (
                  <div className="flex align-center mr-8">
                    <img className="size-25" src={LikeIcon} />
                    <div className="p2">{likeCount}</div>
                  </div>
                )}
                {!!commentCount && (
                  <div className="flex align-center mr-8">
                    <img className="size-25" src={CommentsIcon} />
                    <div className="p2">{commentCount}</div>
                  </div>
                )}
              </div>
              {!!subComments?.length && (
                <div className="pt-12">
                  <CommentsSection comments={subComments} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
