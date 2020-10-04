import React, { useContext } from "react";
import CustomImage from "../../Common/Image.component/Image";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import AllFeedsStyles from "../../Styles/Blogs/AllFeeds.module.css";

const AllFeeds = () => {
  const [state] = useContext(RegisterContextMembers);
  const { blogs } = state;
  const { feeds } = blogs;
  const {
    container,
    title,
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
  } = AllFeedsStyles;

  const allFeeds = feeds
    ? feeds
        .filter((value, index) => index <= 2)
        .map(({ title, image, desc, posterId, tags, date, poster }) => (
          <article className={feed} key={posterId}>
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
          </article>
        ))
    : null;

  return (
    <section className={container}>
      <div className={title}>
        <h2>all articles</h2>
      </div>
      <div className={wrapper}>
        <div className={feedWrapper}>{allFeeds}</div>
      </div>
    </section>
  );
};

export default AllFeeds;
