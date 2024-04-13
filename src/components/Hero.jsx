import React from "react";
import soccerField from "../assets/soccer-field.jpg";

import Ronaldo from "../assets/Ronaldo.png";
import Messi from "../assets/Messi.png";
import Pele from "../assets/Pele.png";
import Maradona from "../assets/Maradona.png";
import Zidane from "../assets/Zidane.png";
import Iniesta from "../assets/Iniesta.png";
import Yashin from "../assets/Yashin.png";
import Cafu from "../assets/Cafu.png";
import Maldini from "../assets/Maldini.png";
import Canavaro from "../assets/Canavaro.png";
import Carlos from "../assets/Carlos.png";

const Hero = () => {
  // Function to display player's name based on the image clicked
  const displayPlayerName = (playerName) => {
    alert(playerName);
  };

  return (
    <div
      className="bg-no-repeat bg-center h-screen my-[-200px]"
      style={{ backgroundImage: `url(${soccerField})` }}
    >
      <div className="flex justify-between items-center relative top-72 px-14">
        <img
          src={Ronaldo}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Ronaldo")}
        />
        <img
          src={Pele}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Pele")}
        />
        <img
          src={Messi}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Messi")}
        />
      </div>

      <div className="flex justify-between items-center px-10 relative top-80">
        <img
          src={Iniesta}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Iniesta")}
        />
        <img
          src={Maradona}
          className="h-28 w-20 relative bottom-10"
          alt="-"
          onClick={() => displayPlayerName("Maradona")}
        />
        <img
          src={Zidane}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Zidane")}
        />
      </div>

      <div className="flex justify-between items-center px-10 relative top-96 ">
        <img
          src={Carlos}
          className="h-28 w-20 relative"
          alt="-"
          onClick={() => displayPlayerName("Carlos")}
        />
        <img
          src={Canavaro}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Canavaro")}
        />
        <img
          src={Maldini}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Maldini")}
        />
        <img
          src={Cafu}
          className="h-28 w-20 relative"
          alt="-"
          onClick={() => displayPlayerName("Cafu")}
        />
      </div>

      <div className="flex justify-center relative top-96">
        <img
          src={Yashin}
          className="h-28 w-20"
          alt="-"
          onClick={() => displayPlayerName("Yashin")}
        />
      </div>
    </div>
  );
};

export default Hero;
