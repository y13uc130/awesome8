import React from "react";
import "./styles.scss";
import UserDetails from "components/UserDetails/UserDetails";
import Tags from "components/Tags/Tags";
import CarouselIndicator from "assets/images/carousel-indicator.svg";
import LikeIcon from "assets/images/heart.png";
import CommentsIcon from "assets/images/comments.svg";
import BookmarkIcon from "assets/images/bookmark.svg";
import MoreIcon from "assets/images/more.svg";
import CommentsSection from "components/CommentsSection/CommentsSection";
import { userData } from "utils/content";

export default function PostWithComments(props = {}) {
  const {
    postImg,
    postTitle,
    postMessage,
    likeCount,
    commentCount,
    canBookmark,
    showMore,
    comments,
    tags,
  } = props;

  return (
    <div className="MainContainer">
      <div className="PostContainer mx-16">
        <div className="flex justify-between mb-16">
          <UserDetails {...userData} />
          <button className="followBtn p1">팔로우</button>
        </div>
        <div className="postContent">
          {postTitle && <div className="h2 mb-16">{postTitle}</div>}
          {postMessage && (
            <div className="p1" dangerouslySetInnerHTML={postMessage} />
          )}
        </div>
        {!!tags?.length && <Tags tags={tags} />}
      </div>
      {postImg && (
        <div className="imgContainer">
          <img className="imgStyle" src={postImg} />
          <img className="carouselIndicatorStyle" src={CarouselIndicator} />
        </div>
      )}
      <div className="actionsContainer px-16 py-12 flex align-center">
        {likeCount && (
          <div className="flex align-center mr-8">
            <img className="size-32" src={LikeIcon} />
            <div className="p2">{likeCount}</div>
          </div>
        )}
        {commentCount && (
          <div className="flex align-center mr-8">
            <img src={CommentsIcon} />
            <div className="p2">{commentCount}</div>
          </div>
        )}
        {canBookmark && (
          <div className="mr-6">
            <img src={BookmarkIcon} />
          </div>
        )}
        {showMore && (
          <div className="ml-12">
            <img src={MoreIcon} />
          </div>
        )}
      </div>
      {comments && (
        <div className="pt-12 px-16">
          <CommentsSection comments={comments} />
        </div>
      )}
    </div>
  );
}
