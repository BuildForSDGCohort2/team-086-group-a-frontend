import React, { useContext } from "react";
import CustomList from "../../Common/List.component/List";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import blogsTagListStyle from "../../Styles/Blogs/blogsTagList.module.css";

const Tags = () => {
  const { tag, tagHead, list, tagList } = blogsTagListStyle;
  const [state] = useContext(RegisterContextMembers);
  const { blogs } = state;
  const { tags } = blogs;

  const lists = tags ? (
    tags.map((tags, index) => (
      <CustomList text={tags} key={index} className={tagList} />
    ))
  ) : (
    <div>
      <h4>no tag have been introduced</h4>
    </div>
  );
  return (
    <section className={tag}>
      <div className={tagHead}>
        <h2>tag</h2>
      </div>
      <div className={list}>
        <ul>{lists}</ul>
      </div>
    </section>
  );
};

export default Tags;
