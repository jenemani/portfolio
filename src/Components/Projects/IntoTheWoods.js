import "../../CSS/Body.css";
import Slideshow from "../Slideshow";

function IntoTheWoods() {
  const images = [
    "/Assets/woods1.jpg",
    "/Assets/woods2.jpg",
    "/Assets/woods3.jpg",
    "/Assets/woods4.jpg",
    "/Assets/woods6.jpg",
    "/Assets/woods5.jpg",
  ];
  return (
    <div className="body">
      <div className="project-page">
        <div className="project-header">
          <h1 className="project-h1">INTO THE WOODS</h1>
          <h2 className="project-subhead">
            <b>
              {" "}
              Music and Lyrics by Stephen Sondheim
              <br />
              Book by James Lapine
              <br />
              Brown University
            </b>
            <br />
            <br />
            <b>Director:</b> Ethan Mullen and Elise Aronson <br />
            <b>Co-Designers:</b> Juliana Morgado-Brito <br />
            <b>Lighting Design:</b> Lizi Zhang <br />
            <b>Costumes:</b> Lulu Cavicchi <br />
            <b>Sound:</b> Milan Capoor
          </h2>
          <p className="project-info">
            Fishman studio is a theater space filled with glass, sound paneling
            and metal - none of which embodies the overgrown, magical nature of
            a show like Into The Woods. Confronted with this Juliana and I chose
            to use a set of industrial materials for the design. Instead of
            trying to mask the nature of the space, we decided to create our
            woods in compliment to the space itself. Using rope and mesh we
            created a series of semi translucent trees to give depth to the
            stage and maintain audience sightlines for a big musical in a tiny
            room.
          </p>
        </div>
        <div className="project-image-box">
          <Slideshow images={images} />
        </div>
      </div>
    </div>
  );
}

export default IntoTheWoods;
