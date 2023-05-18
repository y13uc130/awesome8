import React from "react";
import "./styles.scss";
import GalleryIcon from "assets/images/gallery.svg";

export default function CommentBox() {
  return (
    <div className="CommentBoxContainer align-center">
      <div className="flex align-center flex-1">
        <img className="mr-18 py-12" src={GalleryIcon} alt={"gallery"} />
        <textarea
          type="text"
          placeholder="댓글을 남겨주세요."
          name="inputComment"
          className="commentInputStyle"
        />
      </div>
      <p className="p1 py-12">등록</p>
    </div>
  );
}
