import React from "react";
import "./styles.scss";

export default function Tag(props) {
  const { tag } = props;
  return <p className="tagContainer p1">#{tag}</p>;
}
