import IntoTheWoods from "./Projects/IntoTheWoods";
import StupidFkingBird from "./Projects/StupidFkingBird";
import Sic from "./Projects/[sic]";
import Psycho from "./Projects/psychopsychotic";

function Portfolio() {
  return (
    <div>
      <div className="smallScreen">
        <Sic />
        <Psycho />
        <StupidFkingBird />
        <IntoTheWoods />
      </div>
      <div className="largeScreen">
        <Sic />
      </div>
    </div>
  );
}

export default Portfolio