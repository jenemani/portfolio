import '../CSS/Body.css'
import {useState} from 'react';
import {Projects} from './Projects'
import ProjectInfo from './ProjectInfo';

function MyWork() {
    const [project, setProject] = useState(Projects[0])
    const [counter, setCounter] = useState(0);
    const [url, setUrl] = useState('')

    const handleClick = event =>{
        setCounter(0);
        const collection = document.getElementsByClassName("projects-text");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.textDecoration = "none";
        }
        event.currentTarget.style.textDecoration ='underline';

        setProject(Projects[event.currentTarget.id])
    }

    function handleLeave(){
        setUrl('')
        setProject(Projects[0])
    }

    function setImage(number){
        setUrl(project.img[number]);
    }

    var imageStyle={  
        backgroundImage: 'url('+url+')',
                backgroundSize: 'contain',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'left top',
    }
      


    return (
      <a className ="anchor" href="#recent" id="recent">
      <div className="my-work" id="work">
          <h3 className="header">RECENT</h3>
        <div className="projects">
          
            <h2 className="projects-text" id={1} onClick={handleClick}>
              greenwood
              <br /> metals
            </h2>
          <h2 className="projects-text" id={2} onClick={handleClick}>
            persona building
          </h2>
          <h2 className="projects-text" id={3} onClick={handleClick}>
            cs@brown
            <br />
            redesign
          </h2>
          <h2 className="projects-text" id={4} onClick={handleClick}>
            stupid
            <br />
            f**king bird
          </h2>
        </div>
        <div className="info" style={imageStyle}>
          <ProjectInfo
            project={project}
            counter={counter}
            setCounter={setCounter}
            setImage={setImage}
            handleLeave={handleLeave}
          />
        </div>
      </div>
      </a>
    );
}

export default MyWork;