// import React from "react";
import "./post.css";

import { FaLink } from "react-icons/fa";

import PostImage1 from "../../assets/work/work-2.jpg";
import PostImage2 from "../../assets/work/work-7.jpg";

const Post = () => {
  return (
    <div className="container page-post">
      <div className="post-header">
        <div className="post-info">
          <p>Intro to the art of web development</p>
          <p>January 2024</p>
        </div>
        <div className="post-link">
          <FaLink size="14px" style={{ color: "hsl(0 0% 60%)" }} />
        </div>
      </div>

      <div className="post-content">
        <p>
          Web development is a fascinating blend of creativity and technology. It&apos;s the art of bringing ideas to life in the digital realm, where code becomes the brush and the browser the canvas. As we embark on this journey into the world of web development, we&apos;ll explore the fundamental building blocks that form the backbone of the modern internet.
        </p>

        <p>
          From the structure of HTML to the styling prowess of CSS and the interactivity of JavaScript, we&apos;ll uncover the layers that make websites not just functional, but beautiful and engaging. Whether you&apos;re a curious beginner or a seasoned coder looking to refine your skills, this introduction will illuminate the path ahead in the ever-evolving landscape of web technologies.
        </p>

        <div className="post-img post-img-1">
          <img src={PostImage1} alt="Web development workspace with computer and code on screen" />
        </div>

        <p>
          As we delve deeper, we&apos;ll explore the principles of responsive design, ensuring that our creations look stunning on devices of all sizes. We&apos;ll touch upon the importance of user experience and how thoughtful design can make or break a website&apos;s success. The world of web development is vast, with frameworks and libraries that can supercharge our productivity, and we&apos;ll begin to scratch the surface of these powerful tools.
        </p>

        <div className="post-img post-img-2">
          <img src={PostImage2} alt="Team of web developers collaborating on a project" />
        </div>

        <p>
          But web development isn&apos;t just about writing code; it&apos;s about solving problems and creating solutions. We&apos;ll discuss the importance of planning and wireframing, the art of debugging, and the crucial skill of optimizing for performance. As we progress, you&apos;ll see how each line of code contributes to the larger picture, forming the intricate tapestry of a fully-functional website.
        </p>

        <p>
          Remember, the journey of a web developer is one of continuous learning. Technologies evolve, new tools emerge, and best practices shift. But with a solid foundation and a passion for creation, you&apos;ll be well-equipped to adapt and thrive in this dynamic field. So let&apos;s roll up our sleeves and dive into the exciting world of web development, where every day brings new challenges and opportunities to innovate.
        </p>
      </div>

      <div className="white-space"></div>
    </div>
  );
};

export default Post;
