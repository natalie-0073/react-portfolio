import './Home.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home(){
    const handleDownload = async () => {
        try {
          // Fetch the PDF file
          const response = await fetch('/Frontend Developer_Nataliia Chala.pdf');
    
          // Get the PDF file content as a Blob object
          const blob = await response.blob();
    
          // Generate a URL for the Blob object
          const url = URL.createObjectURL(blob);
    
          // Create a download link
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Frontend Developer_Nataliia Chala.pdf'; // Specify the filename
          document.body.appendChild(link);
    
          // Trigger a click event on the download link
          link.click();
    
          // Clean up by revoking the URL
          URL.revokeObjectURL(url);
          document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading PDF:', error);
        }
      };
    return(
        <div className='home'>
            <h1 className='home-header'>Hi, I am <span className='accent'>Nataliia Chala.</span></h1>
            <h3 className='home-role'>A Front End Developer.</h3>
            <h5 className='home-description'>My portfolio is a reflection of my journey and dedication as a frontend developer. With a keen eye for design and a passion for coding, I strive to create captivating and intuitive user interfaces that leave a lasting impression. My projects not only showcase my technical skills but also demonstrate my ability to translate ideas into polished, interactive experiences. As an aspiring frontend developer, I am committed to delivering impactful solutions that delight users and drive meaningful engagement.</h5>
            <div className="additional-elements">
                <a href="" className='additional-resume'onClick={handleDownload}>resume</a>
                <a href="https://github.com/natalie-0073"><FaGithub className='underlined icon-link'/></a>
                <a href="https://www.linkedin.com/in/nataliia-chala0073/"><FaLinkedin className='underlined icon-link'/></a>
            </div>
        </div>
    );
    }
    export default Home;