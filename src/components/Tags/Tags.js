import React from "react";
import "./styles.scss";
import Tag from "components/Tag/Tag";

export default function Tags(props) {
  const { tags } = props;
  return (
    <div className="TagsContainer">
      {tags.map((tag, tagIndex) => {
        return <Tag key={tagIndex} tag={tag} />;
      })}
    </div>
  );
}
