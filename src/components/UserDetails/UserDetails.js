import React from "react";
import "./styles.scss";
import UserIcon from "assets/images/user2.svg";
import VerifiedIcon from "assets/images/verified.svg";

export default function UserDetails(props) {
  const {
    userImg,
    userName,
    isVerified = false,
    timeStamp,
    weight,
    height,
    isComment = false,
  } = props;
  return (
    <div className="UserDetailsContainer">
      <img className="mr-8" src={userImg} />
      <div>
        <div className="flex align-center">
          {userName && <p className="pr-4 h2">{userName}</p>}
          {isVerified && <img className="mr-4" src={VerifiedIcon} />}
          {timeStamp && <p className="p3">{timeStamp}</p>}
        </div>
        {!isComment && (
          <div className="flex text-gray pt-4">
            {height && <p className="p2 pr-4">{height}</p>}
            {weight && (
              <>
                {!!height && <p>•</p>}
                <p className="p2 pl-4">{weight}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
