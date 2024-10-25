
import "./projects.css";
import PropTypes from 'prop-types';

const ProjectItem = ({ title, copy, year, url }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="project-title">
        <p>{title}</p>
      </div>
      <div className="project-copy">
        <p>{copy}</p>
      </div>
      <div className="project-divider"></div>
      <div className="project-year">
        <p>{year}</p>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const Projects = () => {
  const projectData = [
    {
      title: "StudioSize",
      copy: "Cutting-edge, responsive web application with advanced UI/UX design",
      year: "2024",
      url: "https://studiosize.com",
    },
    {
      title: "LiveDocs",
      copy: "Real-time collaborative document editing platform",
      year: "2024",
      url: "https://livedocs-doc.vercel.app/sign-in",
    },
    {
      title: "Ratan.Codes",
      copy: "Portfolio made with love. and a bit of code.",
      year: "2024",
      url: "https://ratanzcodes.vercel.app/",
    },
    {
      title: "Sundown",
      copy: "A smooth ride..",
      year: "2024",
      url: "https://studio-sundown.netlify.app/",
    },
    {
      title: "Genesis",
      copy: "Scrolling magic, crafted with love",
      year: "2024",
      url: "https://genesis-scroll.vercel.app/"
    },
    {
      title: "Brainwave",
      copy: "A simple, yet powerful, AI chatbot",
      year: "2025",
      url: "https://brainwave-ebon-xi.vercel.app//"
    },
    {
      title: "Dribble on Cribble",
      copy: "Enhancing online shopping through tailored e-com",
      year: "2024",
      url: "https://dribble-clone-frontend.vercel.app/"
    },
    {
      title: "Rejoice",
      copy: "A ride to rejoice",
      year: "2024",
      url: "https://rejoicex.netlify.app"
    },
    {
      title: "Ratanz Art",
      copy: "A place to showcase my art in animation Xd",
      year: "2024",
      url: "https://ratanzart.netlify.app/"
    },
    {
      title: "serenity-slides",
      copy: "Slides to serenity",
      year: "2024",
      url: "https://serenity-slides.netlify.app/"
    }
  ];

  return (
    <div className="container page-projects">
      {projectData.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          copy={project.copy}
          year={project.year}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default Projects;
