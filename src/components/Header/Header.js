import React from "react";
import "./styles.scss";
import ArrowIcon from "assets/images/arrow.svg";
import NotifyIcon from "assets/images/notification.svg";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <img src={ArrowIcon} alt={"<"} />
      <div className="h1">자유톡</div>
      <img src={NotifyIcon} alt={"bell"} />
    </div>
  );
}
