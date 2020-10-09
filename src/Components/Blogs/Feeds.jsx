import React, { useContext } from "react";
import FeedStyles from "../../Styles/Blogs/Feed.module.css";
import CustomImage from "../../Common/Image.component/Image";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import Tags from "./Tags";

const Feeds = () => {
  const [state] = useContext(RegisterContextMembers);
  const { blogs } = state;
  const { feeds } = blogs;

  const {
    container,
    wrapper,
    feedWrapper,
    feed,
    img,
    picture,
    viewAside,
    heading,
    aside,
    postDate,
    description,
    tagWrapper,
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
                  <figcaption className={description}>{desc}</figcaption>
                </div>
              </div>
            </div>
          </div>
        ))
    : null;

  return (
    <section className={container}>
      <div className={wrapper}>
        <div className={feedWrapper}>{newsFeeds}</div>
        <div className={tagWrapper}>
          <Tags />
        </div>
      </div>
    </section>
  );
};

export default Feeds;
