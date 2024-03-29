import "../../CSS/Body.css";
import Slideshow from "../Slideshow";

function Sic() {
  const images = [
    "/Assets/sic2.jpg",
    "/Assets/sic5.png",
    "/Assets/sic3.jpg",
    "/Assets/sic1.jpg",
    "/Assets/sic4.jpg",
  ];
  return (
    <div className="body">
      <div className="project-page">
        <div className="project-header">
          <h1 className="project-h1">[sic]</h1>
          <h2 className="project-subhead">
            <b>
              By Melissa James Gibson
              <br />
              Something on the Green
              <br />
              Brown University
              <br />
            </b>
            <br />
            <br />
            <b>Director:</b> Danny Quinter <br />
            <b>Lighting Design:</b> Lizi Zhang <br />
            <b>Costumes:</b> Wenhao Cai <br />
            <b>Sound:</b> Juliana Morgado Brito <br />
          </h2>
          <p className="project-info">
            [sic] follows three apartment-neighbors as they attempt to figure
            out what’s next in their lives, at the same time there is another
            couple living across an air shaft in the midst of a divorce, also
            asking what comes next? To achieve this visually I used a set of
            windows, shutters, and blinds to create the impression of a rear
            apartment wall. This allowed the audience to see only portions and
            shadows of the actors upstage of the wall and the feeling that the
            three neighbors were hearing only moments of these other characters'
            lives.
          </p>
        </div>
        <div className="project-image-box">
          <Slideshow images={images} />
        </div>
      </div>
    </div>
  );
}

export default Sic;
