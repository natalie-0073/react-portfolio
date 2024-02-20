import './Project.css';
import PropTypes from 'prop-types';

function Project({ title, deployedLink, githubLink, image}){
    Project.propTypes = {
        title: PropTypes.string.isRequired,
        deployedLink: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    };
    return(
        <div className="project col">
        <h3 className='project-name'>{title}</h3>
        <div className='links'>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className='project-link'>
            Deployed Version
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className='project-link'>
            GitHub Repository
          </a>
        </div>
        <img src={image} alt={title} className='project-image' />
      </div>
    );
    }
    export default Project;