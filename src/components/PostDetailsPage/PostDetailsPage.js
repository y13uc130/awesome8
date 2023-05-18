import React from "react";
import "./styles.scss";
import PostWithComments from "../PostWithComments/PostWithComments";
import CommentBox from "../CommentBox/CommentBox";
import Header from "../Header/Header";
import { dummyData } from "utils/content";

export default function PostDetailsPage() {
  return (
    <div className="">
      <div className="headerAbsoluteContainer">
        <Header />
      </div>
      <PostWithComments {...dummyData} />
      <CommentBox />
    </div>
  );
}
