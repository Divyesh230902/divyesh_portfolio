/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Want to Enhance your pixelated images try out my PixEnchar",
    description:
      "This tool uses Genarative AI to Upscale your images. It uses the power of AI to enhance your images.",
    url: "https://github.com/Divyesh230902/PixEnchar",
  },
  {
    title: "Want to have some Awesome AI project Ideas",
    description:
      "Contributed sketch note imagery to accompany each lesson.",
    url: "https://github.com/Divyesh230902/awesome-generative-ai-guide",
  },
  {
    title: "My Resume",
    description:
      "Check out my Resume, to know more about me",
    url: "https://drive.google.com/file/d/11Z7q71oWoFyUxhYaHJS4p9sDNjUP0HgW/view?usp=share_link",
  },
  {
    title: "My podcast on AI",
    description:
      "Video interview to explain my experience throughout my journey in AI.",
    url: "https://www.youtube.com/watch?v=npSQ9Pfx_aM",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
