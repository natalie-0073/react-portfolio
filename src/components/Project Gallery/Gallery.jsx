import './Gallery.css';
import Project from '../Project/Project';
import projectsData from './projectsData.json';
//import bootstrap from 'bootstrap';
function Gallery(){
    return(
        <div className='gallery'>
            <h2 className='gallery-header'>PROJECTS</h2>
            <div className="projects row">
                {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
            
            </div>
        </div>
    );
    }
    export default Gallery;