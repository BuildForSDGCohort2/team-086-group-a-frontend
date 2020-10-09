import React from "react";
import TopViewStyles from "../../Styles/Blogs/TopView.module.css";
const TopBgImage = () => {
  const {
    container,
    heading,
    wrapper,
    articleWrapper,
    writer,
    article,
  } = TopViewStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <hgroup className={heading}>
          <h3>featured article</h3>
          <h2>world's healthy meal</h2>
        </hgroup>
        <div className={articleWrapper}>
          <div className={writer}>
            <strong>sonn baije</strong>
            <span>{" april 25,2012"}</span>
          </div>
          <article className={article}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            architecto facilis quibusdam quasi nostrum obcaecati error illum
            magni hic necessitatibus quam reiciendis dolore iusto sit expedita,
            at totam vero saepe...
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopBgImage;
