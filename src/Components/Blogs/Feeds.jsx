import React, { useContext } from "react";
import CustomList from "../../Common/List.component/List";
import CustomImage from "../../Common/Image.component/Image";
import FeedStyles from "../../Styles/Blogs/Feed.module.css";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";

const Feeds = () => {
  const [state] = useContext(RegisterContextMembers);

  const { blogs } = state;
  const { feeds, tags: categories } = blogs;

  const {
    container,
    wrapper,
    feed,
    img,
    picture,
    viewAside,
    heading,
    aside,
    postDate,
    description,
    tags,
    list,
  } = FeedStyles;

  const newsFeeds = feeds
    ? feeds
        .filter((value, index) => index <= 2)
        .map(({ title, image, desc, posterId, tags, date, poster }) => (
          <div className={feed} key={posterId}>
            <fieldset className={img}>
              <CustomImage src={image} alt={"feed image"} className={picture} />
            </fieldset>

            <div className={viewAside}>
              <div className={heading}>
                <span>{tags}</span>
                <h3>{title}</h3>
              </div>
              <div className={aside}>
                <div className={postDate}>
                  <strong>{poster}</strong>
                  <em>{date}</em>
                  <div className={description}></div>
                  {/* <p></p> */}
                  <figcaption className={description}>{desc}</figcaption>
                </div>
              </div>
            </div>
          </div>
        ))
    : null;

  return (
    <section className={container}>
      <div className={wrapper}>{newsFeeds}</div>
    </section>

    //       <h2>tags</h2>
    //       <div className={list}>
    //         <ul></ul>
    //       </div>
  );
};

export default Feeds;
