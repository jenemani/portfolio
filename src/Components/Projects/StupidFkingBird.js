import "../../CSS/Body.css";
import Slideshow from "../Slideshow";

function StupidFkingBird() {
  const images = [
    "/Assets/stupid4.jpg",
    "/Assets/stupid2.jpg",
    "/Assets/stupid3.jpg",
    "/Assets/stupid5.png",
    "/Assets/stupid1.jpg",
    "/Assets/stupid6.jpeg",
  ];
  return (
    <div className="body">
      <div className="project-page">
        <div className="project-header">
          <h1 className="project-h1">STUPID FUCKING BIRD</h1>
          <h2 className="project-subhead">
            <b>
              {" "}
              By Aaron Posner
              <br />
              Something on the Green
              <br />
              Brown University
            </b>
            <br />
            <br />
            <b>Director:</b> Medora Groff <br />
            <b>Lighting Design:</b> Yana Tsyvis <br />
            <b>Costumes:</b> Ines Sawiris and Alden Forbes <br />
            <b>Sound:</b> Juliana Morgado Brito
            <br />
          </h2>
          <p className="project-info">
            Aaron Posner’s Stupid Fucking Bird is a contemporary adaptation of
            Anton Chekhov's The Seagull. The takes place in a theater and the
            characters know they’re fictional; as they go on performing for the
            audience and each other their attempts to grasp at everyone’s
            attention grow messier and more explosive. To help enable this
            feeling of performance, I used an assortment of chairs and benches
            to make up the entire set. From a campfire, to a kitchen, to a
            study, each space was created out of a seemingly haphazard pile of
            chairs along the back wall of the space. Above it all the backdrop
            was a collage of bits of everyday life - a bike tire, a handbag, a
            record player - reminders that the performance happening on stage
            were reflections of performances we all undertake in our daily
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

export default StupidFkingBird;
