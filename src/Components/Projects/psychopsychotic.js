import "../../CSS/Body.css";
import Slideshow from "../Slideshow";

function Psycho() {
  const images = [
    "/Assets/psycho1.jpg",
    "/Assets/psycho2.jpg",
    "/Assets/psycho3.jpg",
    "/Assets/psycho4.jpg",
    "/Assets/psycho5.jpg",
  ];
  return (
    <div className="body">
      <div className="project-page">
        <div className="project-header">
          <h1 className="project-h1">PSYCHOPSYCHOTIC</h1>
          <h2 className="project-subhead">
            <b>
              {" "}
              By Alexa Derman
              <br />
              Production Workshop
              <br />
              Brown University
            </b>
            <br />
            <br />
            <b>Director:</b> Josephine Miller <br />
            <b>Lighting Design:</b> Lizi Zhang <br />
            <b>Co-Designers:</b> Sam Giamatti <br />
            <b>Costumes:</b> Skye Robinson <br />
            <b>Sound:</b> Juliana Morgado Brito <br />
          </h2>
          <p className="project-info">
            Psychopsychotic is an extremized examination of sexual assault on
            college campuses. The narrative focuses on three college students,
            one a serial killer, one his girlfriend and one his ex locked in his
            closet. Alexa Derman’s script cranks up the plot to the brink of
            absurd in a way that allows the audience to more easily reflect and
            consider the real, lasting impact of assault. Josie, Sam and I
            wanted to emulate this in our design - creating a stylized
            whitewashed set with just enough pieces of college dorm room to
            remind the audience that what happens through the run isn’t fully a
            fiction.
          </p>
        </div>
        <div className="project-image-box">
          <Slideshow images={images} />
        </div>
      </div>
    </div>
  );
}

export default Psycho;
